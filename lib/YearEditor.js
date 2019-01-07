import React from 'react';
import { Radio } from 'antd';
import moment from 'moment';
import Between from './Between';
const RadioGroup = Radio.Group;
const MIN_YEAR = moment().year();
const MAX_YEAR = 3000;
class YearEditor extends React.Component {
  state = {
    radio: 0,
    value: [
      '?',
      '*',
      `${MIN_YEAR}-${MAX_YEAR}`
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
          不指定
        </Radio>
        <Radio style={radioStyle} value={1}>
          每年
        </Radio>
        <Radio style={radioStyle} value={2}>
          周期 <Between min={MIN_YEAR} max={MAX_YEAR} onChange={this.handleValueChange.bind(this, 2)} />
        </Radio>
      </RadioGroup>
    );
  }
}

export default YearEditor;
