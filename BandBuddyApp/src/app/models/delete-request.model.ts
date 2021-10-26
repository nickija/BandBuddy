import { StatusEnum } from "./status-enum";

export class DeleteRequest {
    id: number;
    bandId: number;//????????????
    reason: string;
    status: StatusEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
