import {Date} from "../styled";
import DateBlock from "./TimeDateComponents/DateBlock";
import Hours from "./TimeDateComponents/Hours";


const TimeDate = (props) => {
    return (
        <Date>
            <DateBlock/>
            <Hours hours={props.data}/>
        </Date>
    );
};

export default TimeDate;