import React from "react";
import styled from "styled-components";
import Test from "../../components/Test";
import SignupForm from "../../components/SignUpForm";

interface IProps{}

interface IState {}
export default class SignUpPresenter extends React.Component<IProps, IState>{

    render() {
        return (
            <Container>
                <Test />
                <MainImage src={require("../../assets/images/main.png")} />
                <MainHome>
                    <HomeHeader src={require("../../assets/images/SKKRYPTO.png")} />
                    <UserImage src={require("../../assets/images/user.jpg")} />
                    <SignupForm />
                </MainHome>
            </Container>
        )
    }
}

const Container = styled.div`
    max-width: 935px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainImage = styled.img`
    display:flex; 
    max-height:600px;
`;

const MainHome = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    max-height: 500px;
    color: rgba(var(--i1d,38,38,38),1);
    justify-content: center;
    align-items: center;
    background-color: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction:column;
`;

const HomeHeader = styled.img`
    display:flex;
    width: 175px;
    height: auto;; 
    margin: auto; 
    margin-top: 0;
    margin-bottom: 0;
`;

const UserImage = styled.img`
    display:flex;
    width: 100px;
    height: 100px;  
`;

