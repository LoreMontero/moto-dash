import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './scenes/Dashboard';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />      
    </Router>
  );
}