import React from 'react';
import {InputNumber} from 'antd';

class WeekDay extends React.Component {
  state = {
    week: 1,
    weekDay: 1
  };

  notifyChange = ({week , weekDay} = this.state) => {
    const {onChange} = this.props;
    onChange && onChange(`${week}#${weekDay}`);
  };

  handleBlur = () => {
    this.notifyChange();
  };

  handleWeekChange = (v) => {
    const week = v;
    this.setState({ week });
    this.notifyChange({...this.state, week});
  };

  handleWeekDayChange = (v) => {
    const weekDay = v;
    this.setState({ weekDay });
    this.notifyChange({...this.state, weekDay});
  };

  render() {
    const {inputNumberStyle} = this.props;

    return (
      <span>
        第
        <InputNumber
          min={1}
          max={4}
          defaultValue={1}
          style={inputNumberStyle}
          onChange={this.handleWeekChange}
          onBlur={this.handleBlur}
        />
        周的星期
        <InputNumber
          min={1}
          max={7}
          defaultValue={1}
          style={inputNumberStyle}
          onChange={this.handleWeekDayChange}
          onBlur={this.handleBlur}
        />
      </span>
    );
  }
}

export default WeekDay;
