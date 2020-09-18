import React from 'react';
import HomePresenter from "./HomePresenter";

interface IProps{
    history: any
}

interface IState{

}

class HomeContainer extends React.Component<IProps, IState>{

    render() {
        console.log(this.props.history);

        return (
            <HomePresenter history={this.props.history} />
        )
    }
}

export default HomeContainer;