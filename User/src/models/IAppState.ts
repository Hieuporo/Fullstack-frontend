export const IAppActionTypes = {
  SET_LOADING: "APP/SET_LOADING",
};

export type IAppState = {
  isLoading: boolean;
};

export type IAppActionCreator = {
  type: string;
  payload: any;
};
