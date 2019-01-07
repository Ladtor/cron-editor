import React from 'react';
import { InputNumber } from 'antd';

const LastWorkDay = ({onChange}) => {
  const handleChange = (value) => {
    onChange && onChange(`${value}W`);
  };

  return (
    <InputNumber min={1} max={31} defaultValue={1} onChange={handleChange} />
  );
};

export default LastWorkDay;
