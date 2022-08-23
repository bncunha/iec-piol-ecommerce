import { AbstractControl } from "@angular/forms";

export const GETERROS = (control: AbstractControl): { texto: string, params: string } | undefined => {
  if (control.errors) {
    const erro = Object.keys(control.errors)[0];
    return {
      texto: getErroMessage()[erro] ? getErroMessage()[erro] : 'Campo inválido',
      params: getErroParams(control)[erro]
    }
  }
  return undefined;
}

function getErroMessage(): any {
  return {
    required: 'Campo obrigatório!',
    email: 'E-mail inválido!',
    minlength: 'A quantidade de caracteres deve ser no mínimo',
    maxlength: 'A quantidade de caracteres deve ser no máximo',
    mustMatch: 'Campos não coincidem',
  }
}

function getErroParams(control: AbstractControl): any {
  return {
    minlength: control.errors?.['minlength']?.requiredLength,
    maxlength: control.errors?.['maxlength']?.requiredLength,
  }
}
