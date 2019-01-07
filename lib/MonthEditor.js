import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';

const RadioGroup = Radio.Group;

class MonthEditor extends React.Component {
  state = {
    radio: 0,
    value: [
      '*',
      '?',
      '1-2',
      '1/1',
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
          每月
        </Radio>
        <Radio style={radioStyle} value={1}>
          不指定
        </Radio>
        <Radio style={radioStyle} value={2}>
          周期 <Between min={1} max={12} onChange={this.handleValueChange.bind(this, 2)} />
        </Radio>
        <Radio style={radioStyle} value={3}>
          <FromEvery
            front="从"
            middle="月开始,每"
            back="月执行一次"
            fromMax={12}
            everyMax={12}
            onChange={this.handleValueChange.bind(this, 3)}
          />
        </Radio>
        <Radio style={radioStyle} value={4}>
          指定
          <CheckBoxEditor min={1} max={12} onChange={this.handleValueChange.bind(this, 4)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default MonthEditor;
