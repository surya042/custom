
'use client';

import * as React from 'react';
import { TextField, ITextFieldProps } from '@fluentui/react';

interface CustomTextFieldProps extends ITextFieldProps {
  // Add custom props here
  customProp1?: string;
  customProp2?: number;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  customProp1,
  customProp2,
  ...restProps
}) => {

  return (
    <div>

      <p>Custom Prop 1: {customProp1}</p>
      <p>Custom Prop 2: {customProp2}</p>


      <TextField {...restProps} />
    </div>
  );
};

export default CustomTextField;