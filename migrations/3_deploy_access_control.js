const AccessControl = artifacts.require("./AccessControl.sol");

module.exports = function(deployer) {
  deployer.deploy(AccessControl);
};
