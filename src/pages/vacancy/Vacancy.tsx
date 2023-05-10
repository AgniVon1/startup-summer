import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../app";
import {useActions} from "../../app/store/utils/redux-utils";
import {vacancyActions} from "../../entites/model/vacancy/vacancy";

const Vacancy = () => {
  const {id} = useParams()
  const {getVacancy} = useActions(vacancyActions)
  const isLoading = useAppSelector(state => state.vacancy.isLoading)
  const vacancy = useAppSelector(state => state.vacancy.vacancy)

  useEffect(() => {
    id && getVacancy({ id:+id })
  },[getVacancy])

  return (
    <div>
      {isLoading && <h1> LOADING.....(skeleton)</h1>}
      {isLoading || vacancy.profession}
    </div>
  );
};

export default Vacancy;