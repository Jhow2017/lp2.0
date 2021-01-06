import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';

const Routes = () => {
   return (
    <BrowserRouter>
        <Switch>            
            <Route path="/:eventKey" exact component={Home} />
            <Route>
                <h1>Not found</h1>
            </Route>
        </Switch>
    </BrowserRouter>
   );
};

export default Routes;