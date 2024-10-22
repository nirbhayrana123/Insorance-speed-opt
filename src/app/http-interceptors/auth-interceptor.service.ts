import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AppConstants } from '../shared/constants';
import { InvestorService } from '../shared/services/investor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private investorService: InvestorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(AppConstants.TOKEN);
    return this.investorService.isLoggedIn.pipe(
      take(1),
      exhaustMap((isLoggedIn: boolean) => {
        if(isLoggedIn) {
          const modifiedRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + token)
          });
          return next.handle(modifiedRequest);
        } else {
          return next.handle(req);
        }
      })
    );
  }
}
