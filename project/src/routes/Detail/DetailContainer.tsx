import React from "react";
import styled from "styled-components";
import DetailPresenter from "./DetailPresenter";

interface IProps{
}

interface IState{

}

export default class DetailContainer extends React.Component<IProps, IState>{

    render() {
        // @ts-ignore
        const address = this.props.match.params.id;
        console.log(address);
        return (
            <DetailPresenter address={address} />
        )
    }
}

