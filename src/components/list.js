import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCatIndex } from '../actions'

// 猫的列表
function List(props) {
  return (
    <ul className="list">
      {props.items && props.items.map((item, idx) => (
        <li key={idx}
          className={props.activeIdx === idx ? 'active' : ''}
          onClick={() => props.dispatch(setCatIndex(idx))}
        >{item.name}</li>
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array,
  activeIdx: PropTypes.number
}

export default connect()(List);
