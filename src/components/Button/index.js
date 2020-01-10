import React from 'react'
import t from 'prop-types'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}

const Button = ({ kind, type, text, onClick }) => (
  <button
    style={{
      padding: 20,
      borderRadius: 3,
      color: 'white',
      background: kinds[kind]
    }}
    type={type}
    onClick={onClick}
  >
      {text}
  </button>
)

Button.propTypes = {
  /**
   * The kind prop is used to set the background color
   */
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
  text: t.string,
  type: t.string,
  onClick: t.func
}

Button.defaultProps = {
  kind: 'info',
  type: 'button',
  text: 'Button',
  onClick: () => alert("Hello")
}

export default Button;