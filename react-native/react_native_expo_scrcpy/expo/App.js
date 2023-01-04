import {StatusBar} from 'expo-status-bar';

import {useFonts} from 'expo-font';
import {useEffect, useState} from 'react'

import {AppContainer} from './components/styled'

import HeaderComponent from './components/Header'

import axios from "axios";



export default function App() {
    // подключение шрифтов
    const [loaded] = useFonts({
        Montserrat_medium: require('./assets/fonts/Montserrat-Medium.ttf'),
        Montserrat_semibold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        Montserrat_bold: require('./assets/fonts/Montserrat-Bold.ttf')
    })
    if (!loaded){return null;}




    // getHoursApi().then((hoursValueRes)=>{
    //     const HoursValue = hoursValueRes;
    //     return HoursValue;
    // });
    // getBirthdayApi().then((birthdayRes)=>{
    //     const BirthdayValue = birthdayRes;
    //     setBirthday(BirthdayValue);
    // });
    // const getHoursApi = () => axios.get('http://b24-owlbot.testers-site.ru/event/')
    //     .then((res) => res.data);
    //
    // const getBirthdayApi = () => axios.get('http://dashboard-api.testers-site.ru/bx/near-birthdays')
    //          .then((res) => res.data)



    const getBirthday = () => {
        axios.get('http://dashboard-api.testers-site.ru/bx/near-birthdays')
            .then((response) => {
                const res = response.data
                setBirhtday(res);
            })
    }
    getBirthday()

    return (
        <AppContainer>
            {/*<HeaderComponent*/}
            {/*    Hours={[]}*/}
            {/*    Birthday={getBirthdayApi()}*/}
            {/*/>*/}



        </AppContainer>
    );
}

