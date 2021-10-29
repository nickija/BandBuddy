import { AreaEnum } from "./area-enum";
import { Musician } from "./musician.model";

export class JobPosting {
    id: number = 0;
    genrePlayed: string = '';
    instrumentRequired: string = '';
    musician: Musician[] | null = null;//???????
    area: AreaEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
