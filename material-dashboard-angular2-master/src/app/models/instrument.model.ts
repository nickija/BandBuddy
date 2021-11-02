import { IsActive } from "./is-active";
import { SkillEnum } from "./skill-enum";

export class Instrument {
    id: string;
    musicianId: string;//????????
    instrumentType: string;
    yearsExperience: number;
    skill: SkillEnum;
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
}
