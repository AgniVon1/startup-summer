
import {RootDispatchType} from "../types";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<RootDispatchType>()
