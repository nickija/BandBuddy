import { JobPosting } from "./job-posting.model";
import { Musician } from "./musician.model";

export class Band {
    id: number = 0;
    ownerId: number = 0;//????????????
    bandName: string = '';
    genre: string = '';
    musician: Musician[] | null = null;//???????
    jobPosting: JobPosting[] | null = null;//???????
    isActive: boolean | null = null;
    createdAt: Date | null = null;
    updatedAt: Date | null = null;
}
