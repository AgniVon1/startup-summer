import {useState} from "react";

export function useLocalArrayStorage<T>(key:string,init:T[]) {

  const storage =  window.localStorage

  const [storedFavourites, setStoredFavourites] = useState<T[]>(() => {
    try {
      if (storage[key]){
      return JSON.parse(storage[key])
      }
      storage.setItem(key, JSON.stringify(init))
    } catch (error) {
      console.log(error);
      return [];
    }
  });
  const includesElementWithId = (id:number) => {
    try {
      return (JSON.parse(storage[key]).filter((i:any) => i.id === id).length > 0)
    } catch (error) {
      console.log(error);
    }
  };
  const pushElement = (value:T) => {
    try {
      const arrFavourites = JSON.parse(storage[key])
      arrFavourites.push(value)
      setStoredFavourites(arrFavourites)
      storage.setItem(key, JSON.stringify(arrFavourites))
    } catch (error) {
      console.log(error);
    }
  };
  const deleteElementById = (id:number) => {
    try {
      const arrFavourites = JSON.parse(storage[key]).filter((i:any) => i.id !== id)
      setStoredFavourites(arrFavourites)
      storage.setItem(key, JSON.stringify(arrFavourites))
    } catch (error) {
      console.log(error);
    }
  };

  return {storedFavourites,pushElement,deleteElementById,includesElementWithId};
}