var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        console.log('from Burgerjs: '+ vals);
        
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        console.log("From BurgerJS: " + condition);
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        })
    }
}



module.exports = burger;