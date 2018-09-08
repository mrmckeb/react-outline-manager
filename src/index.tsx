import * as React from 'react';

interface Props {
	children?: JSX.Element,
	className: string,
	tagName: string,
	toggle: boolean,
}

export default class ReactOutlineHander extends React.Component<Props, {}> {

	static defaultProps: Partial<Props> = {
		className: 'ReactOutlineHandler',
		tagName: 'div',
	}

	state = {
		isUsingKeyboard: false,
	}

	componentDidMount () {
		this.addListeners();
		this.insertStyleTag();
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

	render () {
		const className = this.props.className;
		const Tag = this.props.tagName;
		return (
			<Tag {...!this.state.isUsingKeyboard ? { className } : null }>
				{this.props.children}
			</Tag>
		);
	}

}
