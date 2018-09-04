import { Component } from 'react';

interface Props {
	children: JSX.Element,
	className: string,
	toggle: boolean,
}

const DEFAULT_CLASSNAME = 'ReactOutlineHandler';

export default class ReactOutlineHander extends Component<Props, {}> {

	state = {
		isUsingKeyboard: false,
	}

	addListeners = () => {
		window.addEventListener('keydown', this.handleTab);
		if (this.props.toggle) window.addEventListener('mousedown', this.handleMouseDown);
	}

	componentDidMount () {
		this.addListeners();
		this.insertStyleTag();
	}

	componentWillUnmount () {
		this.removeListeners();
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
		const className = this.props.className || DEFAULT_CLASSNAME;

		script.id = className;
		script.innerText = `.${className} a:focus,.${className} area:focus,.${className} button:focus,.${className} iframe:focus,.${className} input:focus,.${className} select:focus,.${className} textarea:focus,.${className} [tabindex]:focus,.${className} [contenteditable]:focus { outline: none; }`;

		document.head.appendChild(script);
	}

	removeListeners = () => {
		window.removeEventListener('keydown', this.handleTab);
		window.removeEventListener('mousedown', this.handleMouseDown);
	}

	render () {
		const className = this.props.className || DEFAULT_CLASSNAME;
		return (
			<div {...!this.state.isUsingKeyboard ? { className } : null }>
				{this.props.children}
			</div>
		);
	}

}
