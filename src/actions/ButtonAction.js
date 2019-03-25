import AppDispatcher from "../dispatcher/AppDispatcher";        //引入派发器
/**
 * 设置Action
 */
const ButtonAction = {
    /**
     * 提供View层接口，事件触发把消息从View层传到Action层
     * @param {*} text 
     */
    addNewItem(text){
        /**
         * 调用所派发的方法
         * @function  AppDispatcher.dispatch()
         * @parma {*}
         * 
         */
        AppDispatcher.dispatch({     //这个方法是用来派发的   
            actionType : 'ADD_NEW_ITEM',
            text : text,
        })
    }
}
export default ButtonAction;