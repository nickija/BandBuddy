import { JobPosting } from "./job-posting.model";
import { Musician } from "./musician.model";

export class Band {
    id: number;
    ownerId: number;//????????????
    bandName: string;
    genre: string;
    musician: Musician[];//???????
    jobPosting: JobPosting[];//???????
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
