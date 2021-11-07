import {
  TypedFormGroup as OriginalTypedFormGroup,
  typedFormGroup as originalTypedFormGroup,
} from 'ngx-forms-typed';

export {
  OriginalTypedFormGroup,
  originalTypedFormGroup,
  typedFormControl,
} from 'ngx-forms-typed';

type NonGroup = string | number | boolean | Function | null | undefined | never;


type TypedFormGroup = Except<OriginalTypedFormGroup, 'controls'> &{
  controls: K extends NonGroup ? never : C;
} 