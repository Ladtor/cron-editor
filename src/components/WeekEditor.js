import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import WeekDay from './WeekDay';
import LastWeekDay from './LastWeekDay';
import Reg, { index } from './Reg';
import BaseEditor from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue = {};
defaultRadioKeyValue[index.EVERY] = '*';
defaultRadioKeyValue[index.ANY] = '?';
defaultRadioKeyValue[index.BETWEEN] = '1-2';
defaultRadioKeyValue[index.WEEK_DAY] = '1#1';
defaultRadioKeyValue[index.LAST_WEEK_DAY] = '1L';
defaultRadioKeyValue[index.CHECK_BOX] = '*';

class WeekEditor extends BaseEditor{
  state = {
    radio: index.EVERY,
    value: defaultRadioKeyValue,
  };

  render() {
    const { radioStyle, value: defaultValue, ...config } = this.props;
    const { radio, value } = this.state;

    return (
      <RadioGroup onChange={this.handleRadioChange} value={radio}>
        <Reg value={defaultValue} currentIndex={radio} onChange={this.handleRegChange} />
        <Radio style={radioStyle} value={index.EVERY}>
          每周
        </Radio>
        <Radio style={radioStyle} value={index.ANY}>
          不指定
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          周期 <Between min={1} max={7} value={value[index.BETWEEN]} {...config} onChange={this.handleValueChange.bind(this, index.BETWEEN)} />
        </Radio>
        <Radio style={radioStyle} value={index.WEEK_DAY}>
          <WeekDay
            onChange={this.handleValueChange.bind(this, index.WEEK_DAY)}
            value={value[index.WEEK_DAY]}
            {...config}
          />
        </Radio>
        <Radio style={radioStyle} value={index.LAST_WEEK_DAY}>
          本月最后一个星期 <LastWeekDay value={value[index.LAST_WEEK_DAY]} {...config} onChange={this.handleValueChange.bind(this, index.LAST_WEEK_DAY)} />
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          指定
          <CheckBoxEditor min={1} max={7} value={value[index.CHECK_BOX]} {...config} onChange={this.handleValueChange.bind(this, index.CHECK_BOX)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default WeekEditor;
