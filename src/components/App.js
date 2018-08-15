import React from 'react'
import { CssBaseline } from "@material-ui/core"
import { connect } from "react-redux";
import Design from './Design'
import Icon from './Icon'

import '../styles/App.css';

const mapState = state => state
const mapDispatch = dispatch => ({
  updateDesign: (key, value) => dispatch({type: 'UPDATE_DESIGN', key, value})
})

const App = (props) => (
  <React.Fragment>
    <CssBaseline />
    <Design {...props} />
    <Icon {...props} />
  </React.Fragment>
)

export default connect(mapState, mapDispatch)(App);
