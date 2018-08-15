import * as React from 'react';
import { GridList, GridListTile, colors } from "@material-ui/core";
import { Done } from "@material-ui/icons";

const Colors = (props) => {
  const { selected, onChange } = props
  const primaryColors = Object.keys(colors).slice(1)
    .map(item => ({ primary: colors[item][500] }))

  primaryColors.unshift({ primary: '#000' }, { primary: '#fff' })

  return (
    <GridList cellHeight="auto" spacing={0} cols={7}>
      {primaryColors.map(item => (
        <GridListTile cols={1} key={item.primary}>
          <div className="color-item"
            style={{ backgroundColor: item.primary }}
            onClick={() => onChange(item.primary)}>
            {item.primary === selected && <Done classes={{ root: 'selected' }} />}
          </div>
        </GridListTile>
      ))}
    </GridList>
  )
}

export default Colors;
  