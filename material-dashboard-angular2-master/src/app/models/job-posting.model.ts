import { AreaEnum } from "./area-enum";
import { IsActive } from "./is-active";
import { Musician } from "./musician.model";

export class JobPosting {
    id: string;
    genrePlayed: string;
    instrumentRequired: string;
    musician: Musician[];//???????
    area: AreaEnum;
    isActive: IsActive;
    createdAt: Date
    updatedAt: Date;
}
