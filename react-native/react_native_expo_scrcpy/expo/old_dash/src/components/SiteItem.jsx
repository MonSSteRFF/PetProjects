const SiteItem = (props) => {

  function daysBetween( date ) {
    let one_day=1000*60*60*24;
    let difference_ms = new Date(date).getTime() - new Date().getTime();
    if (difference_ms > 0){
      return Math.round(difference_ms/one_day);
    } else {
      return false;
    }
  }

  const hosting = daysBetween(props.SiteItem.hosting)
  const ssl = daysBetween(props.SiteItem.ssl)

  let hostingValue,sslValue;

  if (hosting >= 7) {
    hostingValue = 'ОК'
  } else if (hosting >= 5) {
    hostingValue = hosting + ' дней'
  } else if (hosting >= 2) {
    hostingValue = hosting + ' дня'
  } else if (hosting === 1) {
    hostingValue = hosting + ' день'
  } else if (hosting < 1) {
    hostingValue = 'нет'
  }

  if (ssl >= 7) {
    sslValue = 'ОК'
  } else if (ssl >= 5){
    sslValue = ssl + ' дней'
  } else if (ssl >= 2){
    sslValue = ssl + ' дня'
  } else if (ssl === 1) {
    sslValue = ssl + ' день'
  } else if (ssl < 1) {
    sslValue = 'нет'
  }

  return (
    <div className="SiteItem">
      <div className="container">
        <p className="name">{props.SiteItem.name}</p>

        <p className="hosting"><span>$: </span>{hostingValue}</p>
        <p className="ssl"><span>SSL: </span>{sslValue}</p>

        <div className={`state ${props.SiteItem.state}`}/>
      </div>
    </div>
  );
};

export default SiteItem;