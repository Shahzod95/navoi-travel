const {News} = require("../models/news.Model")
const fs = require("fs")
const path = require("path")

const getAllNews = async(req, res) => {
    try {
        const news = await News.findAll()
        return res.status(200).json({
            message:"Success",
            news: news.reverse()
        })
    } catch (error) {
       return res.send(error)
    }

}


const getNewsById = async(req, res) => {
    const id = req.params.id
    try {
        const news = await News.findByPk(id)

        if(!news){
           return res.status(401).json({
                message:"Not found"
            })
        }

        return res.status(200).json({
            message:"Success",
            news
        })
    } catch (error) {
        return res.send(error)
    }

}

const addNews = async(req, res) => {
    const images = []
    req.files.img_list.map(i => {
      images.push(i.path)
    })
    try {
        const news = await News.create({
            title:req.body.title,
            title_ru:req.body.title_ru,
            title_uz:req.body.title_uz,
            sub_title:req.body.sub_title,
            sub_title_ru:req.body.sub_title_ru,
            sub_title_uz:req.body.sub_title_uz,
            main_img:req.files.main_img[0].path,
            description:req.body.description,
            description_ru:req.body.description_ru,
            description_uz:req.body.description_uz,
            img_list:images
        })

        return res.status(200).json({
            message:"Success",
            news
        })
    } catch (error) {
        return res.send(error)
    }
}

const updateNews = async(req, res) => {
    try {
    const news = await News.findByPk(req.params.id)
        if(news){
            let oldMainImg = news.main_img
            if(req.files.main_img){
                oldMainImg = req.files.main_img[0].path
                fs.unlink(path.join(__dirname, "../", news.main_img), (err, data) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log("Remove main image in news")
                    }
                })
            }
            let oldImgList = news.img_list
            
            if(req.files.img_list){
                oldImgList = []
                req.files.img_list.map(i => {
                    oldImgList.push(i.path)
                  })
                  news.img_list.forEach(element => {
                    fs.unlink(path.join(__dirname, "../", element), (err, data) => {
                        if(err){
                            console.log(err)
                        } else {
                            console.log("Remove image list in news")
                        }
                    })
                });
            }
        
            news.update({
                title:req.body.title,
                title_ru:req.body.title_ru,
                title_uz:req.body.title_uz,
                sub_title:req.body.sub_title,
                sub_title_ru:req.body.sub_title_ru,
                sub_title_uz:req.body.sub_title_uz,
                main_img:oldMainImg,
                description:req.body.description,
                description_ru:req.body.description_ru,
                description_uz:req.body.description_uz,
                img_list:oldImgList
            })
        return res.status(200).json({
            message:"Success",
            news
        })
        } else {
            return res.status(404).json({
                message:"News not found"
            })
        }
    }  catch (error) {
        return res.send(error)
    }
}

const deleteNews = async(req, res) => {
    try {
        const news = await News.findByPk(req.params.id)
        const {main_img, img_list} = news
        if(main_img){
            fs.unlink(path.join(__dirname, "../", main_img), (err, data) => {
                if(err){
                    console.log(err)
                } else {
                    console.log("Remove main image in news")
                }
            })
        }
        if(img_list){
            img_list.forEach(element => {
                fs.unlink(path.join(__dirname, "../", element), (err, data) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log("Remove image list in news")
                    }
                })
            });
        }
        if(news){
            await news.destroy()
            return res.status(200).json({
                message:"News deleted"
            })
        } else {
            return res.status(404).json({
                message:"News not found"
            })
        }
    } catch (error) {
        return res.send(error)
    }
}




module.exports = {
    getAllNews,
    getNewsById,
    addNews,
    updateNews,
    deleteNews
}