import { Paper, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import { Routes } from './Routes'

export const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: '100vh' }}>
        <Routes />
      </Paper>
    </ThemeProvider>
  </>
)
