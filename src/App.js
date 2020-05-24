import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Blog from './components/Blog';

const App = () => (
    <Router>
        <Blog />
    </Router>
);

export default App;