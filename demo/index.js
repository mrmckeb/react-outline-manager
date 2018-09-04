'use strict';

const createElement = React.createElement;

class Demo extends React.Component {

	render () {
		return createElement(ReactOutlineHander, { toggle: true }, [
			createElement('button', { key: 'a' }),
			createElement('input', { key: 'b' }),
			createElement('textarea', { key: 'c' }),
		]);
	}

}

ReactDOM.render(createElement(Demo), document.getElementById('root'));
