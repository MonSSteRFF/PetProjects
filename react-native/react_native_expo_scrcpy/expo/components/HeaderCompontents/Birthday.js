import {View} from "react-native";
import BirthdayBlock from "./BirthdayCompontents/BirthdayBlock";

import {CakeImg} from "../styled";
import {useEffect, useReducer, useState} from "react";

const Birthday = function(props){

    const [Birthday,setBirthday] = useState([
        {
            birthdays: "2022-09-18T00:00:00.000Z",
            name: "Севастьянова Елена",
            picture: ""
        },
        {
            birthdays: "2022-09-18T00:00:00.000Z",
            name: "Севастьянова Елена",
            picture: ""
        },
        {
            birthdays: "2022-09-18T00:00:00.000Z",
            name: "Севастьянова Елена",
            picture: ""
        }
    ])


    return (
        <View>
            <View>
                <CakeImg
                    source={require("../../assets/img/cake.png")}
                />
            </View>
            
            {/*{Birthday.map( function (worker,index) {*/}
            {/*        return(index <=1 ? (*/}
            {/*            <BirthdayBlock worker={worker} key={index}/>) : ('')*/}
            {/*        )*/}
            {/*    }*/}
            {/*)}*/}
        </View>
    );
};

export default Birthday;