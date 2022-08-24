import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenIntercetor implements HttpInterceptor {

   intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const savedUser = localStorage.getItem('user');
    const token = savedUser ? JSON.parse(savedUser).token : null;
    const dupReq = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + token)
    });
    return next.handle(dupReq);
   }
}