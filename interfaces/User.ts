export interface User {
  firstname: string;
  lastname: string;
  email: string;
  passwordDigest: string;
}

export interface NewUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export type AuthenticatedUser = Omit<User, "passwordDigest">;
