import {Route, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import './App.css';

function App() {
    return (
        <Router>
            <Route path='/' component={Login} exact />
        </Router>
    );
}

export default App;
