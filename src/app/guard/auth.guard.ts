import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router) { }

    canActivate(): boolean {
        if (this.getCredential()) {
            this.router.navigate(['dashboard/group']);
            return false;
        }
        return true;
    }

    public getCredential() {
        return localStorage.getItem('isLogin');
    } 
}