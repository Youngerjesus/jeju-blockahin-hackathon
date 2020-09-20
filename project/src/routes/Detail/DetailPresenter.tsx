import React from "react";
import styled from "styled-components";
import Feed from "../../components/Feed";
import NFT from "../../components/NFT";
import ReactModal from "react-modal";
import UploadModal from "../../components/UploadModal";
import { connect } from 'react-redux'
import caver from "../../klaytn/caver";
interface IProps{
    address:string
}

interface IState{
}

const mapStateToProps = (state:any) => ({
    accountKey: state.auth.accountKey,
})


const DetailPresenter = class DetailPresenter extends React.Component<IProps, IState>{

    state = {
        memory: []
    }

    componentDidMount() {
        console.log(this.props);
        this.getMemory();
    }

    refactorValue = (object: string) => {
        let target = object.split('"');
        let len = (target.length - 1) / 4;
        let result = [];
        for (let i = 0; i < len; i++) {
            let tmp = {
                'tokenId': target[i * 4 + 1],
                'photo': target[i * 4 + 3]
            }
            result.push(tmp);
        }
        return result;
    }

    getMemory = async () => {
        try {
            myContract.methods.getMemoryFeed(this.props.address).call()
                .then((response: any) => {
                    let result = this.refactorValue(JSON.stringify(response));
                    this.setState({ memory: result });
                })
        } catch(error) {
            this.setState({ memory: [] });
        }
    }


    constructor(props:IProps) {
        super(props);
    }

    render() {
        let {address}:any = this.props;
        let {memory}:any = this.state;
        // @ts-ignore
        let memoryArray = memory ? memory : [];
        return (
            <Container>
                <Main>
                    <ProfileContainer>
                        <ProfileBox>
                            <UserImageBox>
                                <UserImage src={require("../../assets/images/user.jpg")} />
                            </UserImageBox>
                            <ProfileInfoSection>
                                <UserAddress> {address}
                                    <UploadModal />
                                </UserAddress>
                                <ProfileIntro> 당신의 소중한 순간을 기념으로 포착해서 남겨보세요. </ProfileIntro>
                                <EtcBox>
                                    <Board> 게시물 수
                                        <span> &nbsp; 5 </span>
                                    </Board>
                                    <Share>
                                        공유자 수
                                        <span> &nbsp; 10 </span>
                                    </Share>
                                </EtcBox>
                            </ProfileInfoSection>
                        </ProfileBox>
                    </ProfileContainer>

                    <NavBox>
                        <NavNFTSvg fill="#262626" viewBox="0 0 48 48" width="12" height="12">
                            <path fillRule="evenodd" clipRule="evenodd" d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z">
                            </path>
                        </NavNFTSvg>
                        <NavNFT> NFT 게시물 </NavNFT>
                    </NavBox>

                    <NFTBox>
                        {memoryArray.map((target:any) => {
                            const tokenId = target["tokenId"];
                            const photo = target["photo"];
                            return (
                                <NFT key={target["tokenId"]} tokenId={tokenId} photo={photo}/>
                            )
                        })}
                    </NFTBox>
                </Main>
            </Container>
        )
    }
}

export default connect(mapStateToProps, null)(DetailPresenter);

const Container = styled.section`
  width:calc(100%); 
  min-height: 100%;
  max-width: 935px;
  margin: 0 auto;
  display:flex;
  flex-flow: row nowrap;
  flex-grow: 1;
`;

const Main = styled.div`
    width: 100%;
    display:flex; 
    align-items: stretch;
    width:calc(100% - 40px); 
    padding: 30px 20px 0;
    flex-direction:column;
`;

const WhiteSpace = styled.div`
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid #dbdbdb;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 3px;
    margin-bottom: 24px;
    margin-top: 0;
    padding: 16px 0;
`;

const ProfileContainer = styled.div`
    
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-align: stretch;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-shrink: 0;
    margin: 0;
    margin-top:20px;
    width:100%;
    padding: 0;
    position: relative;
    flex-direction:column;
`;

const ProfileBox = styled.div`
    padding-bottom: 0px;
    padding-top: 0px;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-align: stretch;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
    flex-direction:row;
    margin-bottom: 44px;
`;

const UserImageBox = styled.div`
    display:flex;
    flex-grow: 1;
    flex-basis: 0;
    margin-right:30px;
    justify-content: center;
    align-items: stretch;
    border: 0 solid #000;
`;
const UserImage = styled.img`
    display: flex;
    width:150px;
    height:150px; 
`;

const ProfileInfoSection = styled.section`
    flex-basis: 30px;
    -webkit-box-flex: 2;
    -webkit-flex-grow: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    color: rgba(var(--i1d,38,38,38),1);
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    min-width: 0;
    display: flex;
    flex-direction:column;
`

const ProfileIntro = styled.div`
    height:40px;
    margin-bottom:20px;
    font-size: 16px;
    line-height: 24px;
    display:flex;
    word-wrap: break-word;
    font-family: Helvetica-Light;
`

const UserAddress = styled.div`
    margin-bottom: 20px;
    display:flex;
    color: rgba(var(--i1d,38,38,38),1);
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
`;

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

const EtcBox = styled.div`
    display:flex;
    flex-direction:row; 
`;

const Board = styled.div`
    display:flex; 
    margin-right:30px; 
`;

const Share = styled.div `
    display:flex; 
    margin-right:auto; 
`;

const NavBox = styled.div`
    border-top: 1px solid rgba(var(--b38,219,219,219),1);
    color: #8e8e8e;
    display:flex;
    flex-direction: row;
    font-size: 12px;
    font-weight: 600;
    justify-content: center;
    height: 53px;
    align-items: center;
`;

const NavNFT = styled.div`
    display:flex; 
    margin-left:5px;
`;

const NavNFTSvg = styled.svg`
    fill: rgb(38, 38, 38);
    height: 12;
    width: 12;
`;

const NFTBox = styled.div`
    display: flex;
    align-items: stretch;
    flex-shrink: 0;
    flex-wrap: wrap;
    flex-direction:row; 
    width: 100%;
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
