import { AfterViewInit, Component, Input, OnInit, Optional } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { GETERROS } from './ERRORS';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements AfterViewInit {
  @Input() name!: string;
  @Input() control!: AbstractControl | null;
  @Input() submitted: boolean = false;

  constructor(
    @Optional() private ngForm: NgForm
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.ngForm && !this.control) {
        this.control = this.ngForm.form.get(this.name);
      }
    });
  }

  get message() {
    const erro = this.control ? GETERROS(this.control) : null;
    return erro?.texto ? (erro.texto + ' ' + (erro?.params ? erro.params : '')) : null
  }

  get isSubmitted() {
    if (this.submitted) return this.submitted;
    return this.ngForm && this.ngForm.submitted;
  }

}
