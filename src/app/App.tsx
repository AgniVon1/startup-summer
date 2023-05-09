import React from 'react';
import {withProviders} from "./providers";
import {SearchPage} from "../pages/searchJob/SearchPage";

const App = () => (
  <>
    <SearchPage/>
  </>
  );

export default withProviders(App);
