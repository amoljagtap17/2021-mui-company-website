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
    },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps',
    },
    {
      name: 'Website Development',
      link: '/websites',
    },
  ]

  useEffect(() => {
    const index = [
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
    }

    // eslint-disable-next-line
  }, [location.pathname])

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={onChangeHandler}
        className={classes.tabs}
        /* indicatorColor="primary" */
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          aria-owns={anchorEl ? 'services-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          className={classes.tab}
          component={Link}
          onMouseOver={(evt) => onClickHandler(evt)}
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
      >
        <List disablePadding>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/services"
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/revolution"
          >
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/about"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            button
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
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
