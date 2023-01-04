const BirthdayBlock = (props) => {
  const name = props.worker.name.split(' ',2).pop();
  const day = new Date(props.worker.birthdays).getDate();
  const month = new Date(props.worker.birthdays).getMonth()+1;

  const url = props.worker.picture;

  let newMonth;
  switch (month){
    case 1: newMonth = 'января'; break;
    case 2: newMonth = 'февраля'; break;
    case 3: newMonth = 'марта'; break;
    case 4: newMonth = 'апреля'; break;
    case 5: newMonth = 'мая'; break;
    case 6: newMonth = 'июня'; break;
    case 7: newMonth = 'июля'; break;
    case 8: newMonth = 'августа'; break;
    case 9: newMonth = 'сентября'; break;
    case 10: newMonth = 'октября'; break;
    case 11: newMonth = 'ноября'; break;
    case 12: newMonth = 'декабря'; break;
    default: newMonth = 'января'
  }

  return (
    <div className="birthday__block">
      <p className="birthday__block__date">{day} {newMonth}</p>
      <img src={url} alt="" className="birthday__block__img"/>
      <p className="birthday__block__name">{name}</p>
    </div>
  );
};

export default BirthdayBlock;