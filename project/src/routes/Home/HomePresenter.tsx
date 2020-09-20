import React from "react";
import styled from "styled-components";
import Test from "../../components/Test";
import Modal from "../../components/Modal";
import SignupForm from "../../components/SignUpForm";
import {LoginForm} from "../../components/LoginForm";

import {useRouteMatch, useLocation, useHistory, withRouter} from "react-router-dom";
interface IProps{
    history: any
}

interface IState{

}

class HomePresenter extends React.Component<IProps, IState>{

    render() {
        return (
            <Container>
                <Test />
                <MainImage src={require("../../assets/images/main.png")} />
                <BabyImage src={require("../../assets/images/certificate2.png")} />
                <MainHome>
                    <HomeHeader src={require("../../assets/images/SKKRYPTO.png")} />
                    <UserImage src={require("../../assets/images/user.jpg")} />
                    <LoginForm history={this.props.history} />
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
    width:445px;
    border-radius:20px;
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

const BabyImage = styled.img`
    position:absolute; 
    width:238px;
    left:439px;
    top:403px;
    height:421px;
`;

export default HomePresenter;