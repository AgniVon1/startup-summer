import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useActions} from "../../../app/store/utils/redux-utils";
import {vacancyActions} from "../../../entites/model/vacancy/vacancy";
import {RootStateType, useAppSelector} from "../../../app";

const vacancySelector = (state:RootStateType) => state.vacancy.vacancy
export const useFeatchVacancy = () => {

  const {id} = useParams()
  const {getVacancy} = useActions(vacancyActions)

  useEffect(() => {
    id && getVacancy({ id:+id })
  },[getVacancy, id])

  const vacancy = useAppSelector(vacancySelector)

  return [vacancy]
};

