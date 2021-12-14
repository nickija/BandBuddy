import { IsActive } from "./is-active";
import { RoleEnum } from "./role-enum";

export class User {
    id: string
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: RoleEnum;
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
    token?: string;
}
