import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DesktopMac } from '@material-ui/icons'

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

const useStyles = makeStyles((theme) => ({
  margin: {
    ...theme.mixins.toolbar,
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <DesktopMac
              color="secondary"
              style={{ fontSize: 40, margin: 10 }}
            />
            <Typography variant="h6" color="secondary">
              My Website
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.margin}></div>
    </>
  )
}
