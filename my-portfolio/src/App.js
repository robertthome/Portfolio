import './App.css'
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
