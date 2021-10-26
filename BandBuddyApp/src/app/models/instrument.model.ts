import { SkillEnum } from "./skill-enum";

export class Instrument {
    id: number;
    musicianId: number;//????????
    instrumentType: string;
    yearsExperience: number;
    skill: SkillEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
