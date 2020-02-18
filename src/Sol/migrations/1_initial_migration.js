const Migrations = artifacts.require("healthIncentive");

module.exports = function(deployer) {
  deployer.deploy(Migrations,10000);
};
