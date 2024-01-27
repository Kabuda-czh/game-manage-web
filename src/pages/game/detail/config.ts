// 应该于后端传入
import * as FormConfig from './config';

export const PalFormConfig: Record<string, FormConfigType> = FormConfig as unknown as Record<string, FormConfigType>;

type FormOptionType = Array<{ label: string; value: string }>;

type FormConfigType<T extends 'slider' | 'input' | 'inputNumber' | 'select' | 'switch' = any> = {
  domType: T;
  label: string;
  show?: boolean;
  unit?: string;
  min?: T extends 'slider' | 'inputNumber' ? number : undefined;
  max?: T extends 'slider' | 'inputNumber' ? number : undefined;
  step?: T extends 'slider' ? number : undefined;
  options?: T extends 'select' ? FormOptionType : undefined;
};
