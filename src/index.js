import React from 'react';
import { Tabs } from 'antd';
import SecondEditor from './components/SecondEditor';
import MinuteEditor from './components/MinuteEditor';
import HourEditor from './components/HourEditor';
import DayEditor from './components/DayEditor';
import MonthEditor from './components/MonthEditor';
import WeekEditor from './components/WeekEditor';
import YearEditor from './components/YearEditor';

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
      '?',
      '*',
      '?',
    ],
  };

  constructor(props) {
    super(props);
    const { defaultValue } = props;
    this.updateCron(defaultValue, false);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    this.updateCron(value);
  }

  updateCron = (cronText, isSet = true) => {
    cronText = cronText && cronText.trim();
    if (cronText) {
      const { cron } = this.state;
      const cronArr = cronText.split(' ');
      for (let i = 0; i < cronArr.length; i += 1) {
        cron[i] = cronArr[i];
      }
      if(cron[3] === '?'){
        if(cron[5] === '?') cron[5] = '*';
      }else {
        cron[5] = '?';
      }
      isSet ? this.setState({ cron }) : (this.state.cron = cron);
    }
  };

  cronChange = (value, index) => {
    const { onChange } = this.props;
    const { cron } = this.state;
    cron[index] = value;
    if (index === 3) {
      if(value === '?'){
        if(cron[5] === '?') cron[5] = '*';
      }else {
        cron[5] = '?';
      }
    } else if (index === 5) {
      if(value === '?'){
        if(cron[3] === '?') cron[3] = '*';
      }else {
        cron[3] = '?';
      }
    }
    this.setState({ cron });
    const cronText = cron.join(' ');
    onChange && onChange(cronText);
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
    const { style = containerStyle, second, minute, hour, day, month, week, year, defaultValue, value, onChange, ...config } = this.props;
    const { cron } = this.state;
    return (
      <Tabs defaultActiveKey="second" style={style}>
        <TabPane tab="秒" key="second">
          <SecondEditor onChange={this.secondChange} value={cron[0]} radioStyle={radioStyle} {...config} {...second} />
        </TabPane>
        <TabPane tab="分" key="minute">
          <MinuteEditor onChange={this.minuteChange} value={cron[1]} radioStyle={radioStyle} {...config} {...minute} />
        </TabPane>
        <TabPane tab="时" key="hour">
          <HourEditor onChange={this.hourChange} value={cron[2]} radioStyle={radioStyle} {...config} {...hour} />
        </TabPane>
        <TabPane tab="日" key="day">
          <DayEditor onChange={this.dayChange} value={cron[3]} radioStyle={radioStyle} {...config} {...day} />
        </TabPane>
        <TabPane tab="月" key="month">
          <MonthEditor onChange={this.monthChange} value={cron[4]} radioStyle={radioStyle} {...config} {...month} />
        </TabPane>
        <TabPane tab="周" key="week">
          <WeekEditor onChange={this.weekChange} value={cron[5]} radioStyle={radioStyle} {...config} {...week} />
        </TabPane>
        <TabPane tab="年" key="year">
          <YearEditor onChange={this.yearChange} value={cron[6]} radioStyle={radioStyle} {...config} {...year} />
        </TabPane>
      </Tabs>
    );
  }
}

export default CronEditor;
