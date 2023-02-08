import { SingleSpaCustomEventDetail } from 'single-spa';

export interface NavbarItem {
    title: string;
    icon: string;
    path: string;
}

export enum SingleSpaEventName {
    BeforeMountRouting = 'single-spa:before-mount-routing-event',
    BeforeFirstMount = 'single-spa:before-first-mount',
}

export type SingleSpaEvent = CustomEvent<SingleSpaCustomEventDetail>;
