import {Header} from './styled'
import TimeDate from "./HeaderCompontents/TimeDate";
import Birthday from "./HeaderCompontents/Birthday";


const HeaderComponent = (props) => {

    return (
        <Header>
            <TimeDate data={props.Hours}/>

            <Birthday data={props.Birthday}/>


        </Header>
    );
};

export default HeaderComponent;