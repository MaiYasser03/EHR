// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.0 <0.9.0;

contract AccessControl {
    
    address private owner;
    mapping(address => mapping(address => uint8)) private patientToDoctor;

    constructor() public { // Add "public" visibility specifier
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    modifier checkDoctor(address _doctor) {
        require(_doctor != address(0), "Doctor does not exist");
        _;
    }

    modifier checkPatient(address _patient) {
        require(_patient != address(0), "Patient does not exist");
        _;
    }

    event GrantDoctorAccess(address patient_address, string message, string _doctor, address doctor_address);
    event RevokeDoctorAccess(address patient_address, string message, string _doctor, address doctor_address);

    function grantAccessToDoctor(address _doctor) public checkPatient(msg.sender) checkDoctor(_doctor) {
        require(patientToDoctor[msg.sender][_doctor] == 0, "Doctor already has access");

        patientToDoctor[msg.sender][_doctor] = 1;
        emit GrantDoctorAccess(msg.sender, "Granted access to doctor", "Doctor Name", _doctor);
    }

    function revokeAccessFromDoctor(address _doctor) public checkPatient(msg.sender) checkDoctor(_doctor) {
        require(patientToDoctor[msg.sender][_doctor] == 1, "Doctor does not have access");

        patientToDoctor[msg.sender][_doctor] = 0;
        emit RevokeDoctorAccess(msg.sender, "Revoked access of doctor", "Doctor Name", _doctor);
    }

    // Other functionalities can be added as needed
}
