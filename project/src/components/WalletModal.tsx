import React,{Fragment} from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import WalletModalDetail from "./WalletModalDetail";

interface IProps{}

interface IState {
    modalIsOpen:boolean
}


export default class WalletModal extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        this.state = {
            modalIsOpen: false
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal(){
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        const {modalIsOpen} = this.state
        return (
            <Fragment>
                <ReactModal isOpen={modalIsOpen} style={customStyles} onRequestClose={this.closeModal}>
                    <WalletModalDetail />
                </ReactModal>
                <WalletButton onClick={this.openModal}>
                    <WalletImage src={require("../assets/images/icon-wallet.png")} width="24" height="24" />
                    Wallet
                </WalletButton>
            </Fragment>
        )
    }
}

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '600px',
        height                : '600px'
    }
};

const WalletImage = styled.img`
    margin-right:6px;
`;
const WalletButton = styled.button`
  font-size: 14px;
  line-height: 24px;
  color: #707070;
  margin-left: 36px;
  cursor: pointer;
  display:flex; 
  &::before {
    content: "";
    display: block;
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 6px;
    background: center / contain no-repeat;
  }

  &:hover { text-decoration: underline; }
  background-image: url("../assets/images/icon-wallet.png");
`;