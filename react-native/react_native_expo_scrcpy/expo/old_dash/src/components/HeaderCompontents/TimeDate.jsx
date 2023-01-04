import DateBlock from "./DateBlock";
import Hours from './Hours';


const TimeDate = (props) => {

  return (
    <div className="date">
      <DateBlock/>
      <Hours hours={props.data}/>
    </div>
  );

}
export default TimeDate;