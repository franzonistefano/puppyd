const PuppyContract = artifacts.require("PuppyContract");

module.exports = function(deployer) {
  deployer.deploy(PuppyContract);
};
