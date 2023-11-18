import { IAppActionTypes } from "../models/IAppState";

export const setLoading = (isLoading: boolean) => ({
  type: IAppActionTypes.SET_LOADING,
  payload: isLoading,
});
