import React, { Component } from 'react'
import { Switch, FormControlLabel } from "@material-ui/core"

import gridImage from '../images/grid.svg'

class Icon extends Component {
  state = {
    isShowGrid: true,
  }
  paint = () => {
    const canvas = document.getElementById('icon')
    const painter = canvas.getContext('2d')
    canvas.width = 300
    canvas.height = 300
    painter.rect(20, 20, 150, 150)
    painter.stroke()
  }
  toggleGrid = event => {
    this.setState({isShowGrid: !this.state.isShowGrid})
  }
  render() {
    const {isShowGrid} = this.state
    const {background, shape} = this.props
    const grid = (
      <div className="grid">
        <img alt="grid" src={gridImage} />
      </div>
    )

    return (
      <main className="showcase">
        <div className="container">
          <div className="shape">
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              {shape ==='circle' && <circle cx="24" cy="24" r="22" fill={background}></circle>}
              {shape ==='square' && <rect x="5" y="5" width="38" height="38" rx="3" fill={background}></rect>}
              {shape ==='none' && <rect x="5" y="5" width="38" height="38" fill={background}></rect>}
            </svg>
          </div>
          {isShowGrid && grid}
          <canvas id="painter" />
        </div>
        <FormControlLabel label="Show Grids" 
          control={<Switch checked={isShowGrid} onChange={this.toggleGrid} />} />
      </main>
    )
  }
}

export default Icon
