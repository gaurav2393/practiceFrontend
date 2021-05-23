import React from 'react';
import LazyLoad1 from './LazyLoad1';
import { BrowserRouter, Switch, Route }from 'react-router-dom';

const App = () => {
  return(
   <BrowserRouter>
       <Switch>
         <Route path="optimization/1">
            <LazyLoad1 />
          </Route>
       </Switch>
   </BrowserRouter>
  );
}

export default App;
