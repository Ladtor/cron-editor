import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckBoxEditor = ({ onChange, min = 0, max, span = 2, value }) => {
  const checkBoxs = (min, max) => {
    const items = [];
    for (let i = min; i <= max; i += 1) {
      items.push(
        <Col span={span} key={i}>
          <Checkbox value={i}>{i}</Checkbox>
        </Col>,
      );
    }
    return items;
  };

  const handleChange = (values) => {
    if (values.length === 0) onChange('*');
    else onChange(values.sort((a, b) => a - b).join(','));
  };

  let checked = [];
  if (value === '*') ;
  else if (value) {
    checked = value.split(',')
      .map(i => parseInt(i, 0))
      .filter(v => v >= min && v <= max)
      .sort((a, b) => a - b);

    const s = checked.join(',');
    s !== value && onChange && onChange(s);
  }

  return (
    <div>
      <Checkbox.Group onChange={handleChange} value={checked}>
        <Row>
          {checkBoxs(min, max)}
        </Row>
      </Checkbox.Group>
    </div>
  );
};

export default CheckBoxEditor;
