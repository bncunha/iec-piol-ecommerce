import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class CustomErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector  
  ) {}

  get toastr() {
    return this.injector.get(ToastrService);
  }

  handleError(error: any): void {
    const message = error?.error?.notifications?.[0]?.message || 'Erro ao realizara operação!';
    this.toastr.error(message, "Erro!", {onActivateTick : true});
  }
}
