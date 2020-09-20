import React from "react";
import styled from "styled-components";
import moment from "moment";
import Clipboard from 'react-clipboard.js';
import {css} from "styled-components";
import { drawImageFromBytes } from "../utils/imageUtils";
import caver from '../klaytn/caver'

interface IProps{
    tokenId: number
}
interface IState{}
export default class NFTModalDetail extends React.Component<IProps, IState>{
    state = {
        tokenId: 0,
        numberOfOwners: 0,
        ownerHistory: [[]],
        photo: "0x0",
        title: "",
        description: "",
        location: "",
        memoryDate: 0,
        recordDate: 0
    }

    getMemoryDetail = async () => {
        try {
            myContract.methods.getMemoryDetail(this.props.tokenId).call()
                .then((response: any) => {
                    this.setState({
                        tokenId: response[0],
                        numberOfOwners: response[1],
                        ownerHistory: response[2],
                        photo: response[3],
                        title: response[4],
                        description: response[5],
                        location: response[6],
                        memoryDate: response[7],
                        recordDate: response[8]
                    })
                })
        } catch(error) {}
    }

    componentDidMount() {
        this.getMemoryDetail();
    }

    render() {
        return(
            <ModalContainer>
                <ImageBox>
                    <Image src={drawImageFromBytes(this.state.photo)} />
                </ImageBox>
                <RecordBox>
                    <RecordHeader>
                        <UserImage src={require("../assets/images/user.jpg")} />

                        <HeaderContent>
                            <UserAddress>
                                0xfgkasjgklsajgljaslkgjsalkgjsalkgjlas
                            </UserAddress>

                            <HeaderContentBox>
                                <DateBox>
                                    {moment(moment.now()).format('ll')}
                                </DateBox>

                                <ShareBox>
                                    <KakaoLink id="kakao-link-btn" href="javascript:sendLink()">
                                        <img width="20" height="20"
                                             src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                                        />
                                    </KakaoLink>
                                    <img width="24" height="24" src={require("../assets/images/instagram.png")} />
                                    <FacebookImage width="20" height="20" src={require("../assets/images/facebook2.png")} />
                                </ShareBox>
                            </HeaderContentBox>
                        </HeaderContent>

                    </RecordHeader>
                    <RecordBody>
                        <RecordBodyHeader>
                            그날의 추억
                        </RecordBodyHeader>
                        <RecordBodyContent>
                            {this.state.description}
                        </RecordBodyContent>
                    </RecordBody>
                    <RecordFooter>
                        <HashBox>
                            <HashColumn> Hash </HashColumn>
                            <Hash href="https://scope.klaytn.com/tx/0xc99b249a883cb82b18748ae431e645232debd25f5f3a229cdb9b8edfbc9d468b"> 0xc99b249a883cb82b18748ae431e645232debd25f5f3a229cdb9b8edfbc9d468b </Hash>
                        </HashBox>

                        <OwnerBox>
                            <OwnerColumn> Owner </OwnerColumn>
                            <Owner href="https://scope.klaytn.com/account/0x88a5dc8858f0df1fb28c3a94fd58ae5930cb2c76"> {this.state.ownerHistory[this.state.ownerHistory.length - 1]} </Owner>
                        </OwnerBox>
                    </RecordFooter>
                </RecordBox>
            </ModalContainer>
        )
    }
}

const ClipBoardStyle = css`
    width: 100px;
    height:30px;
`;

const ModalContainer = styled.div`
   display:flex; 
   width:900px;
   height:600px; 
`;

const ImageBox = styled.div`
    display:flex;
    width:600px;
    height:600px; 
`;

const Image = styled.img`
    width:600px;
    height:600px; 
`;

const RecordBox = styled.div`
    display:flex;
    width:300px;
    height:600px;
    flex-direction:column;  
`
const RecordHeader = styled.header`
    display:flex; 
    flex-direction:row; 
    border-left: 1px solid rgba(var(--ce3,239,239,239),1);
    height: 72px;
    padding: 16px;
    right: 0;
    width: 300px;
    border-bottom: 1px solid rgba(var(--ce3,239,239,239),1);
`;

const UserImage = styled.img`
    display:flex;
    width:32px;
    height:32px;
`;

const HeaderContent = styled.div`
    display:flex;
    flex-direction:column; 
    margin-left:auto;
    margin-right:auto;
`;

