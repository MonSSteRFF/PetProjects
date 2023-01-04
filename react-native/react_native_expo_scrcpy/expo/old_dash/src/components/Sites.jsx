import SiteItem from "./SiteItem";
import {useEffect, useState} from "react";


function hoursBetween( date ) {
  let one_hour=1000*60*60;
  let difference_ms = new Date(date).getTime() - new Date().getTime();
  if (difference_ms > 0){
    return Math.round(difference_ms/one_hour);
  } else {
    return Math.round(- difference_ms/one_hour);
  }
}

const Sites = (props) => {

  const [hours,setHours] = useState(0)

  function getMinHours(data){
    let array = [];
    data.forEach(function (el){
      array.push(hoursBetween(el["last_fall"]));
    })
    setHours(Math.min(...array))
  }

  useEffect(()=>{
    getMinHours(props.data);
  },[props.data]);


  return (
    <div className='Sites'>
        {props.data.map((state, index) =>
          <SiteItem
            SiteItem={{
               "name":state.name.replace('https://',''),
               "hosting":state.hosting,
               "ssl":state.ssl,
               "state":state.state
            }}
            key={index}
          />
        )}

      <div className="nodrop">
        <p>Без падений:</p>
        <span>{hours} часов</span>
      </div>

    </div>
  );
};

export default Sites;