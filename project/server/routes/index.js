const express = require('express');
const axios = require('axios');
const router = express.Router();
const {createNewAccount} = require('./KAS');

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


module.exports = router;

