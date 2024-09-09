export interface User {
  _id: string;
  name: string;
  username: string;
}

export interface RegisterUser extends User {
  email: string;
  password: string;
}
