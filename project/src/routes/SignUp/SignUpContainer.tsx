import React from "react";
import styled from "styled-components";
import SignUpPresenter from "./SignUpPresenter";


interface IProps{}

interface IState{}
export default class SignUpContainer extends React.Component<IProps, IState>{

    render() {
        return(
            <SignUpPresenter />
        )
    }
}