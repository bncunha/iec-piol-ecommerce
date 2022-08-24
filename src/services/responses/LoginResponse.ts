export class LoginResponse {
  token!: string;
  user!: {
    name: string;
    id: string;
  };
}