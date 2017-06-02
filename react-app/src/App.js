import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            increasing: false
        }
    }
    update() {
        ReactDOM.render(
            <App val={this.props.val+1} />,
            document.getElementById('root')
        )
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.val % 5 === 0;
    }
    render () {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps) {
        console.log(`prepProps: ${prevProps.val}`);
    }
}

App.defaultProps = {val: 1};
export default App;