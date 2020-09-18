import React,{useState,Fragment} from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Button from "./Button";

import Modal from 'react-bootstrap/Modal';
import ExampleModal from "./ExampleModal";
import NFTModalDetail from "./NFTModalDetail";
interface IProps{

}

interface IState{
    modalIsOpen:boolean,
    nftOverlay:boolean
}

export default class NFT extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            modalIsOpen: false,
            nftOverlay:false
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.nftMouseHoverEvent = this.nftMouseHoverEvent.bind(this);
        this.nftMouseLeaveEvent = this.nftMouseLeaveEvent.bind(this);
    }

    nftMouseHoverEvent(event:any){
        this.setState({
            nftOverlay:true
        });
    }

    nftMouseLeaveEvent(event:any){
        this.setState((state:IState) => {
            return {nftOverlay: false};
        });
    }

    openModal(){
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal(event:any){
        this.setState( (state: IState) => {
            console.log(state);
            return {modalIsOpen: false}
        });
    }


    componentDidMount() {
        ReactModal.setAppElement('body');
    }

    render() {
        const {nftOverlay, modalIsOpen} = this.state;

        let NFTOverlayBox:any;
        if(nftOverlay){
            NFTOverlayBox = <NFTOverlay />;
        }

        return (
            <Fragment>
                <ReactModal isOpen={modalIsOpen} style={customStyles} onRequestClose={this.closeModal}>
                    <NFTModalDetail />
                </ReactModal>

                <NFTBox onClick={this.openModal} onMouseOver={this.nftMouseHoverEvent} onMouseLeave={this.nftMouseLeaveEvent}>
                    <NFTImage src={require("../assets/images/baby1.jpg")} />
                    {NFTOverlayBox}
                </NFTBox>
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
        width                 : '900px',
        height                : '600px'
    }
};

const NFTBox = styled.div`
    cursor:pointer; 
    display:flex;
    width:250px;
    height:250px;
    margin-right:28px;
    margin-bottom:28px;
    background-image: url("../../assets/images/baby1.jpg");
    
    &:hover{
        background-color: white;
    }
`;

const NFTImage = styled.img`
    display:flex;
    width:250px;
    height:250px;
`;

const NFTOverlay = styled.div`
    width:250px;
    height:250px;
    position: absolute;
    background-color:rgba(0,0,0,0.2);
`;
