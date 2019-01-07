import React from 'react';
import { Radio } from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import WeekDay from './WeekDay';
import LastWeekDay from './LastWeekDay';

const RadioGroup = Radio.Group;

class WeekEditor extends React.Component {
  state = {
    radio: 0,
    value: [
      '*',
      '?',
      '1-2',
      '1/1',
      '1L',
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
          周期 <Between min={1} max={7} onChange={this.handleValueChange.bind(this, 2)} />
        </Radio>
        <Radio style={radioStyle} value={3}>
          <WeekDay
            onChange={this.handleValueChange.bind(this, 3)}
          />
        </Radio>
        <Radio style={radioStyle} value={4}>
          本月最后一个星期 <LastWeekDay onChange={this.handleValueChange.bind(this,4)} />
        </Radio>
        <Radio style={radioStyle} value={5}>
          指定
          <CheckBoxEditor min={1} max={7} onChange={this.handleValueChange.bind(this, 5)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default WeekEditor;
