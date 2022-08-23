export class LoginRequest {
  email!: string;
  password!: string;

  constructor(formData?: any) {
    if (formData) {
      this.fromFormData(formData)
    }
  }

  fromFormData(formData: any) {
    Object.assign(this, formData)
    return this;
  }
} 