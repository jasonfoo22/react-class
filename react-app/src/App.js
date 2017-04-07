import React from 'react';

class App extends React.Component {
    static propTypes = {
        txt: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    };

    static defaultProps = {
        txt: "dsadsad"
    };
    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h1>hello</h1>
                <b>{txt}</b>
            </div>
        )
    }
}



export default App