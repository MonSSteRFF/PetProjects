import TimeDate from './HeaderCompontents/TimeDate';
import Temp from './HeaderCompontents/Temp';
import Birthday from "./HeaderCompontents/Birthday";



const Header = (props) => {

    return (
        <header className="header">
            <TimeDate data={props.Hours}/>

            <Birthday data={props.Birthday}/>

            <Temp data={props.TempCo}/>
        </header>
    );
}

export default Header;