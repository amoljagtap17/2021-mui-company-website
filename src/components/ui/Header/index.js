import React from 'react'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
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
  tabs: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
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
            <Tabs className={classes.tabs}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.margin}></div>
    </>
  )
}
