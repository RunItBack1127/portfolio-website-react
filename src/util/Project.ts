import type { Technology } from './Technology';

export type Project = {
    name: string;
    description: string;
    githubLink: string;
    technologiesUsed: Array<Technology>;
}