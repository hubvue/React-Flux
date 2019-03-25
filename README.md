# React-Flux

React实现Flux架构开发模式
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
- View层：View层是指的是所有的React的component
- Action层 ： Action是视图层发出来的消息
- Dispatcher层：Dispatcher用来接受Actions，执行回调函数。
![](https://user-gold-cdn.xitu.io/2019/3/25/169b4d6a56ee3b0c?w=602&h=174&f=png&s=16756)
