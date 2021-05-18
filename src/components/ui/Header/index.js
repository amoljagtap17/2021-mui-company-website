import React from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core'

const ElevationScroll = (props) => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

export const Header = () => (
  <ElevationScroll>
    <AppBar position="fixed">
      <Toolbar>My Website</Toolbar>
    </AppBar>
  </ElevationScroll>
)
