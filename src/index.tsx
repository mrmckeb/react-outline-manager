import { Component, Fragment } from 'react';

interface Props extends React.HTMLProps<HTMLElement> {
	className: string,
	tagName?: string,
	toggle: boolean,
}

interface State {
	isUsingKeyboard: boolean,
}

export default class ReactOutlineHander extends Component<Props, State> {

	static defaultProps: Partial<Props> = {
		className: 'ReactOutlineManager',
	}

	state: State = {
		isUsingKeyboard: false,
	}

	componentDidMount () {
		this.addListeners();
		this.insertStyleTag();
		if (!this.props.tagName) this.updateClassName(this.props.className);
	}

	componentDidUpdate () {
		if (this.props.tagName) return;
		this.updateClassName(this.props.className);
	}

	componentWillUnmount () {
		this.removeListeners();
	}

	addListeners = () => {
		window.addEventListener('keydown', this.handleTab);
		if (this.props.toggle) window.addEventListener('mousedown', this.handleMouseDown);
	}

	handleTab = ({ keyCode }: KeyboardEvent) => {
		if (keyCode === 9) {
			this.setState({ isUsingKeyboard: true });
			if (!this.props.toggle) window.removeEventListener('keydown', this.handleTab);
		}
	}

	handleMouseDown = () => {
		this.setState({ isUsingKeyboard: false });
	}

	insertStyleTag = () => {
		const script = document.createElement('style');
		const className = this.props.className;

		script.id = className;
		script.innerText = `.${className} a:focus,.${className} area:focus,.${className} button:focus,.${className} iframe:focus,.${className} input:focus,.${className} select:focus,.${className} textarea:focus,.${className} [tabindex]:focus,.${className} [contenteditable]:focus { outline: none; }`;

		document.head.appendChild(script);
	}

	removeListeners = () => {
		window.removeEventListener('keydown', this.handleTab);
		window.removeEventListener('mousedown', this.handleMouseDown);
	}

	updateClassName = (className: string) => {
		if (this.state.isUsingKeyboard) {
			document.body.classList.remove(className);
		} else {
			document.body.classList.add(className);
		}
	}

	render () {
		const { children, className, toggle, tagName: Tag, ...rest } = this.props;

		if (!Tag) return <Fragment>{children}</Fragment>;

		const props = { ...rest };
		if (!this.state.isUsingKeyboard) Object.assign(props, { className });
		return <Tag { ...props } />;
	}

}
