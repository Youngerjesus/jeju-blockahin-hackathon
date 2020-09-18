import ReactModal from "react-modal";
import React from "react";
import styled from "styled-components";
import {Fragment} from "react";
import UploadModalDetail from "./UploadModalDetail";

interface IProps{

}

interface IState{
    uploadModalIsOpen:boolean
}

export default class UploadModal extends React.Component<IProps, IState>{

    constructor(props:IProps) {
        super(props);
        this.state = {
            uploadModalIsOpen: false
        }

        this.openUploadModal = this.openUploadModal.bind(this);
        this.closeUploadModal = this.closeUploadModal.bind(this);
    }

    openUploadModal(){
        this.setState({
            uploadModalIsOpen: true
        });
    }

    closeUploadModal(){
        this.setState({
            uploadModalIsOpen: false
        });
    }

    render() {
        const {uploadModalIsOpen} = this.state;
        return (
            <Fragment>
                <ReactModal isOpen={uploadModalIsOpen} style={customStyles} contentLabel="Upload NFT" onRequestClose={this.closeUploadModal}>
                    <UploadModalDetail />
                </ReactModal>

                <UploadButtonBox>
                    <UploadButton onClick={this.openUploadModal}> Upload </UploadButton>
                </UploadButtonBox>
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

const UploadButtonBox = styled.div`
    height: 40px;
    flex: 0 0 auto; 
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    width:100px;
    display:flex;
    margin:auto;
`;

const UploadButton = styled.button`
    color:#fff;
    background: #0095f6;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    font-weight: 600;
    line-height: 26px;
    outline: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
`;
