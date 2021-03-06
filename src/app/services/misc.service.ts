import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MiscService {

    constructor(public httpClient: HttpClient,
                public router: Router
    ) {}

    formatDate(date) {
        return date.replace('T', ' ').replace('.000Z', ' ');
    }

    getDate(date) {
        return date.split('T')[0];
    }

}
