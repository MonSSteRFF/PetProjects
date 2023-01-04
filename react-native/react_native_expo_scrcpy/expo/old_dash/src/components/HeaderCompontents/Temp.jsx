import {useEffect, useReducer} from "react";

const Temp = (props) => {

  const reduce = (state, action) => {
    return {
      co: action.res.co,
      temp: action.res.temp
    }
  }

  const [state, dispatch] = useReducer(reduce, {
    co: 0,
    temp: 0.00
  });

  useEffect(() => {
    dispatch({ res: props.data });
  }, [props.data]);


  let  custom_color;
  if (state.co > 1400){
    custom_color = 'red';
  } else if (state.co > 1200){
    custom_color = 'yellow';
  }

  return (
    <div className="temp">
      <div className={`temp__icon ${ custom_color }`}>
        <img src="img/temp.svg" alt="иконка температуры"/>
      </div>
      <p>{state?.temp?.toFixed(2)}°</p>
      <p>{state.co}ppm</p>
    </div>
  );
}

export default Temp;