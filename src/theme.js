import { createMuiTheme } from '@material-ui/core/styles'

const appBlue = '#023047'
const appOrange = '#FB8500'

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      appBlue,
      appOrange,
    },
    primary: {
      main: appBlue,
    },
    secondary: {
      main: appOrange,
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
  },
})
