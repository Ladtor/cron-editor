import React from 'react';
import { InputNumber } from 'antd';

const LastWeekDay = ({ onChange }) => {
  const handleChange = (v) => {
    onChange && onChange(`${v}L`);
  };

  return (
    <InputNumber min={1} max={7} defaultValue={1} onChange={handleChange} />
  );
};

export default LastWeekDay;
