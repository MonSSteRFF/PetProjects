import {View,Text,StyleSheet} from "react-native";

import {Texts} from "../../styled";
import {useEffect, useState} from "react";

const TextHours = Texts.Font_600_40_49;


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
        <View>
            {difHours > 0
                ? (
                <View style={styles.Border}>
                    <TextHours style={styles.TextHoursStyle}>{difHours} часов</TextHours>
                </View>
                ) : (<View></View>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    TextHoursStyle: {
        marginLeft: 13
    },
    Border: {
        borderLeftColor: "#FFFFFF",
        borderLeftWidth: 1,
        marginLeft: 14
    }
})

export default Hours;