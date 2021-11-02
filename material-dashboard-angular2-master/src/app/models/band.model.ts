import { IsActive } from "./is-active";
import { JobPosting } from "./job-posting.model";
import { Musician } from "./musician.model";

export class Band {
    id: string;
    ownerId: string;//????????????
    bandName: string;
    genre: string;
    musician: Musician[];//???????
    jobPosting: JobPosting[];//???????
    isActive: IsActive;
    createdAt: Date;
    updatedAt: Date;
}
