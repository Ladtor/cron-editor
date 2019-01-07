import React from 'react';
import { Checkbox, Row, Col } from 'antd';

const CheckBoxEditor = ({ onChange, min = 0, max, span = 2 }) => {
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
    if(values.length === 0) onChange('?');
    else onChange(values.sort((a,b)=>a-b).join(','));
  };

  return (
    <div>
      <Checkbox.Group onChange={handleChange}>
        <Row>
          {checkBoxs(min, max)}
        </Row>
      </Checkbox.Group>
    </div>
  );
};

export default CheckBoxEditor;
