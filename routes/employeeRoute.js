//imports
const express = require('express');


//instantiating router from express
const router = express.Router();

///get employee
router.get('/createEmployee', (req, res) => { 
    res.render('createEmployee', {title: 'Employee'});
});


//post employee
router.post('/createEmployee', (req, res) => {
    console.log(req.body);
});

//
//exports
module.exports = router;