# JeJu-Blockahin-Hackathon
2020 JeJu Blockchain Hackathon Project

*** 
### Team SKKRYPTO

■ Ground X KAS

[블록해시값 or 트랙잭션해시값(Klaytn)]
- 0xec983f536427b97f0dfc4f24bd4b8168cdadae683270ae267f34586babd07a56 

[어카운트 아이디(KAS)] 
- 0077df69-bbf1-4dbf-8853-6ca46b1d1ca2 (main)
- 17f89661-ce7b-4072-9ae8-90c6e2384f96 (sub)

[컨트랙트 주소]
- 0x1c0ca9a6aa431b39438aeac9133176987dbb6aaf

***
### 서비스 모델 구현 및 결과

- #### Issue NFT
이벤트를 기록하고 이를 NFT를 발급받을 수 있는 것으로, 우리 서비스 의 핵심 기능이라고 말할 수 있습니다. 출생하는, 출생한 아이를 위한 탄생(기념) NFT, 지인의 생일 축하 NFT, 연인과의 기념일 NFT 등 특별 한 순간을 나만의 디지털 기억으로 남길 수 있습니다. 해당 순간에 대 한 사진과 함께 그 시간을 묘사하는 문구를 기입하면 유일무이한 디지 털 수집품을 갖게 됩니다

- #### Signature
두 개의 서명 기능을 구현하였습니다. 해당 기능은 초기 NFT를 발행할 때 공유 주소를 입력하는 여부에 달려있습니다. 탄생 NFT나 연인 기념일 NFT 등 본인의 NFT를 다른 지갑의 주인과 함께 공유하고 싶은 것이라면, 공유할 주소를 입력하여 MultiSig가 필요한 트랜잭션이 만들어집니다. 반 대로 홀로 소유하고 싶은 경우에는 공유할 주소를 입력하지 않으면 SingleSig로 트랜잭션이 만들어집니다.

- #### Ownership
각 사용자는 서비스 가입 시 KAS Wallet API를 통해 주소가 발급됩니다. 서비스 내에서 발급된 주소를 통해 고객들의 NFT가 보관됩니다. 새롭게 발급된 클레이튼 주소에서 기존에 본인이 소유하고 있던 주소로 토큰을 이동시키고자 한다면 일정 금액(수수료)를 결제하여 옮길 수 있게 됩니다.

- #### Fee Delegation
대납 기능을 통해 고객들이 NFT를 발행할 때 발생할 수 있는 수수료를 서비스 내에서 대신 처리해줍니다. 고객의 요청과 함께 Tx에 대한 서명이 처리되면, 수수료 계산이 발생합니다. NFT 발급을 위한 계산된 수수료의 대부분을 KAS에서 부담해줍니다.

- #### Detail Page
추가적으로 NFT 상세정보 확인 페이지를 구축하였습니다. 서비스 이용자 가 초기에 NFT 발행을 위해 기입했던 정보를 열람할 수 있는 페이지로, 해당 사진과 함께 담고 있는 정보, NFT 유효성 등을 한눈에 볼 수 있습니 다. 고객은 해당 페이지를 통해 과거의 기억이나 추억을 생생하게 떠올릴 수 있을 것입니다

- #### Key Update
블록체인 서비스를 이용하기 위해선 고객의 철저한 개인키 관리가 필요 합니다. 하지만 자신도 모르게 분실하고 까먹는 경우가 발생할 수 있습니 다. 따라서 이를 방지하기 위해 키를 업데이트 하여 새로운 키 쌍을 통해 계정을 지속적으로 이용할 수 있게 하였습니다.

- #### Tx Pending
이는 MultiSig 형태의 Tx 요청이 들어왔을 경우에 적용됩니다. Pending 상 태인 트랜잭션에 각 이용자가 sign을 해야 처리가 됩니다. 만약 pending 상태의 트랜잭션이 존재할 경우, 클라이언트에 알림이 뜨면서 sign을 할 수 있게 구현하였습니다.

- #### SNS Sharing
고객은 자신의 주소로 발급받은 NFT를 다른 서비스에 공유할 수 있는 기 회를 갖습니다. 카카오톡, 인스타그램, 페이스북에 있는 자신의 계정에 이 를 게시함으로써 다른 사람들과 해당 이벤트를 공유할 수 있게 됩니다. 또한, 이러한 기능은 SNS를 통해 직, 간접적으로 우리 서비스를 접한 사 람들의 유입 통로가 될 수 있을 것입니다.

***
### System Architecture

<img src="./project/src/assets/images/system_architecture.png" width="100%" height="100%">

***
### User Flow 

<img src="./project/src/assets/images/userflow.png" width="100%" height="100%">

### Please read Project Folder README.md

- <a href="project/README.md"> README.md </a>

  
