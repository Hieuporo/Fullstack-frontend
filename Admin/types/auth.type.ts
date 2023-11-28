export interface UserLogin {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    address: string;
    userName: string;
    name: string;
    email: string;
    phoneNumber: string | null;
    roles: string[];
  };
  expiration: string;
}
