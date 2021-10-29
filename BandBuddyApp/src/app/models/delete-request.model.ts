import { StatusEnum } from "./status-enum";

export class DeleteRequest {
    id: number = 0;
    bandId: number = 0;//????????????
    reason: string = '';
    status: StatusEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
