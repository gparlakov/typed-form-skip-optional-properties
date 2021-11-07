import { Component, VERSION } from '@angular/core';
import { typedFormGroup, originalTypedFormGroup } from 'ngx-forms-typed';

type MyFormType = {
  name: string;
  optionalMiddleName?: string;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form = typedFormGroup<MyFormType>({
    name: typedFormControl(''),
  });

  formOriginal = originalTypedFormGroup<MyFormType>({
    name: typedFormControl(''),
    optionalMiddleName: typedFormControl(''),
  });

  ngOnInit() {
    this.formOriginal.controls.optionalMiddleName.set('my middle name');

    this.form.controls.optionalMiddleName.set({ withAFunction: () => {} });
  }
}
