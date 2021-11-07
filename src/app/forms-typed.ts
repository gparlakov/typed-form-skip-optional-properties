import {
  Controls,
  TypedFormGroup as _TypedFormGroup,
  typedFormGroup as originalTypedFormGroup,
} from 'ngx-forms-typed';

export {
  typedFormControl,
} from 'ngx-forms-typed';

export type OriginalTypedFormGroup<C, A extends Controls<K>> = _TypedFormGroup<C, A>;


type NonGroup = string | number | boolean | Function | null | undefined | never;


type TypedFormGroup = Except<_TypedFormGroup, 'controls'> & {
  controls: K extends NonGroup ? never : C;
}
