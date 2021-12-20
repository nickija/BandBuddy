import { AreaEnum } from "./area-enum";
import { IsActive } from "./is-active";
import { JobPosting } from "./job-posting.model";
import { User } from "./user.model";

export class Musician {
    id: string;
    userId: string;//????????????
    user: User;
    education: string;
    jobPosting: JobPosting[];//???????
    area: AreaEnum;
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
}
