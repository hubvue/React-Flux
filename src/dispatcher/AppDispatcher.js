import {Dispatcher} from "flux";            //引入flux
import ListStore  from "../stores/ListStore";
const AppDispatcher = new Dispatcher();     //构造dispatcher实例
/**
 * 派发层
 */
/**
 * 注册派发方法
 * @function  AppDispatcher.register
 * @param {function} 
 */
AppDispatcher.register(function(action){      
    switch(action.actionType){
        case "ADD_NEW_ITEM" :
            ListStore.addNewItemHandler(action.text);
            ListStore.emit();
            break;
    }
})
export default AppDispatcher;