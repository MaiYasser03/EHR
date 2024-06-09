const DoctorRegistration = artifacts.require("./DoctorRegistration.sol");

module.exports = function(deployer) {
  deployer.deploy(DoctorRegistration);
};
