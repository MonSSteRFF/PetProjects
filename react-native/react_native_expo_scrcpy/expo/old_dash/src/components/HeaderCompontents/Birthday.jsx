import {useEffect, useReducer} from 'react';
import BirthdayBlock from "./BirthdayBlock";


const Birthday = (props) => {

  const reduce = (state, action) => {
    return { birthdays: action.res }
  }

  const [state, dispatch] = useReducer(reduce, { birthdays: [] });

  useEffect(() => {
    dispatch({ res: props.data })
  }, [props.data]);


  return (
    <div className="birthday">
      <div className="birthday__icon">
        <img src="img/cake.svg" alt="Тортик"/>
      </div>

      {state.birthdays.map( function (worker,index) {
          return(index <=1 ? (<BirthdayBlock worker={worker} key={index}/>) : (''))
        }
      )}

    </div>
  );
}

export default Birthday;