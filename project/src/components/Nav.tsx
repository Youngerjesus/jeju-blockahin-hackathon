import React from 'react'
import IconButton from './IconButton'
import WalletInfo from './WalletInfo';
import styled from "styled-components";
import './Nav.scss'
import WalletModal from "./WalletModal";


const Nav:React.FunctionComponent = (() => {
    return (
        <header className="Nav">
            <div className="Nav__inner">
                <h1 className="Nav__logo">
                    <img
                        src={require("../assets/images/logo.png")}
                        alt="NFTebrikler"
                    />
                </h1>
                <SearchImage width="16" height="16" src={require("../assets/images/search.png")} />
                <SearchInput type="text" placeholder="Search Address" />
                <div className="Nav__menus">
                    <WalletModal />
                </div>
            </div>
        </header>
    )
})

const SearchInput = styled.input`
    display: block;
    font-size: 12px;
    font-weight: bold;
    color: #999999;
    width: 100%;
    font-size: 14px;
    border: 1px solid #e1e1e1;
    padding: 22px 24px;
    border-radius: 5px;
    height:20px;
    width:200px;
    text-align:center;
    position:relative;
    left:180px;
`;

const SearchImage = styled.img`
    position:relative;
    z-index:9999;
    left: 345px;
`;

export default Nav;