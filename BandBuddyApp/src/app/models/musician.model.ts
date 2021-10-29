import { AreaEnum } from "./area-enum";
import { JobPosting } from "./job-posting.model";

export class Musician {
    id: number = 0;
    userId: number = 0;//????????????
    education: string = '';
    jobPosting: JobPosting[]| null = null;//???????
    area: AreaEnum | null = null;
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
