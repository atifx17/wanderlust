const express=require("express");
const router=express.Router();
const wrapAsync=require('../utils/wrapAsync.js');
const {isLoggedIn,isOwner,validateListing}=require('../middleware.js');
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

router
    .route("/")
    .get(wrapAsync(listingController.index))//Index route
    .post(isLoggedIn,upload.single("listing[image]"),wrapAsync(listingController.createListing));//create route

//new route
router.get('/new',isLoggedIn,listingController.renderNewForm); 
//this is above show route because 
// if we put new below show route 
// then new is taken as id parameter;

router
    .route("/:id")
    .get(wrapAsync(listingController.showLisitng))//show route
    .put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))//update route
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));//Destory route //listings

//edit route
router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

module.exports=router;