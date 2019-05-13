import React, { FunctionComponent, ReactNode } from 'react'
import PropTypes from 'prop-types'

interface LinkProps {
    active: boolean,
    onClick: () => void
}

const Link: FunctionComponent<LinkProps & { children: ReactNode }> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired
}

export default Link