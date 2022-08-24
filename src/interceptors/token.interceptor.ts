import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/services/auth.service";

@Injectable()
export class TokenIntercetor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {}

   intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
        headers: req.headers.set('authorization', 'Bearer ' + this.authService.getToken())
    });
    return next.handle(dupReq);
   }
}