import {TypedUseSelectorHook, useSelector} from "react-redux";
export const useAppSelector: TypedUseSelectorHook<import("../types").RootStateType> = useSelector
