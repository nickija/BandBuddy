import { RoleEnum } from "./role-enum";

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: RoleEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;

}
