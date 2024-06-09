const FileManagement = artifacts.require("./FileManagement.sol");

module.exports = function(deployer) {
  deployer.deploy(FileManagement);
};
