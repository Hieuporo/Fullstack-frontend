export interface Error {
  status: number;
  data: {
    ErrorType: string;
    ErrorMessage: string;
  };
}
