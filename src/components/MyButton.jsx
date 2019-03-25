import React from "react";
import ReactDOM from "react-dom";
export default class MyButton extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        let value = ReactDOM.findDOMNode(this.refs.input).value;
        this.props.onChangeHandle(value);
        ReactDOM.findDOMNode(this.refs.input).value = "";
    }
    render(){
        let item = this.props.items;
        let itemHtml = item.map((value,key) => <li key={key}> {value}</li> );

        return (
            <div>
                <input ref="input" type="text"/>
                <button onClick={this.handleChange}> New Item </button>
                <ul>{itemHtml}</ul>
                
            </div>
        )
    }
}