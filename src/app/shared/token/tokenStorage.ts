import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_ID = 'UserName';

@Injectable()
export class TokenStorage {


    constructor() { }

    signOut() {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public saveUser(user: string){
        window.sessionStorage.removeItem(USER_ID);
        window.sessionStorage.setItem(USER_ID, user);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public getUser(): string {
        return sessionStorage.getItem(USER_ID);
    }
}