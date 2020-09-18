import React from "react";
import styled from "styled-components";
import caver from "../klaytn/caver";

const Test:React.FunctionComponent = (props) => {
    console.log(caver);

    testFunction();

    return (
        <None>
        </None>
    )
}

const None = styled.div`
    display:none; 
`
const testFunction = () => {
    console.log("testFunction");
};

export default Test;