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
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { DesktopMac, Menu as MenuIcon } from '@material-ui/icons'

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
  menu: {
    backgroundColor: theme.palette.common.appBlue,
    color: 'white',
    borderRadius: '0px',
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawerIconButton: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  swipeableDrawer: {
    backgroundColor: theme.palette.common.appBlue,
  },
  drawerItemText: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.appOrange,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}))

export const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [value, setValue] = useState(0)
  const location = useLocation()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const onChangeHandler = (e, newValue) => {
    setValue(newValue)
  }

  const onClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const onCloseHandler = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const onMenuItemClickHandler = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedIndex(i)
  }

  const menuOptions = [
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ]

  const routes = [
    {
      name: 'Home',
      link: '/',
      activeIndex: 0,
    },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'services-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (evt) => onClickHandler(evt),
    },
    {
      name: 'The Revolution',
      link: '/revolution',
      activeIndex: 2,
    },
    {
      name: 'About Us',
      link: '/about',
      activeIndex: 3,
    },
    {
      name: 'Contact Us',
      link: '/contact',
      activeIndex: 4,
    },
  ]

  useEffect(() => {
    ;[...menuOptions, ...routes].forEach((route) => {
      switch (location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)

            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break
        default:
          break
      }
    })

    /* const index = [
      '/',
      '/services',
      '/revolution',
      '/about',
      '/contact',
    ].findIndex((item) => location.pathname === item)

    if (index !== -1 && index !== value) {
      setValue(index)
    }

    const servicesIndex = [
      '/services',
      '/customsoftware',
      '/mobileapps',
      '/websites',
    ].findIndex((item) => location.pathname === item)

    if (servicesIndex !== -1 && servicesIndex !== selectedIndex) {
      setValue(1)
      setSelectedIndex(servicesIndex)
    } */

    // eslint-disable-next-line
    // }, [location.pathname])
  }, [value, menuOptions, selectedIndex, routes])

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={onChangeHandler}
        className={classes.tabs}
        /* indicatorColor="primary" */
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="services-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={onCloseHandler}
        MenuListProps={{ onMouseLeave: onCloseHandler }}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            onClick={(evt) => {
              onMenuItemClickHandler(evt, i)
              setValue(1)
              onCloseHandler()
            }}
            selected={i === selectedIndex && value === 1}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.swipeableDrawer }}
      >
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false)
                setValue(route.activeIndex)
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
            >
              <ListItemText
                className={
                  value === route.activeIndex
                    ? [classes.drawerItemText, classes.drawerItemSelected]
                    : classes.drawerItemText
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            onClick={() => {
              setOpenDrawer(false)
              setValue(5)
            }}
            divider
            button
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
            selected={value === 5}
          >
            <ListItemText
              className={
                value === 5
                  ? [classes.drawerItemText, classes.drawerItemSelected]
                  : classes.drawerItemText
              }
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconButton}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} color="secondary" />
      </IconButton>
    </>
  )

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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.margin}></div>
    </>
  )
}
