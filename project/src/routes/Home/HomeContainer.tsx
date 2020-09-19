import React from 'react';
import HomePresenter from "./HomePresenter";

interface IProps{
    history: any
}

interface IState{

}

class HomeContainer extends React.Component<IProps, IState>{

    render() {
        return (
            <HomePresenter history={this.props.history} />
        )
    }
}

export default HomeContainer;