require("dotenv").config()

const apiKey = process.env.apiKey

const axios = require("axios")
const newsRouter = require("express").Router()

newsRouter.get("/all",async(req,res)=>{
    const result = await axios.get("https://newsapi.org/v2/top-headlines?country=ar&pageSize=50&apiKey=" + apiKey)
    res.send(result.data.articles)
})

newsRouter.get("/:category", async(req,res)=>{
    const category = req.params.category
    const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&category=${category}&pageSize=50&apiKey=${apiKey}`)
    res.send(result.data.articles)
})

module.exports = newsRouter