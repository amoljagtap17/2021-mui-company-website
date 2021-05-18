import { Typography, Paper, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { Header } from 'components/ui'
import { theme } from './theme'

export const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: '100vh' }}>
        <Header />
        <Typography variant="h1">Hello React!</Typography>
      </Paper>
    </ThemeProvider>
  </>
)
