import React  from 'react';
import {vacanciesApi} from "../../features/services/vacanciesApi";
import {cataloguesApi} from "../../features/services/cataloguesApi";


const VacanciesContainer = () => {
  const {data,isLoading} = vacanciesApi.useGetVacanciesQuery({payment_from:10000, payment_to:100000,page: 0, count:3})

  return (
    <div>
      {!isLoading && data.objects[0].address}
      {!isLoading && data.objects[1].address}
      {!isLoading && data.objects[2].address}
      {!isLoading || "....."}
    </div>
  );
};

export default VacanciesContainer;