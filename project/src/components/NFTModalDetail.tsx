import React from "react";
import styled from "styled-components";
import moment from "moment";
import Clipboard from 'react-clipboard.js';
import {css} from "styled-components";

interface IProps{}
interface IState{}
export default class NFTModalDetail extends React.Component<IProps, IState>{

    render() {
        return(
            <ModalContainer>
                <ImageBox>
                    <Image src={require("../assets/images/baby1.jpg")} />
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
                            하루의 기록을 매일 남기고 싶어서... 라는 거창한 이유도 아니였다. 내가 블로그를 쓰기 시작한것은 정말 미치도록 한국말이 하고 싶어서였다. 지금이야 조금씩 랄라와 한국말로 대화를 하곤 하지만, 주변에 한국 사람이라곤 하나도 없는 곳에서 10년을 살고 나니.. 정말 한국말이 너무 하고 싶었다. 아.. 이건 정확하게 100퍼센트 맞는 말은 아닌것 같다. 사실 난 말수가 별로 없는 사람이다. 아이 둘을 키울때도, 내가 너무 말을 하지 않아서 애가 말을 못배우면 어쩌나.. 은근슬쩍 걱정도 되던 사람이다. (랄라가 한국말을 배운건 100퍼센트 랄라를 낮동안 키워주셨던 현정씨 덕분이다!.) 한국말을 하고 싶다는것은, 머리속에서 한국말이 엉키고 설키고, 엉망진창으로 들어앉아 있어, 막 풀어내지 않으면 가슴이 답답한 그런 느낌이었나 보다.
                        </RecordBodyContent>
                    </RecordBody>
                    <RecordFooter>
                        <HashBox>
                            <HashColumn> Hash </HashColumn>
                            <Hash href="https://scope.klaytn.com/tx/0xc99b249a883cb82b18748ae431e645232debd25f5f3a229cdb9b8edfbc9d468b"> 0xc99b249a883cb82b18748ae431e645232debd25f5f3a229cdb9b8edfbc9d468b </Hash>
                        </HashBox>

                        <OwnerBox>
                            <OwnerColumn> Owner </OwnerColumn>
                            <Owner href="https://scope.klaytn.com/account/0x88a5dc8858f0df1fb28c3a94fd58ae5930cb2c76"> 0x88a5dc8858f0df1fb28c3a94fd58ae5930cb2c76 </Owner>
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