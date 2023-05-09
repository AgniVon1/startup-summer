import React from 'react';
import {useAppDispatch} from "../../app";
import {getTasksListAsync} from "../../entites/model/vacancies";

export const SearchPage = () => {
    const dispatch = useAppDispatch()
    return (
        <div>
            <button onClick={ () => dispatch(getTasksListAsync())}>

            </button>
        </div>
    );
};

