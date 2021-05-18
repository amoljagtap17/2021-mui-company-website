import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from 'components/ui'

export const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <h1>Home</h1>
      </Route>
      <Route path="/services">
        <h1>Services</h1>
      </Route>
      <Route path="/customsoftware">
        <h1>Custom Software</h1>
      </Route>
      <Route path="/mobileapps">
        <h1>Mobile Apps</h1>
      </Route>
      <Route path="/websites">
        <h1>Websites</h1>
      </Route>
      <Route path="/revolution">
        <h1>Revolution</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
      <Route path="/contact">
        <h1>Contact</h1>
      </Route>
      <Route path="/estimate">
        <h1>Estimate</h1>
      </Route>
    </Switch>
  </Router>
)
