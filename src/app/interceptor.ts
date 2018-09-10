import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { TokenStorage } from './shared/token/tokenStorage';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
    HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor{

    constructor(private token: TokenStorage, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>{
        let authReq = req;
        
        if(this.token.getToken() != null){
            authReq = req.clone({
                 headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer '+ this.token.getToken())
                                     .set("Content-Type", "application/json")});
        }

        return next.handle(authReq).do(
            (err: any) => {
                if(err instanceof HttpErrorResponse){
                    if(err.status === 401){
                        this.router.navigate(['/login']);
                    }
                    if(err.status === 403){
                        this.router.navigate(['/unauthorized']);
                    }
                }
            }
        );
    }
}