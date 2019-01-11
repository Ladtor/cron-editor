import React from 'react';
import InputNumber from './InputNumber';

const inputNumberStyle = {
  margin: '0 5px',
};

const WeekDay = ({ value, onChange }) => {
  const splits = value.split('#');
  const week = splits[0];
  const weekDay = splits[1];

  const notifyChange = (week, weekDay) => {
    const s = `${week}#${weekDay}`;
    onChange && onChange(s);
  };

  const handleWeekChange = (v) => {
    notifyChange(v, weekDay);
  };

  const handleWeekDayChange = (v) => {
    notifyChange(week, v);
  };

  return (
    <span>
      第
      <InputNumber
        min={1}
        max={4}
        style={inputNumberStyle}
        value={week}
        onChange={handleWeekChange}
      />
      周的星期
      <InputNumber
        min={1}
        max={7}
        style={inputNumberStyle}
        value={weekDay}
        onChange={handleWeekDayChange}
      />
    </span>
  );
};

export default WeekDay;
