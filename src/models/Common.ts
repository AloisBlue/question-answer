import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export interface ILink {
    name: string;
    icon?: IconDefinition;
    path: string;
}

export interface IFilter {
    name: string;
    variation: string;
}