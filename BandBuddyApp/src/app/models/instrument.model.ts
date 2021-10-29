import { SkillEnum } from "./skill-enum";

export class Instrument {
    id: number = 0;
    musicianId: number = 0;//????????
    instrumentType: string = '';
    yearsExperience: number = 0;
    skill: SkillEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
