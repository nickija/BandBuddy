import { AreaEnum } from "./area-enum";
import { IsActive } from "./is-active";
import { StatusEnum } from "./status-enum";

export class BandRequest {
    id: string;
    bandId: string;
    musicianId: string;
    bandName: string;
    summary: string;
    status: StatusEnum;
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
}
