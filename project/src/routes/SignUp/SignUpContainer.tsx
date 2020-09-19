import React from "react";
import styled from "styled-components";
import SignUpPresenter from "./SignUpPresenter";


interface IProps{
    history:any
}

interface IState{}
export default class SignUpContainer extends React.Component<IProps, IState>{

    render() {
        return(
            <SignUpPresenter history={this.props.history}/>
        )
    }
}