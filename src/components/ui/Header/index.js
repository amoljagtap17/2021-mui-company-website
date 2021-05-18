import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  Tabs,
  Tab,
  Button,
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
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    margin: '0 25px 0 50px',
    height: '45px',
  },
  logo: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

export const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const location = useLocation()

  const onChangeHandler = (e, value) => {
    setValue(value)
  }

  useEffect(() => {
    const index = [
      '/',
      '/services',
      '/revolution',
      '/about',
      '/contact',
    ].findIndex((item) => location.pathname === item)

    if (index !== -1) {
      setValue(index)
    }
  }, [location.pathname])

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logo}
              disableRipple
            >
              <DesktopMac
                color="secondary"
                style={{ fontSize: 40, margin: 10 }}
              />
              <Typography variant="h6" color="secondary">
                My Website
              </Typography>
            </Button>
            <Tabs
              value={value}
              onChange={onChangeHandler}
              className={classes.tabs}
              /* indicatorColor="primary" */
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.margin}></div>
    </>
  )
}
