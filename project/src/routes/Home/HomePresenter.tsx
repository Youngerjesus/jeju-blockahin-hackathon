import React from "react";
import styled from "styled-components";
import Test from "../../components/Test";

interface IProps{

}

interface IState{

}

class HomePresenter extends React.Component<IProps, IState>{

    render() {
        return (
            <div>
                <Test />
            </div>
        )
    }
}

export default HomePresenter;