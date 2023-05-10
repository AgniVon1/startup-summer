import React from 'react';
import {useAppSelector} from "../../app";

import {useFeatchVacancy} from "./hooks/useFeathVacancy";
import {JobCard} from "../../shared/UI/JobCard/JobCard";

export const Vacancy = () => {

  const [vacancy] = useFeatchVacancy()
  const isLoading = useAppSelector(state => state.appStatus.isLoading)

  return (
    <>
      {isLoading && <h1> LOADING.....(skeleton)</h1>}
      {isLoading || <JobCard key = {vacancy.id}
                              id = {vacancy.id}
                              profession = {vacancy.profession}
                              address = {vacancy.address}
                              payment_from = {vacancy.payment_from}
                              payment_to = {vacancy.payment_to}/>}
    </>
  );
};

