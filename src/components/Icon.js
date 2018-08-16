import React, { Component } from 'react'
import { Switch, FormControlLabel } from "@material-ui/core";

class Icon extends Component {
  state = {
    isShowGrid: false
  }
  toggleGrid = event => {
    this.setState({isShowGrid: !this.state.isShowGrid})
  }
  render() {
    const {isShowGrid} = this.state

    return (
      <main className="showcase">
        <FormControlLabel label="Show Grids" 
          control={<Switch checked={isShowGrid} onChange={this.toggleGrid} />} />
      </main>
    )
  }
}

export default Icon
