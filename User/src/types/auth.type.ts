export interface User {
  name: string;
  phoneNumber: string;
  address: string;
  email: string;
}

export interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: User | null;
}
