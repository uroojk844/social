import { Id } from "../../convex/_generated/dataModel";

export interface User {
  _id: string;
  name: string;
  username: string;
}

export interface RegisterUser extends User {
  email: string;
  password: string;
}

export const uid = "jd72xgndx46y27a3ch6v53q1ks70eyqz" as Id<"users">;
export const name = "Urooj";
