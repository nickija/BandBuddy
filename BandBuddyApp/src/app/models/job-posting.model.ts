import { AreaEnum } from "./area-enum";
import { Musician } from "./musician.model";

export class JobPosting {
    id: number;
    genrePlayed: string;
    instrumentRequired: string;
    musician: Musician[];//???????
    area: AreaEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
