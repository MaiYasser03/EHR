// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.0 <0.9.0;

contract DoctorRegistration {
    // Structure for doctor information
    struct Doctor {
        string name;
        string contact;
        string specialization;
    }

    // Mapping of doctor addresses to doctor information
    mapping(address => Doctor) private doctors;

    // Event emitted when a doctor signs up
    event DoctorSignUp(address indexed _doctor, string message);

    // Function for doctors to sign up
    function signupDoctor(string memory _name, string memory _contact, string memory _specialization) public {
        // Check if the doctor already exists
        Doctor memory d = doctors[msg.sender];
        require(bytes(d.name).length == 0, "Doctor already exists");

        // Add the new doctor to the mapping
        doctors[msg.sender] = Doctor({
            name: _name,
            contact: _contact,
            specialization: _specialization
        });

        // Emit the DoctorSignUp event
        emit DoctorSignUp(msg.sender, "Registered as Doctor");
    }

    // Function to retrieve doctor information
    function getDoctorInfo() public view returns (string memory, string memory, string memory) {
        Doctor memory d = doctors[msg.sender];
        return (d.name, d.contact, d.specialization);
    }
}
