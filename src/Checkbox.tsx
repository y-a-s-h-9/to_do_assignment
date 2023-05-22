import React from 'react';

type CheckboxProps = {
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <label className="checkbox">
      <input type="checkbox" />
      {label}
    </label>
  );
};

export default Checkbox;
