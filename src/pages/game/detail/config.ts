type FormOptionType = Array<{ Label: string; Value: string }>;

export type FormConfigType<T extends 'slider' | 'input' | 'inputNumber' | 'select' | 'switch' = any> = {
  DomType: T;
  Label: string;
  Show?: boolean;
  Unit?: string;
  Min?: T extends 'slider' | 'inputNumber' ? number : undefined;
  Max?: T extends 'slider' | 'inputNumber' ? number : undefined;
  Step?: T extends 'slider' ? number : undefined;
  Options?: T extends 'select' ? FormOptionType : undefined;
};
