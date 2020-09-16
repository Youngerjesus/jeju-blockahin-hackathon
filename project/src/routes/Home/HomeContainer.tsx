import React from "react";
import HomePresenter from "./HomePresenter";

interface IProps{

}

interface IState{

}

class HomeContainer extends React.Component<IProps, IState>{

    render() {
        return (
            <HomePresenter />
        )
    }
}

export default HomeContainer;