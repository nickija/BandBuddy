import { AreaEnum } from "./area-enum";

export class BandRequest {
    id: number;
    bandName: string;
    summary: string;
    area: AreaEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
