/**
 * Store 数据层
 * 
 */
class ListStore {
    /**
     * listeners 存放所有监听函数
     */
    static listeners =  new Set();
    /**
     * value 用于存放dispatcher拍发过来的数据
     */
    static states = [];
    /**
     * addNewItemHandler 用于向dispatcher层提供数据接口
     * @param {*} text 
     */
    static addNewItemHandler(text){
        this.states.push(text);
    }
    /**
     * getAll 向component提供接口，获取states
     * 注：根据需求定义
     */
    static getStates(){
        return this.states;
    }
    /**
     * emit方法，执行所有监听的方法，通知View层
     */
    static emit(){
        for(let listen of this.listeners ){
            listen();
        }
    }
    /**
     * 提供view层添加监听接口，
     * @param {function} handle 
     */
    static addListener(handle){
        this.listeners.add(handle);
    }
    /**
     * 提供View层删除监听器接口
     * @param {function} handle 
     */
    static removeListener(handle){
        this.listeners.has(handle) && this.listeners.delete(handle)
    }
}

export default ListStore;