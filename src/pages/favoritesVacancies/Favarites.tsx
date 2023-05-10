import React from 'react';
import {JobCardType} from "../../shared/UI/JobCard/type";

import {useLocalArrayStorage} from "../../shared/hooks/useLocalArrayStorage/useLocalArrayStorage";
import {JobCards} from "../../widgets/JobСards/JobСards";

export const Favorites = () => {
  const {storedFavourites} = useLocalArrayStorage<JobCardType>("favourites",[])
  return (
    <>
      <JobCards vacancies = {storedFavourites}  />
    </>
  );
};

