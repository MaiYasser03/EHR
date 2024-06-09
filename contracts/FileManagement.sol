// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.0 <0.9.0;

pragma experimental ABIEncoderV2; // Add this line to enable experimental ABI encoder version 2

contract FileManagement {
    struct File {
        string file_name;
        string file_type;
        string file_hash;
    }

    mapping(address => File[]) private patientFiles;

    event AddUserFiles(address indexed sender, string file_name, string file_type, string file_hash);

    function addUserFiles(string memory _file_name, string memory _file_type, string memory _file_content) public {
        // Hash the file content
        string memory file_hash = calculateHash(_file_content);
        
        // Add the file to the patient's files
        patientFiles[msg.sender].push(File({
            file_name: _file_name,
            file_type: _file_type,
            file_hash: file_hash
        }));

        // Emit event
        emit AddUserFiles(msg.sender, _file_name, _file_type, file_hash);
    }

    function getUserFiles(address _sender) public view returns (File[] memory) {
        return patientFiles[_sender];
    }
    
    // Function to calculate hash (SHA-256)
    function calculateHash(string memory _content) public pure returns (string memory) {
        bytes32 hash = sha256(bytes(_content));
        return bytes32ToString(hash);
    }
    
    // Function to convert bytes32 to string
    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        bytes memory bytesArray = new bytes(64);
        for (i = 0; i < 32; i++) {
            uint8 value = uint8(_bytes32[i]);
            bytesArray[i * 2] = byteToChar(value / 16);
            bytesArray[i * 2 + 1] = byteToChar(value % 16);
        }
        return string(bytesArray);
    }
    
    // Function to convert byte to char
    function byteToChar(uint8 _byte) public pure returns (bytes1) {
        if (_byte < 10) {
            return bytes1(_byte + 48);
        } else {
            return bytes1(_byte + 87);
        }
    }
}
