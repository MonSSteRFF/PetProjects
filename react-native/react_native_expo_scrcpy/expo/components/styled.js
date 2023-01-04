import styled from 'styled-components/native';


const Texts = {
    "Font_600_40_49": styled.Text`
        font-family: "Montserrat_medium";
        font-size: 40px;
        line-height: 49px;
        color: white;
        text-align: left;
    `,
    "font_600_28_34": styled.Text`
        font-family: "Montserrat_medium";
        font-size: 28px;
        line-height: 34px;
        color: white;
        text-align: left;
    `,
    "font_600_24_34": styled.Text`
        font-family: "Montserrat_medium";
        font-size: 24px;
        line-height: 34px;
        color: white;
        text-align: left;
    `,
    "font_600_24_29": styled.Text`
        font-family: "Montserrat_medium";
        font-size: 24px;
        line-height: 29px;
        color: white;
        text-align: left;
    `,
    "font_600_16_20": styled.Text`
        font-family: "Montserrat_medium";
        font-size: 28px;
        line-height: 34px;
        color: white;
        text-align: left;
    `
}

const Header = styled.View`
    background: #373739;
    padding: 16px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
`;

const Date = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    background: #4C4C50;
    padding: 9px 22px 9px 16px;
    border-radius: 4px;
`;

const CakeImg = styled.Image`
    width: 32px;
    height: 32px;
    margin: 0 8px;
`;













const AppContainer = styled.View`
    background: #1E1F20;
    text-align: center;
    flex: 1;
`;




export {AppContainer, Texts, Header, Date,CakeImg};