import React from 'react'
import { connect } from 'react-redux'

import './index.css'

function Index(props) {
  let {responsive} = props
  return (
    <div className="homePage" style={{width: `calc(100% - ${responsive}%)`}}>
      HOME PAGE
    </div>
  )
}

const mapStateToProps = state=>{
  return {
    responsive: state.Responsive
  }
}

export default connect(mapStateToProps)(Index)
