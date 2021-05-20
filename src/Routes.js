import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from 'components/ui'

export const Routes = () => {
  const [value, setValue] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <Router>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
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
      <Footer
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </Router>
  )
}
