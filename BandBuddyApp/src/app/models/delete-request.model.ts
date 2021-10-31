import { IsActive } from "./is-active";
import { StatusEnum } from "./status-enum";

export class DeleteRequest {
    id: string;
    bandId: string;//????????????
    reason: string;
    status: StatusEnum;
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
}
