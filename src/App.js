import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import CommentPage from './CommentPage/CommentPage'
import { QueryProvider } from './Context';



function App() {
  return (
    <QueryProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Layout} />
            <Route path='/comments/:title' component={CommentPage} />
          </Switch>
        </Router>
      </div>
    </QueryProvider>
  );
}

export default App;
