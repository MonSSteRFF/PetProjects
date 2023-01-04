import {useEffect, useState} from 'react';


const DateBlock = () => {
  const [Today, setToday] = useState(new Date().getDay());
  const [Month, setMonth] = useState(String(new Date().getMonth() + 1).padStart(2, '0'));
  const [Vdate, setVdate] = useState(String(new Date().getDate()).padStart(2, '0'));

  let false_day = Number(Today),
      day;

  switch (false_day){
    case 1: day = 'понедельник'; break;
    case 2: day = 'вторник'; break;
    case 3: day = 'среда'; break;
    case 4: day = 'четверг'; break;
    case 5: day = 'пятница'; break;
    case 6: day = 'суббота'; break;
    case 7: day = 'воскресенье'; break;
    default: day = false_day;
  }

  useEffect(() => {
    const updateTime = setInterval(() => {
      setToday(new Date().getDay());
      setMonth(String(new Date().getMonth() + 1).padStart(2, '0'));
      setVdate(String(new Date().getDate()).padStart(2, '0'));
    },1000);

    return () => clearInterval(updateTime);

  }, [Today, Month, Vdate]);

  return (
    <div className="date__block">
      <div className="date__block__time">
        {Month}.{Vdate}
      </div>
      <div className="date__block__weekday">{day}</div>
    </div>
  );
}

export default DateBlock;