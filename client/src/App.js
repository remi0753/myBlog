import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Blog from './components/Blog';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Blog} />
            <Route path="/page/:pageNum" exact component={Blog} />
            <Route path="/:year/:month/:day/:id" component={Blog} />
            <Route path="/category/:category" exact component={Blog} />
            <Route path="/category/:category/page/:categoryPageNum" component={Blog} />
            <Route path="/tag/:tag" exact component={Blog} />
            <Route path="/tag/:tag/page/:tagPageNum" component={Blog} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;