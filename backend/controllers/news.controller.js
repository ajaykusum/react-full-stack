// const User = require('../models/user.model');
// const newsservice = require('../services/newsService');

const getNews = async (req, res) => {
    try{
        // let st = await newsservice.getnews(req.body);
        // return res.status(200).json({"status":"OK","message":"news list",data:st});
       return res.status(200).json({ status: "OK", message: "News fetched successfully", data: "happ me" });
    }catch (e) {
        return res.status(500).json({"status":"ERROT","message":"news get failed "+ e.message});
    }
};


module.exports = {
    getNews,
};