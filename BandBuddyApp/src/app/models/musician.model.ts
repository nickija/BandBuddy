import { AreaEnum } from "./area-enum";
import { JobPosting } from "./job-posting.model";

export class Musician {
    id: number;
    userId: number;//????????????
    education: string;
    jobPosting: JobPosting[];//???????
    area: AreaEnum;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
