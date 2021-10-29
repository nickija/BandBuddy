import { Guid } from "guid-typescript";
import { RoleEnum } from "./role-enum";

export class User {
    id: string
    username: string = '';
    password: string = '';
    firstName: string = '';
    lastName: string = '';
    role: RoleEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;

}
