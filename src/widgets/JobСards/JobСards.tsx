import React from 'react';
import {JobCardType} from "../../shared/UI/JobCard/type";
import {JobCard} from "../../shared/UI/JobCard/JobCard";

type Props = {
  vacancies: JobCardType[]
}
export const JobCards :React.FC<Props> = ({
                                     vacancies,
                                   }) => {

  const mappedVacancies =  vacancies.map(vacancy => <JobCard key = {vacancy.id}
                                                       id = {vacancy.id}
                                                       profession = {vacancy.profession}
                                                       address = {vacancy.address}
                                                       payment_from = {vacancy.payment_from}
                                                       payment_to = {vacancy.payment_to}/>)
  return (
    <>
      {mappedVacancies}
    </>
  );
};

