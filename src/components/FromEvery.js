import React from 'react';
import { InputNumber } from 'antd';

const inputNumberStyle = {
  margin: '0 5px',
};

class FromEvery extends React.Component {
  state = {
    from: 0,
    every: 1
  };

  notifyChange = ({from , every} = this.state) => {
    const {onChange} = this.props;
    onChange && onChange(`${from}/${every}`);
  };

  handleBlur = () => {
    this.notifyChange();
  };

  handleFromChange = (v) => {
    const from = v;
    this.setState({ from });
    this.notifyChange({...this.state, from});
  };

  handleEveryChange = (v) => {
    const every = v;
    this.setState({ every });
    this.notifyChange({...this.state, every});
  };

  render() {
    const {front, middle, back, fromMin = 0, fromMax = 59, everyMin = 1, everyMax = 59} = this.props;
    const {from, every} = this.state;
    return (
      <span>
        {front}
        <InputNumber
          min={fromMin}
          max={fromMax}
          value={from}
          style={inputNumberStyle}
          onChange={this.handleFromChange}
          onBlur={this.handleBlur}
        />
        {middle}
        <InputNumber
          min={everyMin}
          max={everyMax}
          value={every}
          style={inputNumberStyle}
          onChange={this.handleEveryChange}
          onBlur={this.handleBlur}
        />
        {back}
      </span>
    );
  }
}

export default FromEvery;
