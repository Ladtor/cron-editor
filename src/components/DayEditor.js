import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import LastWorkDay from './LastWorkDay';
import Reg,{index} from './Reg';
import BaseEditor from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue = {};
defaultRadioKeyValue[index.EVERY] = '*';
defaultRadioKeyValue[index.ANY] = '?';
defaultRadioKeyValue[index.BETWEEN] = '1-2';
defaultRadioKeyValue[index.FROM_EVERY] = '1/1';
defaultRadioKeyValue[index.LAST_WORK_DAY] = '1W';
defaultRadioKeyValue[index.LAST_MONTH_DAY] = 'L';
defaultRadioKeyValue[index.CHECK_BOX] = '*';

class DayEditor extends BaseEditor{
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
          每日
        </Radio>
        <Radio style={radioStyle} value={index.ANY}>
          不指定
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          周期 <Between min={1} max={31} value={value[index.BETWEEN]} {...config} onChange={this.handleValueChange.bind(this, index.BETWEEN)} />
        </Radio>
        <Radio style={radioStyle} value={index.FROM_EVERY}>
          <FromEvery
            front="从"
            middle="日开始,每"
            back="日执行一次"
            onChange={this.handleValueChange.bind(this, index.FROM_EVERY)}
            value={value[index.FROM_EVERY]}
            {...config}
          />
        </Radio>
        <Radio style={radioStyle} value={index.LAST_WORK_DAY}>
          每月 <LastWorkDay value={value[index.LAST_WORK_DAY]} {...config} onChange={this.handleValueChange.bind(this, index.LAST_WORK_DAY)} /> 号最近的那个工作日
        </Radio>
        <Radio style={radioStyle} value={index.LAST_MONTH_DAY}>
          本月最后一天
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          指定
          <CheckBoxEditor min={1} max={31} value={value[index.CHECK_BOX]} {...config} onChange={this.handleValueChange.bind(this, index.CHECK_BOX)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default DayEditor;