const UserAddress = styled.div`
    display:flex;
    color: rgba(var(--i1d,38,38,38),1);
    font-weight: 500;
    font-size: 14px;    
`;

const DateBox = styled.div`
    display:flex; 
    padding-top: 3px;
    font-size: 12px;
    color: #8c8c8c;
    font-family: Helvetica-Light;
    line-height: 12px;
    letter-spacing: -.5px;
`;

const ShareBox = styled.div`
    display:flex; 
    margin-left:auto;
`;

const KakaoLink = styled.a`
    display:flex; 
    align-items: center;
`;

const FacebookImage =styled.img`
    display: flex;
    margin: auto;
`;

const HeaderContentBox = styled.div`
    display:flex;
    flex-direction:row; 
    align-items: center;
`;

const RecordBodyHeader = styled.header`
    display:flex; 
    font-size: 12px;
    color: #8c8c8c;
`;

const RecordBody = styled.div`
    display:flex;
    flex-direction: column;
    padding: 16px 12px;
    flex-grow: 1;
    height: calc(100% - 32px);
    overflow-y: scroll;
`
const RecordBodyContent = styled.div`
    line-height: 1.8;
    display:flex;
    font-family: "Helvetica Neue",helvetica,AppleSDGothicNeo,sans-serif;
`;

const RecordFooter = styled.footer`
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    display:flex;
    flex-direction:column;
    height: 72px;
    padding: 16px;
    white-space:nowrap;
    align-items: center;
`;

const HashColumn = styled.div`
    display:flex;
    color: #8c8c8c;
    font-size: 1.3rem;
    font-family: Helvetica-Light;;
    line-height: 1.4;
`;

const OwnerColumn = styled.div`
    display:flex;
    color: #8c8c8c;
    font-size: 1.3rem;
    font-family: Helvetica-Light;;
    line-height: 1.4; 
`;

const Owner = styled.a`
    display:block;
    width:200px;
    overflow:hidden;
    white-space:nowrap;
    margin-left:auto;
    text-overflow: ellipsis;
    font-size: 1.4rem;
    font-weight: 400;      
`;

const Hash = styled.a`
    display:block;
    width:200px;
    overflow:hidden;
    white-space:nowrap;
    margin-left:auto;
    text-overflow: ellipsis;
    font-size: 1.4rem;
    font-weight: 400;      
`;

const HashBox = styled.div`
    display:flex;
    flex-direction:row; 
    width:100%;
`;

const OwnerBox = styled.div`
    width:100%;
    display:flex; 
    flex-direction:row; 
`;

const DEPLOYED_ABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "removeRecord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getMemoryDetail",
        "outputs": [
            {
                "components": [
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "numberOfOwners",
                        "type": "uint256"
                    },
                    {
                        "name": "ownerHistory",
                        "type": "address[][]"
                    },
                    {
                        "name": "photo",
                        "type": "bytes"
                    },
                    {
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "name": "location",
                        "type": "string"
                    },
                    {
                        "name": "memoryDate",
                        "type": "uint256"
                    },
                    {
                        "name": "recordDate",
                        "type": "uint256"
                    }
                ],
                "name": "",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address[]"
            },
            {
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "target",
                "type": "address"
            }
        ],
        "name": "getMemoryFeed",
        "outputs": [
            {
                "components": [
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "photo",
                        "type": "bytes"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "owners",
                "type": "address[]"
            },
            {
                "name": "photo",
                "type": "bytes"
            },
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "description",
                "type": "string"
            },
            {
                "name": "location",
                "type": "string"
            },
            {
                "name": "memoryDate",
                "type": "uint256"
            }
        ],
        "name": "recordMemory",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address[]"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address[]"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address[]"
            },
            {
                "indexed": true,
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "tokendId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "photo",
                "type": "bytes"
            },
            {
                "indexed": false,
                "name": "title",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "description",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "location",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "memoryDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "recordDate",
                "type": "uint256"
            }
        ],
        "name": "MemoryRecorded",
        "type": "event"
    }
]
const DEPLOYED_ADDRESS = '0x1c0ca9a6aa431b39438aeac9133176987dbb6aaf'
const myContract = new caver.klay.Contract(DEPLOYED_ABI, DEPLOYED_ADDRESS)

