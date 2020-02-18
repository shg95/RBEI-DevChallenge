const ethereum = require("./web3");
const eth = new ethereum();

eth.registerUser(123,234,"2019.12.12",22,"Male","BP",(t)=>{
    console.log(t);
})