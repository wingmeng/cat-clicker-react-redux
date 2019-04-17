import React from 'react'  // 解析、编译器
import ReactDOM from 'react-dom'  // 渲染到 DOM 的库
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './App'  // 根组件
import './index.css'  // 样式文件

const store = createStore(rootReducer);

// 渲染到 DOM 中
// Provider 组件包装整个应用，让应用树里的每一个组件都可以访问 store
// store 会以 prop 形式传递（需要使用 connect 函数连接）
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
