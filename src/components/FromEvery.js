import React from 'react';
import InputNumber from './InputNumber';

const inputNumberStyle = {
  margin: '0 5px',
};

const FromEvery = ({ value, onChange, front, middle, back, fromMin = 0, fromMax = 59, everyMin = 1, everyMax = 59 }) => {

  const splits = value.split('/');
  const from = splits[0];
  const every = splits[1];

  const notifyChange = (from, every) => {
    const s = `${from}/${every}`;
    onChange && onChange(s);
  };

  const handleFromChange = (v) => {
    notifyChange(v, every);
  };

  const handleEveryChange = (v) => {
    notifyChange(from, v);
  };

  return (
    <span>
      {front}
      <InputNumber
        min={fromMin}
        max={fromMax}
        value={from}
        style={{ ...inputNumberStyle }}
        onChange={handleFromChange}
      />
      {middle}
      <InputNumber
        min={everyMin}
        max={everyMax}
        value={every}
        style={{ ...inputNumberStyle }}
        onChange={handleEveryChange}
      />
      {back}
    </span>
  );
};

export default FromEvery;
