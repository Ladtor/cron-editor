import React from 'react';
import { Radio } from 'antd';
import moment from 'moment';
import Between from './Between';
import Reg, { index } from './Reg';
import BaseEditor from './BaseEditor';

const RadioGroup = Radio.Group;
const MIN_YEAR = moment().year();
const MAX_YEAR = 2099;

const defaultRadioKeyValue = {};
defaultRadioKeyValue[index.EVERY] = '*';
defaultRadioKeyValue[index.BETWEEN] = `${MIN_YEAR}-${MAX_YEAR}`;
class YearEditor extends BaseEditor {
  state = {
    radio: index.EVERY,
    value: defaultRadioKeyValue,
  };

  render() {
    const { radioStyle, value:defaultValue, ...config } = this.props;
    const { radio, value } = this.state;

    return (
      <RadioGroup onChange={this.handleRadioChange} value={radio}>
        <Reg value={defaultValue} currentIndex={radio} onChange={this.handleRegChange} />
        <Radio style={radioStyle} value={index.EVERY}>
          每年
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          周期 <Between min={MIN_YEAR} max={MAX_YEAR} value={value[index.BETWEEN]} {...config} onChange={this.handleValueChange.bind(this, index.BETWEEN)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default YearEditor;
