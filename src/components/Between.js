import React from 'react';
import { Input } from 'antd';
import InputNumber from './InputNumber';

const style = { width: 70, textAlign: 'center', paddingRight: '0px', paddingLeft: '0px' };
const InputGroup = Input.Group;

const Between = ({ value, onChange, min = 0, max }) => {
  const splits = value.split('-');
  const minValue = parseInt(splits[0], 0);
  const maxValue = parseInt(splits[1], 0);

  const notifyChange = (minValue, maxValue) => {
    const s = `${minValue}-${maxValue}`;
    onChange && onChange(s);
  };

  const handleMinChange = (value) => {
    notifyChange(value, maxValue);
  };

  const handleMaxChange = (value) => {
    notifyChange(minValue, value);
  };

  return (
    <InputGroup compact style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}>
      <InputNumber
        style={style}
        placeholder="Minimum"
        min={min}
        max={maxValue}
        value={minValue}
        onChange={handleMinChange}
      />
      <Input
        style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }}
        placeholder="~"
        disabled
      />
      <InputNumber
        style={{...style, borderLeft: 0}}
        placeholder="Maximum"
        min={minValue}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
      />
    </InputGroup>
  );
};

export default Between;
