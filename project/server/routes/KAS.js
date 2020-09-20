const axios = require('axios');
const {MultiSignatureAccount} = require('./Account');
const {caver} = require('./caver')

const Initialize = () => {
    const accessKey= "KASK3ULT9GYWOGCU221E0SO1";
    const secretKey = "x6AmpqGy7WkbjfUd4ALuf9SkfzT77MHMNO+NYd6N";
    const credential = Buffer.from(`${accessKey}:${secretKey}`).toString('base64');
    return credential;
};

const createNewAccount = () => {
    return new Promise((resolve => {
        const credential = Initialize();

        const config = {
            method: 'post',
            url: 'https://wallet-api.klaytnapi.com/v2/account',
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data:{

            }
        };

        // @ts-ignore
        axios(config)
            .then((response) => {
                console.log(response)
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
    }));
};


const AccountUpdateTransaction = () => {
    return new Promise((resolve) => {
        const accessKey= "KASK3ULT9GYWOGCU221E0SO1";
        const secretKey = "x6AmpqGy7WkbjfUd4ALuf9SkfzT77MHMNO+NYd6N";
        const credential = Buffer.from(`${accessKey}:${secretKey}`).toString('base64');

        const address = '0x351ebEA615EB52098e98831F63aD6F5DB8A7714b';

        const requestBody = {
            "from": address,
            "accountKey": {
                "keyType": 4,
                "key": {
                    "threshold": 4,
                    "weightedKeys": [
                        {
                            "weight": 3,
                            "publicKey": "0x04d4ad94bad55fb67e64014ce61f68017301ab0288cb7835d1cae20e6c004db03e5d2d8a289794ab819ac8f38226a3d403cbe5616797327e37d2897f412518383d"
                        },
                        {
                            "weight": 1,
                            "publicKey": "0x0439ad9f2a19a5868308e212d052e26251994cb35de48f55eb3cbdc815e257a7f977f25c5f5957bdcaacea9ef5257d68e0b50c328529479991fd168180bf5d12c3"
                        },
                    ]
                }
            },
            "gas": 1000000,
            "submit": true
        }

        const config = {
            method: 'put',
            url: `https://wallet-api.klaytnapi.com/v2/tx/account`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data:requestBody
        };

        try{
            axios(config)
                .then((response) => {
                    console.log(response);
                    resolve(response);
                })
                .catch((error) => {
                    console.log(error);
                    resolve(error);
                });
        }catch (e){
            console.log(e);
        }
    });
}

const EnableAccount = () => {
    return new Promise((resolve => {
        const credential = Initialize();

        const address = '0x78ffc9bde6dd1bb2bcc192f76668e0ff42ee8f05'

        const config = {
            method: 'put',
            url: `https://wallet-api.klaytnapi.com/v2/account/${address}/enable`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
        };

        axios(config)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
    }));
};

const UpdateMultiSigAccount = (address, publicKey1, publicKey2) => {
    return new Promise((resolve => {
        const credential = Initialize();
        // const address = MultiSignatureAccount.address;

        const requestBody = {
            "threshold": 2,
            "weightedKeys": [
                {
                    "weight": 1,
                    "publicKey": publicKey1
                },
                {
                    "weight": 1,
                    "publicKey": publicKey2
                }
            ]
        };

        const config = {
            method: 'put',
            url: `https://wallet-api.klaytnapi.com/v2/account/${address}/multisig`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data: requestBody
        };

        axios(config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                resolve(error);
            });
    }));
};

const sendKlayTransaction = () => {
    return new Promise((resolve => {
        const credential = Initialize();

        const senderAddress = '0x351ebEA615EB52098e98831F63aD6F5DB8A7714b'
        const receiverAddress = '0xea401A02a3F787CF2DDC4ec33Ef345bAFbfF8d6a';

        const requestBody = {
            "from": senderAddress,
            "value": "0x100",
            "to": receiverAddress,
            "memo": "memo",
            "nonce": 0,
            "gas": 1000000,
            "submit": true
        };

        const config = {
            method: 'post',
            url: `https://wallet-api.klaytnapi.com/v2/tx/value`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data: requestBody
        };

        axios(config)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
    }));
};

const FeeDelegationSendKlayTransaction = () => {
    return new Promise((resolve => {
        const credential = Initialize();

        const senderAddress = '0x351ebEA615EB52098e98831F63aD6F5DB8A7714b'
        const receiverAddress = '0xea401A02a3F787CF2DDC4ec33Ef345bAFbfF8d6a';

        const requestBody = {
            "from": senderAddress,
            "value": "0x12",
            "to": receiverAddress,
            "memo": "memo",
            "nonce": 0,
            "gas": 1000000,
            "submit": true,
            "feeRatio": 0
        }

        const config = {
            method: 'post',
            url: `https://wallet-api.klaytnapi.com/v2/tx/fd/value`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data: requestBody
        };

        axios(config)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                console.log(error);
                resolve(error);
            });
    }));
};

const LookUpAccount = (address) => {
    return new Promise((resolve => {
        const credential = Initialize();

        const myAddress = address;

        const config = {
            method: 'get',
            url: `https://wallet-api.klaytnapi.com/v2/account/${myAddress}`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                resolve(error);
            });
    }));
};

const UpdatePhotoTransaction = (multiSigAddress, address1, address2, file, fileName, fileDescription, fileLocation,fileMemoryDate ) => {
    return new Promise((resolve => {
        const DEPLOYED_ADDRESS = '0x1c0ca9a6aa431b39438aeac9133176987dbb6aaf'
        const owners = [address1, address2]
        const photo = caver.utils.hexToBytes(file)
        const title = fileName
        const description = fileDescription
        const location = fileLocation
        const memoryDate = fileMemoryDate
        const credential = Initialize();

        const executeContractObject = caver.klay.abi.encodeFunctionCall({
            name: 'recordMemory',
            type: 'function',
            inputs: [{
                type: 'address[]',
                name: 'owners'
            },{
                type: 'bytes',
                name: 'photo'
            },{
                type: 'string',
                name: 'title'
            },{
                type: 'string',
                name: 'description'
            },{
                type: 'string',
                name: 'location'
            },{
                type: 'uint256',
                name: 'memoryDate'
            }]
        }, [owners, photo, title, description, location, memoryDate])

        const configForExecuteContract = {
            method: 'POST',
            url: `https://wallet-api.klaytnapi.com/v2/tx/fd/contract/execute`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            },
            data: {
                from: address1,
                to: DEPLOYED_ADDRESS,
                input: executeContractObject,
                gas: 5000000,
                submit: true,
                feeRatio: 99
            }
        }

        axios(configForExecuteContract)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                resolve(error);
        })
    }));
};

const signTransaction = (address, transactionId)=> {
    return new Promise((resolve => {
        const credential = Initialize();

        const config = {
            method: 'post',
            url: `https://wallet-api.klaytnapi.com/v2/multisig/account/${address}/tx/${transactionId}/sign`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then((response)=> {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
                resolve(error);
            })
    }));
}

const getTransaction = (address) => {
    return new Promise((resolve => {
        const credential = Initialize();

        const config = {
            method: 'get',
            url: `https://wallet-api.klaytnapi.com/v2/multisig/account/${address}/tx/`,
            headers: {
                'x-chain-id': '1001',
                'Authorization': `Basic ${credential}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then((response)=> {
                resolve(response.data);
            })
            .catch(error => {
                console.log(error);
                resolve(error);
            })
    }));
}
module.exports  = {createNewAccount, LookUpAccount, UpdateMultiSigAccount, UpdatePhotoTransaction, signTransaction,getTransaction};