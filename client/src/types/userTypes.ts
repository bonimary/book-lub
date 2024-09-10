import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  // email: z.string().email(),
  email: z.string(),
  username: z.string(),
});

export const UserResponseSchema = z.object({
    accessToken: z.string(),
    user: UserSchema,
  });

export type UserType = {
  id: number;
  username: string;
  email: string;
};

export type ApiResponseType = {
  accessToken: string;
  user: UserType;
};

export type UserSignUpType = {
  username: string;
  email: string;
  password: string;
};

export type UserLoginType = Omit<UserSignUpType, 'username'>;

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'logged' } & UserType);
