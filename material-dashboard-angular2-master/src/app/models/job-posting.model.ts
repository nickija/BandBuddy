import { AreaEnum } from "./area-enum";
import { IsActive } from "./is-active";
import { Musician } from "./musician.model";
import { SkillEnum } from "./skill-enum";

export class JobPosting {
    id: string;
    genrePlayed: string;
    instrumentRequired: string;
    musician: Musician[];
    skill: SkillEnum;
    area: AreaEnum;
    bandId: string;
    isActive: IsActive;
    createdAt: Date
    updatedAt: Date;
    isApplied: boolean;
}
