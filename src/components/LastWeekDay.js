import React from 'react';
import InputNumber from './InputNumber';

const LastWeekDay = ({ value, onChange }) => {
  const splits = value.split('L');

  const notifyChange = (v) => {
    const s = `${v}L`;
    onChange && onChange(s);
  };

  const handleChange = (value) => {
    notifyChange(value);
  };

  return (
    <InputNumber
      min={1}
      max={7}
      value={splits[0]}
      onChange={handleChange}
    />
  );
};

export default LastWeekDay;
