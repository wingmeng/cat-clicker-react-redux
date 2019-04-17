import React from 'react'
import PropTypes from 'prop-types'
import OutputInfo from './output-info'

function CatView(props) {
  let { name, clicks, imgUrl } = props.cat;

  return (
    <div className="cat-view">
      <p>
        {/* 猫的名称和点击数 */}
        <strong>{name}</strong>{' '}
        <span className="cat-clicks">{clicks}</span> clicks
      </p>

      <img src={`images/${imgUrl}`} alt={name}
        onClick={() => props.onCatClick()}
      />

      {/* 使用 redux 后无需传递根级数据给子组件，可在子组件内部直接获取 */}
      <OutputInfo />
    </div>
  )
}

CatView.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string,
    clicks: PropTypes.number,
    imgUrl: PropTypes.string
  }),
  onCatClick: PropTypes.func,
}

export default CatView;
