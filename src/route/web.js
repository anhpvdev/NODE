import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) =>{
    router.get('/', homeController.getHomepage) 

    router.get('/main', (req, res) => {
      res.render('about.ejs')
    })  
    return app.use('/', router)
}

export default initWebRoute