import React, {useEffect} from 'react';
import {useAppSelector} from "../../app";
import {vacanciesActions} from "../../entites/model/vacancies/vacancies";
import {useActions} from "../../app/store/utils/redux-utils";
import {selectIsLoggedIn} from "../../entites/model/appStatus/selector";
import {JobCards} from "../../widgets/JobСards/JobСards";


export const SearchPage = () => {
    const {getVacanciesList} = useActions(vacanciesActions)

    useEffect(() => {
        getVacanciesList({})
    },[getVacanciesList])

    
    const isLoading = useAppSelector(selectIsLoggedIn)
    const vacancies = useAppSelector(state => state.vacancies.data.objects)
    const error = useAppSelector(state => state.appStatus.error)

    console.log(vacancies)
    console.log(error)

    return (
        <div>
             {isLoading && <h1> LOADING.....(skeleton)</h1>}
             {isLoading || <JobCards vacancies={vacancies}/>}
        </div>
    );
};

