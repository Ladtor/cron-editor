import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';

const RadioGroup = Radio.Group;

class MinuteEditor extends React.Component {
  state = {
    radio: 0,
    value: [
      '*',
      '0-59',
      '0/1',
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
          每分
        </Radio>
        <Radio style={radioStyle} value={1}>
          周期 <Between max={59} onChange={this.handleValueChange.bind(this, 1)} />
        </Radio>
        <Radio style={radioStyle} value={2}>
          <FromEvery
            front="从"
            middle="分开始,每"
            back="分执行一次"
            onChange={this.handleValueChange.bind(this, 2)}
          />
        </Radio>
        <Radio style={radioStyle} value={3}>
          指定
          <CheckBoxEditor max={59} onChange={this.handleValueChange.bind(this, 3)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default MinuteEditor;
