import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function OutputInfo(props) {
  let { cats, index, clicks } = props;

  return (
    <p>
      共 {cats.length} 只猫咪，当前为第 {index + 1} 只，被点击了 {clicks} 次
    </p>
  )
}

// 获得了根级 store 的数据
function mapStateToProps(state) {
  return {
    cats: state.cats,
    index: state.catIndex,
    clicks: state.cats[state.catIndex].clicks
  }
}

OutputInfo.propTypes = {
  cats: PropTypes.array,
  index: PropTypes.number,
  clicks: PropTypes.number
}

export default connect(mapStateToProps)(OutputInfo);
