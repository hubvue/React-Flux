# React-Flux
React实现Flux架构开发模式
## 使用
下载
> git clone https://github.com/hubvue/React-Flux.git

使用
> npm install
> npm run dev:server


## 目录结构
```
├──src
    ├── components              组件
    ├── actions                 动作层
    ├── dispatcher              派发层
    ├── stores                  数据层
    └── index.js                入口文件
└── .babelrc               
└── .gitignore              
└── package.json 
└── index.html 
└── README.md                  
└── webpack.config.js  
``` 
Flux是一种架构思想，专门解决软件的结构问题，它跟MVC架构是同一类东西，但是更加简单和清晰。
![](https://user-gold-cdn.xitu.io/2019/3/25/169b4d6a56ee3b0c?w=602&h=174&f=png&s=16756)
- View层：View层是指的是所有的React的component
- Action层 ： Action是视图层发出来的消息
- Dispatcher层：Dispatcher用来接受Actions，执行回调函数。
- Store层 ： 用来存放应用状态，一旦发生变动，就提醒Views要更新页面。

### 流程

![](https://user-gold-cdn.xitu.io/2019/3/25/169b4e67567b69db?w=492&h=366&f=png&s=96241)
1. 用户触发View层的事件，
2. View层事件把消息传递到Action层，
3. Action层把消息发送到Dispatcher层，
4. Dispatcher接受到Action层的信息去改变Store层，
5. Store层发生变动，发出一个change事件，
6. View收到change事件后，更新页面。
