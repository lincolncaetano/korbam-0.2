import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
export declare class UserData {
    events: Events;
    storage: Storage;
    HAS_LOGGED_IN: string;
    constructor(events: Events, storage: Storage);
    login(id: any): void;
    signup(id: any): void;
    logout(): void;
    setId(id: any): void;
    getId(): Promise<any>;
    hasLoggedIn(): Promise<boolean>;
}
