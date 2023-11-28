import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: number;
      address: string;
      name: string;
      email: string;
      phoneNumber: string;
    };
    accessToken: string;
    refreshToken: string;
    expiration: Date;
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      address: string;
      name: string;
      email: string;
      phoneNumber: string;
    };
    accessToken: string;
    refreshToken: string;
    expiration: Date;
  }
}
