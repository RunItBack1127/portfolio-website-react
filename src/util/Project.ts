import type { Technology } from './Technology';

export type Project = {
    name: string;
    description: string;
    technologiesUsed: Array<Technology>;
}