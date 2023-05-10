import React from 'react';
import {withProviders} from "./providers";
import {Routing} from "../pages/Routing";

const App = () => (
  <Routing/>
);

export default withProviders(App);
