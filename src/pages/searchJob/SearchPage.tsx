import React, {useEffect} from 'react';
import {useAppSelector} from "../../app";
import {vacanciesActions} from "../../entites/model/vacancies/vacancies";
import {useActions} from "../../app/store/utils/redux-utils";
import {selectIsLoggedIn} from "../../entites/model/appStatus/selector";


export const SearchPage = () => {
    const {getVacanciesList} = useActions(vacanciesActions)
    useEffect(() => {
        getVacanciesList({})
    },[getVacanciesList])
    
    const isLoading = useAppSelector(selectIsLoggedIn)
    const vacancies = useAppSelector(state => state.vacancies.data)
    const error = useAppSelector(state => state.appStatus.error)
    console.log(isLoading)
    console.log(vacancies)
    console.log(error)
    return (
        <div>
             {isLoading && <h1> LOADING.....</h1>}
        </div>
    );
};

