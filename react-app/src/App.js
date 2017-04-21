import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            cat: 0,
            currentEvent: '---',
            a: ''
        };
        this.updateMe = this.updateMe.bind(this)

    }
    updateMeAlone(){
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }
    updateMe (e){
        this.setState({currentEvent: e.type})
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
                <Title text="123453213" />
                <h1>{this.state.txt} - {this.state.cat}</h1>
                <h1>hello</h1>
                <b>{txt}</b>
                <Button>I <Heart /> React </Button>
                <textarea onKeyPress={this.updateMe}
                          onCopy={this.updateMe}
                          onCut={this.updateMe}
                          onPaste={this.updateMe}
                          onFocus={this.updateMe}
                          onBlur={this.updateMe}
                          onDoubleClick={this.updateMe}
                          onTouchStart={this.updateMe}
                          onTouchMove={this.updateMe}
                          onTouchEnd={this.updateMe}
                          rows="10"
                />
                <h1>{this.state.currentEvent}</h1>
                <hr />
                <InputUpdateMeAlone
                    ref={ component => this.a = component }
                    update={this.updateMeAlone.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    ref="b"
                    type="text"
                    onChange={this.updateMeAlone.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

class InputUpdateMeAlone extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update} /></div>
    }
}

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
    text(props, propName, component) {
        if(!(propName in props)){
            return new Error(`missing ${propName}`);
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`);
        }
        console.log(component)
    }
};

const Button = (props) =>
    <button>{props.children}</button>

const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default App