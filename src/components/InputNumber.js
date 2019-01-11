import React from 'react';
import { Input } from 'antd';

class InputNumber extends React.Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    const { value, min, max } = nextProps;
    const v = this.getValue(value, min, max);
    this.setState({ value: v });
    if (v != value) this.notify();
  }

  getValue = (value, min, max) => {
    if (/^\d+$/.test(value)) {
      value = parseInt(value, 0);
      if (value < min) value = min;
      if (value > max) value = max;
      return value;
    }
    return min;
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleBlur = () => {
    this.notify();
  };

  handleEnter = () => {
    this.notify();
  };

  notify = () => {
    const { onChange, min, max } = this.props;
    const { value } = this.state;
    onChange && onChange(this.getValue(value, min, max));
  };

  render() {
    const { placeholder = 'number', style } = this.props;
    const { value } = this.state;
    return <Input
      style={{ width: '75px', ...style }}
      placeholder={placeholder}
      onChange={this.handleChange}
      onPressEnter={this.handleEnter}
      onBlur={this.handleBlur}
      value={value}
    />;
  }
}

export default InputNumber;
