import React from 'react'
import { connect } from 'react-redux'
import { setCatIndex, updateClicks, updateCat } from './actions'
import List from './components/list'
import CatView from './components/cat-view'
import Form from './components/form'

import './App.css'

// 定义根组件
class App extends React.Component {
  // 获取当前的猫
  getCurCat = () => this.props.cats[this.props.index];

  // 视图渲染函数
  render() {
    return (
      <div className="App">
        {/* 列表。子组件 dispatch 示例 */}
        <List
          items={this.props.cats}
          activeIdx={this.props.index}
        />

        {/* 详情。孙级组件获取顶级 store 示例 */}
        <CatView
          cat={this.getCurCat()}
          onCatClick={() => this.props.updateClicks(this.getCurCat())}
        />

        {/* 表单。父级 dispatch 示例 */}
        <Form
          fields={this.getCurCat()}
          onSaveForm={(data) => this.props.updateCat(data)}
        />
      </div>
    )
  }
}

// 将数据映射到当前组件，可自定义字段名
function mapStateToProps(state) {
  return {
    cats: state.cats,
    index: state.catIndex
  }
}

// 将 actions 映射到当前组件
// 属性名会成为 prop 的 names，属性值是对应的 action 生成器函数
// 它们和 `dispatch` 绑定
const mapDispatchToProps = {
  setCatIndex,
  updateClicks,
  updateCat
};

// connect 是一个高阶函数（或称高阶组件 HOC）
// 可以想象成一个管道，连接了顶级 store 和当前组件，使得当前组件可以获取 store 数据
export default connect(mapStateToProps, mapDispatchToProps)(App);
