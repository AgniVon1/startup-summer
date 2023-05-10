import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";
import {JobCardType} from "./type";
import {useLocalArrayStorage} from "../../hooks/useLocalArrayStorage/useLocalArrayStorage";

type Props = JobCardType
export const JobCard:React.FC<Props> = (props) => {
  const {pushElement,deleteElementById,includesElementWithId} = useLocalArrayStorage<JobCardType>("favourites",[])
  const [isFavourites,setIsFavourites] = useState(includesElementWithId(props.id))
  const navigate = useNavigate()
  const navigateToCards = (id: number) => {
    navigate(`/vacancy/${id+''}`)
  }


  const onAddHandler = () => {
    pushElement(props)
    setIsFavourites(true)
  }
  const onDeleteHandler = () => {
    deleteElementById(props.id)
    setIsFavourites(false)
  }

  return (
    <>
      {isFavourites && <> I'm favourites vac</>}
      <h1 onClick={() => navigateToCards(props.id)}>{props.profession}</h1>
      <button onClick={onAddHandler}>Add</button>
      <button onClick={onDeleteHandler}>Delete</button>
    </>
  );
};

