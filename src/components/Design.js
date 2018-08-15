import * as React from 'react';
import { Divider, Drawer, Grid, Select, Input, MenuItem } from "@material-ui/core";
import { Slider, ToggleButton,ToggleButtonGroup } from "@material-ui/lab";
import Colors from "./Colors";

const Design = (props) => {
  const {source, padding, foreground, background, shape, effect, updateDesign} = props

  return (
    <Drawer variant="persistent" anchor="left" justify="space-between"
      open={true} classes={{paper: 'drawer-paper'}}>
      <div className="grid-header">DESIGN</div>
      <Divider />
      <Grid container spacing={16} classes={{ container: 'grid-container' }}>
        <Grid item xs={12}>Source</Grid>
        <Grid item xs={12}>
          <ToggleButtonGroup value={source} exclusive
            onChange={value => updateDesign('source', value)} data-key="source"
            classes={{root: 'button-group'}}>
            <ToggleButton value="image">Image</ToggleButton>
            <ToggleButton value="icon">Icon</ToggleButton>
            <ToggleButton value="text">Text</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item xs={3}>Padding</Grid>
        <Grid item xs={9}>
          <Slider value={padding} onChange={(event, value) => updateDesign('padding', value)} />
        </Grid>
        <Grid item xs={12}>Foreground</Grid>
        <Grid item xs={12}>
          <Colors selected={foreground} onChange={value => updateDesign('foreground', value)} />
        </Grid>
        <Grid item xs={12}>Background</Grid>
        <Grid item xs={12}>
          <Colors selected={background} onChange={value => updateDesign('background', value)} />
        </Grid>
        <Grid item xs={3}>Shape</Grid>
        <Grid item xs={9}>
          <Select value={shape} input={<Input name="shape" />}
            onChange={event => updateDesign("shape", event.target.value)}>
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="square">Square</MenuItem>
            <MenuItem value="circle">Circle</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>Effect</Grid>
        <Grid item xs={9}>
          <Select value={effect} input={<Input name="effect" />}
            onChange={event => updateDesign("effect", event.target.value)}>
            <MenuItem value="none">None</MenuItem>
            <MenuItem value="shadown">Shadow</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default Design;
  