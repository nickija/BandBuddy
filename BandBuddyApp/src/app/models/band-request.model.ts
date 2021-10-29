import { AreaEnum } from "./area-enum";

export class BandRequest {
    id: number = 0;
    bandName: string = '';
    summary: string = '';
    area: AreaEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
