const express = require('express');
const axios = require('axios');
const router = express.Router();
const {createNewAccount, LookUpAccount, UpdateMultiSigAccount, UpdatePhotoTransaction} = require('./KAS');
const {MultiSignatureAccount} = require('./Account');
const {caver} = require('./caver');



router.get('/account',  async (req,res) => {
    try{
        const response = {
            data: null
        }

        res.send(response.data);
    }catch (e){
        console.log(e);
    }finally {
        res.send({
            success:false
        })
    }
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

router.get('/test', async (req, res) => {
    console.log(caver.utils);
});


module.exports = router;

