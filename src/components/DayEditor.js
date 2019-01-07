import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import LastWorkDay from './LastWorkDay';

const RadioGroup = Radio.Group;

class DayEditor extends React.Component {
  state = {
    radio: 0,
    value: [
      '*',
      '?',
      '1-2',
      '1/1',
      '1W',
      'L',
      '?',
    ],
  };

  notifyChange = (radio, value) => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  handleRadioChange = ({ target: { value: radio } }) => {
    const {value} = this.state;
    this.setState({ radio });
    this.notifyChange(radio, value[radio]);
  };

  handleValueChange = (radio, v) => {
    const {value} = this.state;
    value[radio] = v;
    this.setState({ radio, value });
    this.notifyChange(radio, v);
  };

  render() {
    const { radioStyle } = this.props;
    const { radio } = this.state;

    return (
      <RadioGroup onChange={this.handleRadioChange} value={radio}>
        <Radio style={radioStyle} value={0}>
          每日
        </Radio>
        <Radio style={radioStyle} value={1}>
          不指定
        </Radio>
        <Radio style={radioStyle} value={2}>
          周期 <Between min={1} max={31} onChange={this.handleValueChange.bind(this, 2)} />
        </Radio>
        <Radio style={radioStyle} value={3}>
          <FromEvery
            front="从"
            middle="日开始,每"
            back="日执行一次"
            onChange={this.handleValueChange.bind(this, 3)}
          />
        </Radio>
        <Radio style={radioStyle} value={4}>
          每月 <LastWorkDay onChange={this.handleValueChange.bind(this, 4)} /> 号最近的那个工作日
        </Radio>
        <Radio style={radioStyle} value={5}>
          本月最后一天
        </Radio>
        <Radio style={radioStyle} value={6}>
          指定
          <CheckBoxEditor min={1} max={31} onChange={this.handleValueChange.bind(this, 6)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default DayEditor;
