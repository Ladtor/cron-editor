import React from 'react';
import InputNumber from './InputNumber';

const LastWorkDay = ({ onChange, value }) => {
  const handleChange = (v) =>{
    const s = `${v}W`;
    onChange && onChange(s);
  };

  const splits = value.split('W');

  return (
    <InputNumber
      min={1}
      max={31}
      value={splits[0]}
      onChange={handleChange}
    />
  );
};

export default LastWorkDay;
