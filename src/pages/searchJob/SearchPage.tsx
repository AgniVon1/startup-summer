import React, {useEffect} from 'react';
import {useAppSelector} from "../../app";
import {vacanciesActions} from "../../entites/model/vacancies/vacancies";
import {useActions} from "../../app/store/utils/redux-utils";
import {selectIsLoggedIn} from "../../entites/model/appStatus/selector";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
    const {getVacanciesList} = useActions(vacanciesActions)
    useEffect(() => {
        getVacanciesList({})
    },[getVacanciesList])
    const navigate = useNavigate()
    
    const isLoading = useAppSelector(selectIsLoggedIn)
    const vacancies = useAppSelector(state => state.vacancies.data.objects)
    const error = useAppSelector(state => state.appStatus.error)
    console.log(isLoading)
    console.log(vacancies)
    console.log(error)
    const navigateToCards = (id: number) => {
         navigate(`/vacancy/${id+''}`)
    }

    const mappedVacancies =  vacancies.map(v =><h1 key = {v.id} onClick={() => navigateToCards(v.id)}>{v.id}</h1> )
    return (
        <div>
             {isLoading && <h1> LOADING.....(skeleton)</h1>}
             {isLoading || mappedVacancies}
        </div>
    );
};

