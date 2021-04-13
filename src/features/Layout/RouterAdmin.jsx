import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
const RouterAdmin = () => {
    return (
        <Switch>
          <Route path="/quan-ly-nguoi-dung">
            huy
          </Route>
          <Route path="/dashboard">
            hh
          </Route>
          <Route path="/quan-ly-phan-hoi">
            777
          </Route>
        </Switch>
    );
};

export default RouterAdmin;