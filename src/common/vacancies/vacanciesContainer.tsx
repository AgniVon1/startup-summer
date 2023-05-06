import React  from 'react';
import {vacanciesApi} from "./vacanciesApi";


const VacanciesContainer = () => {
  const {data,isLoading} = vacanciesApi.useFetchAllVacanciesQuery('')
  console.log(data)
  return (
    <div>
      {!isLoading && data.objects[0].address}
    </div>
  );
};

export default VacanciesContainer;