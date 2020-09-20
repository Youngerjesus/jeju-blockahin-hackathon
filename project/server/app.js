const express = require('express');
const router = express.Router();
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const PORT = 5000;
const cors =require('cors');
const api = require('./routes/index');
const bodyParser = require('body-parser');
const EventEmitter = require('events').EventEmitter;
const myEventEmitter = new EventEmitter();
const {createNewAccount, LookUpAccount, UpdateMultiSigAccount, UpdatePhotoTransaction, signTransaction ,getTransaction} = require('./routes/KAS');

const connections = [];

app.use(bodyParser.json());
app.use('/api',api);
app.use('/c',router);
app.use(cors);

io.on('connection', function(socket) {
    console.log('A user connected');

    connections.push(socket);

    socket.on('init', function(data) {
        console.log(data.name);
        socket.emit('welcome', `hello! ${data.name}`);
    });
});

myEventEmitter.on('signEvent', (transactionObj) => {
    connections.forEach((socket) => {
        socket.emit('signEvent', transactionObj);
    });
});

myEventEmitter.on('successEvent', (payload) => {
    connections.forEach((socket) => {
        socket.emit('successEvent', payload);
    });
});

router.post('/updatePhoto', async (req, res) => {
    console.log("==================updatePhoto Start");

    const {file, fileName, location,caption,shareAddress,memoryData,myAddress} = req.body;

    const shareAddressInfo = await LookUpAccount(shareAddress);
    const myAddressInfo = await LookUpAccount(myAddress);


    const MultisigAccount = await UpdateMultiSigAccount(myAddressInfo.address, shareAddressInfo.publicKey, myAddressInfo.publicKey);

    console.log('====================================================Multisig');
    console.log(MultisigAccount);

    const sendTransactionResult = await UpdatePhotoTransaction(
        MultisigAccount.address,
        myAddressInfo.address,
        shareAddressInfo.address,
        file,
        fileName,
        caption,
        location,
        memoryData
    );

    const TransactionObj = {
        transactionId: sendTransactionResult.transactionId,
    };

    console.log(sendTransactionResult);
    myEventEmitter.emit('signEvent', TransactionObj);
});

router.get('/test', async (req,res)=> {
    const {address, transactionId} = req.query;

    const addressInfo = await LookUpAccount(address);
    const transactionResult = await signTransaction(addressInfo.address,transactionId);
    console.log(transactionResult);

    res.send(addressInfo);
});


router.get('/newAccount', async (req,res) => {
    try{
        const response = await createNewAccount();
        res.send(response.data);
    }catch (e){
        console.log(e)
    }finally {
        res.send({
            success:false
        });
    }
});

router.get('/lookup', async (req,res) => {
    const {address} = req.query;
    const addressInfo = await LookUpAccount(address);
    res.send(addressInfo);
});

router.post('/sign', async (req, res) => {
    console.log('sign============================================================');
    const {address, transactionId} = req.body;

    const AddressInfo1 = await LookUpAccount(address);

    const transactionResult = await signTransaction(AddressInfo1.address,transactionId);

    console.log(transactionResult);

    const payload = {
        address,
        transactionId
    }
    myEventEmitter.emit('successEvent', payload);
});

http.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})

module.exports = {app, io};