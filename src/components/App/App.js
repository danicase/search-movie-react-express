import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import HomePage from '../../pages/HomePage';
import DetailsPage from '../../pages/DetailsPage';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
