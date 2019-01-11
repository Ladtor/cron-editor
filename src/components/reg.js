import React from 'react';

const EVERY = /^\*$/;
const ANY = /^\?$/;
const BETWEEN = /^\d+-\d+$/;
const FROM_EVERY = /^\d+\/\d+$/;
const CHECK_BOX = /^(\*|((\d+,)*\d+))$/;
const LAST_WORK_DAY = /^\d+W$/;
const LAST_MONTH_DAY = /^L$/;
const LAST_WEEK_DAY = /^\d+L$/;
const WEEK_DAY = /^\d+#\d+$/;

const index = {
  EVERY: 'EVERY',
  ANY: 'ANY',
  BETWEEN: 'BETWEEN',
  FROM_EVERY: 'FROM_EVERY',
  CHECK_BOX: 'CHECK_BOX',
  LAST_WORK_DAY: 'LAST_WORK_DAY',
  LAST_MONTH_DAY: 'LAST_MONTH_DAY',
  LAST_WEEK_DAY: 'LAST_WEEK_DAY',
  WEEK_DAY: 'WEEK_DAY',
};

const REG = {};
REG[index.EVERY] = EVERY;
REG[index.ANY] = ANY;
REG[index.BETWEEN] = BETWEEN;
REG[index.FROM_EVERY] = FROM_EVERY;
REG[index.CHECK_BOX] = CHECK_BOX;
REG[index.LAST_WORK_DAY] = LAST_WORK_DAY;
REG[index.LAST_MONTH_DAY] = LAST_MONTH_DAY;
REG[index.LAST_WEEK_DAY] = LAST_WEEK_DAY;
REG[index.WEEK_DAY] = WEEK_DAY;

class Reg extends React.Component {

  constructor(props) {
    super(props);
    const {value, currentIndex, onChange} = props;
    this.updateCron(value, currentIndex, onChange)
  }

  componentWillReceiveProps(nextProps) {
    const {value, currentIndex, onChange} = nextProps;
    if(this.value !== value){
      this.value = value;
      this.updateCron(value, currentIndex, onChange);
    }
  }

  updateCron = (cronText, currentIndex, onChange) => {
    if(currentIndex && REG[currentIndex].test(cronText)){
      onChange && onChange(currentIndex, cronText);
      return;
    }
    for (const key in REG) {
      const reg = REG[key];
      if (reg.test(cronText)) {
        onChange && onChange(key, cronText);
        return ;
      }
    }
    onChange && onChange(index.EVERY, '*');
  };

  render() {
    return <div />;
  }
};

export default Reg;

export { index };
