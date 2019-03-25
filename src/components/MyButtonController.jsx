import React, {Component} from "react";
import ButtonAction from "../actions/ButtonAction"; //引入actions
import MyButton from "./MyButton.jsx";                  //引入组件
import ListStore from "../stores/ListStore";        //引入store
export default class MyButtonController extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : ListStore.getStates(),  //初始化获取到状态值
        };
        this._onChange = this._onChange.bind(this);
        this.createNewItem = this.createNewItem.bind(this);
    }
    componentDidMount(){
        ListStore.addListener(this._onChange);        //监听事件
    }
    componentWillUnmount(){
        ListStore.removeListener(this._onChange);     //移除事件
    }
    _onChange(){
        this.setState({
            items : ListStore.getStates(),             //事件的回调
        })
    }
    createNewItem(value){
        ButtonAction.addNewItem(value);        //调用action
    }
    render(){
        return (
            <MyButton
                items = {this.state.items}
                onChangeHandle = {this.createNewItem}
            />
        );
    }

}