import {useEffect, useState} from "react";

const Hours = (props) => {

  const [difHours, setdifHours] = useState(0);

  useEffect(()=>{
    if (!props.hours.length <= 0){
      let eventMs = new Date(props.hours[0].date).getTime();
      let todayMs = new Date().getTime();

      let difference = (eventMs - todayMs)/1000/60/60;

      setdifHours(difference.toFixed(0));
    }
  }, [props])

  return (
    <div className="date__hours">
      {difHours > 0
        ? (<p>{difHours} часов</p>)
        : (<span></span>)
      }
    </div>
  );
}

export default Hours;