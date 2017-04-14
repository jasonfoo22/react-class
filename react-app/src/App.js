import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0
        }
    }
    updateTxt (e){
        this.setState({txt: e.target.value})
    }
    updateCat (e){
        this.setState({cat: e.target.value})
    }
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
                <Widget update={this.updateTxt.bind(this)} />
                <Widget update={this.updateCat.bind(this)} />
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <h1>hello</h1>
                <b>{txt}</b>
                <Button>I <Heart /> React </Button>
            </div>
        )
    }
}

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

const Button = (props) =>
    <button>{props.children}</button>

const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default App