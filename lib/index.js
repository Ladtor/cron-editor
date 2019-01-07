import React from 'react';
import { Tabs } from 'antd';
import SecondEditor from './SecondEditor';
import MinuteEditor from './MinuteEditor';
import HourEditor from './HourEditor';
import DayEditor from './DayEditor';
import MonthEditor from './MonthEditor';
import WeekEditor from './WeekEditor';
import YearEditor from './YearEditor';

const TabPane = Tabs.TabPane;

const radioStyle = {
  display: 'block',
  lineHeight: '30px',
  padding: '5px',
};

const containerStyle = {
  padding: '12px 12px',
};

class CronEditor extends React.Component {
  state = {
    cron: [
      '*',
      '*',
      '*',
      '*',
      '*',
      '?',
    ],
  };

  cronChange = (value, index) => {
    const { cron } = this.state;
    cron[index] = value;
    this.setState({ cron });
    const cronText = cron.join(' ');
    console.log(cronText);
  };

  secondChange = (value) => {
    this.cronChange(value, 0);
  };

  minuteChange = (value) => {
    this.cronChange(value, 1);
  };

  hourChange = (value) => {
    this.cronChange(value, 2);
  };

  dayChange = (value) => {
    this.cronChange(value, 3);
  };

  monthChange = (value) => {
    this.cronChange(value, 4);
  };

  weekChange = (value) => {
    this.cronChange(value, 5);
  };

  yearChange = (value) => {
    this.cronChange(value, 6);
  };

  render() {
    const { style = containerStyle } = this.props;
    return (
      <Tabs defaultActiveKey="second" style={style}>
        <TabPane tab="秒" key="second">
          <SecondEditor onChange={this.secondChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="分" key="minute">
          <MinuteEditor onChange={this.minuteChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="时" key="hour">
          <HourEditor onChange={this.hourChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="日" key="day">
          <DayEditor onChange={this.dayChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="月" key="month">
          <MonthEditor onChange={this.monthChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="周" key="week">
          <WeekEditor onChange={this.weekChange} radioStyle={radioStyle} />
        </TabPane>
        <TabPane tab="年" key="year">
          <YearEditor onChange={this.yearChange} radioStyle={radioStyle} />
        </TabPane>
      </Tabs>
    );
  }
}

export default CronEditor;
