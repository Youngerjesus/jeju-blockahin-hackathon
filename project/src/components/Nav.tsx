import React from 'react'
import IconButton from './IconButton'
import WalletInfo from './WalletInfo';

import './Nav.scss'
import WalletModal from "./WalletModal";

const Nav = () => (
    <header className="Nav">
        <div className="Nav__inner">
            <h1 className="Nav__logo">
                <img
                    src={require("../assets/images/logo-klaystagram.png")}
                    alt="Klaystagram"
                />
            </h1>
            <div className="Nav__menus">
                <WalletModal />
                {/* <IconButton
          className="Nav__menu"
          icon="icon-wallet.svg"
          alt="Wallet info"
          onClick={() => ui.showModal({
            header: 'Wallet Info',
            content: (
              <WalletInfo address={address} />
            ),
          })}
        />
        <IconButton
          className="Nav__menu"
          icon="icon-logout.png"
          alt="Logout"
          onClick={logout}
        /> */}
            </div>
        </div>
    </header>
)

export default Nav;