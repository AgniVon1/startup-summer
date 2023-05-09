import React from 'react';
import VacanciesContainer from "../features/vacancies/vacanciesContainer";
import {withProviders} from "./providers";

const App = () => (
  <>
    <VacanciesContainer/>
  </>
  );

export default withProviders(App);
