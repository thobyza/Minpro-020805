const userRouter = require("./userRouter");
const cityRouter = require("./cityRouter");
const referralRouter = require("./referralRouter");
const eventRouter = require('./eventRouter')
const categoryRouter = require('./categoryRouter')

module.exports = {
    eventRouter,
    categoryRouter,
    userRouter, 
    cityRouter, 
    referralRouter
};
