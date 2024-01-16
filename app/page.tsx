import * as React from 'react';
import CustomTextField from './users/page';

const App: React.FC = () => {
  return (
    <div>
      <h1>Custom Text Field Example</h1>
      <CustomTextField
        label="Custom Text Field"
        placeholder="Enter text..."
        customProp1="Hello, Custom Prop 1!"
        customProp2={42}
      />
    </div>
  );
};

export default App;
