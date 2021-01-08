import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import NotFound from './components/NotFound';

const Routes = () => {
   return (
    <BrowserRouter>
        <Switch>            
            <Route path="/:eventKey" exact component={Home} />
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    </BrowserRouter>
   );
};

export default Routes;