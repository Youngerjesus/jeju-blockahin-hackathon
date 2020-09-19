import React from "react";
import styled from "styled-components";
import caver from "../klaytn/caver";
import axios from 'axios';
import {Simulate} from "react-dom/test-utils";

const Test:React.FunctionComponent = (props) => {
    // console.log(caver);
    // testFunction();

    return (
        <None>
        </None>
    )
}

const None = styled.div`
    display:none; 
`
const testFunction = () => {
    const { privateKey } = caver.klay.accounts.create();

    const Account = caver.klay.accounts.privateKeyToAccount(privateKey);

    const publicKey = caver.klay.accounts.privateKeyToPublicKey(privateKey);

    console.log(Account);
    console.log(publicKey);

    axios.get('/api/account',{
        params:{
            address: Account.address
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

export default Test;