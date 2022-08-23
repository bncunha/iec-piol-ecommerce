export class CreateUserRequest {
  name!: string;
  birthDate!: string;
  cpf!: string;
  email!: string;
  password!: string;
  role: string = 'Coach';

  constructor(formData?: any) {
    if (formData) {
      this.fromFormData(formData)
    }
  }

  fromFormData(formData: any) {
    Object.assign(this, formData)
    this.birthDate = this.birthDate + 'T01:00:00.000Z'
    return this;
  }
} 