// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract PatientRegistration {
    // Structure for patient information
    struct Patient {
        string name;
        string DOB;
        address id;
        string gender;
        string contact_info;
    }

    // Mapping of patient addresses to patient information
    mapping(address => Patient) private patients;

    // Event emitted when a patient signs up
    event PatientSignUp(address _patient, string message);

    // Modifier to check if a patient already exists
    modifier checkPatient(address _id) {
        require(patients[_id].id == address(0), "Patient already exists");
        _;
    }

    // Function for patients to sign up
    function signupPatient(string memory _name, string memory _contact, string memory _gender) public checkPatient(msg.sender) {
        patients[msg.sender] = Patient({
            name: _name,
            DOB: "", // Omitted for simplicity
            id: msg.sender,
            gender: _gender,
            contact_info: _contact
        });

        emit PatientSignUp(msg.sender, "Registered as Patient");
    }

    // Function to retrieve patient information
    function getPatientInfo() public view returns (string memory, address, string memory, string memory, string memory) {
        Patient memory p = patients[msg.sender];
        return (p.name, p.id, p.DOB, p.gender, p.contact_info);
    }
}
