const PatientRegistration = artifacts.require("./PatientRegistration.sol");

module.exports = function(deployer) {
  deployer.deploy(PatientRegistration);
};
