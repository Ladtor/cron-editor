import React from 'react';
import { Input, InputNumber } from 'antd';

const InputGroup = Input.Group;

class Between extends React.Component {
  state = {};

  handleMinChange = (value) => {
    const minValue = parseInt(value, 0) || 0;
    this.setState({ minValue });
  };

  handleMaxChange = (value) => {
    const maxValue = parseInt(value, 0) || 0;
    this.setState({ maxValue });
  };

  handleFix = () => {
    const { onChange, min = 0, max } = this.props;
    let { minValue, maxValue } = this.state;
    if (!minValue) minValue = min;
    if (!maxValue) maxValue = max;
    if (minValue > max) minValue = max;
    if (maxValue < min) maxValue = min;
    if (maxValue < minValue) maxValue = minValue;
    this.setState({ minValue, maxValue });
    onChange && onChange(`${minValue}-${maxValue}`);
  };

  render() {
    const { min = 0, max } = this.props;
    const { minValue = min, maxValue = max } = this.state;
    return (
      <InputGroup compact style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <InputNumber
          style={{ width: 100, textAlign: 'center' }}
          placeholder="Minimum"
          min={min}
          max={maxValue}
          value={minValue}
          onBlur={this.handleFix}
          onChange={this.handleMinChange}
        />
        <Input
          style={{ width: 30, borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff' }}
          placeholder="~"
          disabled
        />
        <InputNumber
          style={{ width: 100, textAlign: 'center', borderLeft: 0 }}
          placeholder="Maximum"
          min={minValue}
          max={max}
          value={maxValue}
          onBlur={this.handleFix}
          onChange={this.handleMaxChange}
        />
      </InputGroup>
    );
  }
}

export default Between;
