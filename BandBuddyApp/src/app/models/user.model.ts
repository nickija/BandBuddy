import { RoleEnum } from "./role-enum";

export class User {
    id: number = 0;
    username: string = '';
    password: string = '';
    firstName: string = '';
    lastName: string = '';
    role: RoleEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;

}
