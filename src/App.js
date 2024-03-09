import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import Red from './Components/Red'

// Replace your code here
const App = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:shortId" component={Red}/>
    </Switch>
  </BrowserRouter>
 
)
export default App
