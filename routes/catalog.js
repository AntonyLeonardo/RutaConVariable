var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    const catalog =[
        {id:1,name:'Samsung J1', price:400.00},
        {id:2,name:'Huawei P30', price:800.00},
        {id:3,name:'Motorola E6', price:480.00},
        {id:4,name:'Iphone X', price:1400.00},
    ];

    response.send(catalog);
  });