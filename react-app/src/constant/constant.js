// src/constant.js

// DoctorRegistration contract
const doctorRegistrationAddress = "0xFEb9BC94e4aCd3a6AB1F52473fDC5AE66a06f9a5";
const doctorRegistrationABI = [ 
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_doctor",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "message",
                "type": "string"
            }
        ],
        "name": "DoctorSignUp",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_contact",
                "type": "string"
            },
            {
                "name": "_specialization",
                "type": "string"
            }
        ],
        "name": "signupDoctor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDoctorInfo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
// PatientRegistration contract
const patientRegistrationAddress = "0xEB8e521c19D76B469e05B1455bb370C66abDdAf3";
const patientRegistrationABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_patient",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_contact",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_gender",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "message",
                "type": "string"
            }
        ],
        "name": "PatientSignUp",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_contact",
                "type": "string"
            },
            {
                "name": "_gender",
                "type": "string"
            }
        ],
        "name": "signupPatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getPatientInfo",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
// FileManagement contract
const fileManagementAddress = "0xE6829E796476Bba15BbacFaCF37Ec26CEF81ed42";
const fileManagementABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "file_name",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "file_type",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "file_hash",
            "type": "string"
          }
        ],
        "name": "AddUserFiles",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_file_name",
            "type": "string"
          },
          {
            "name": "_file_type",
            "type": "string"
          },
          {
            "name": "_file_content",
            "type": "string"
          }
        ],
        "name": "addUserFiles",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          }
        ],
        "name": "getUserFiles",
        "outputs": [
          {
            "components": [
              {
                "name": "file_name",
                "type": "string"
              },
              {
                "name": "file_type",
                "type": "string"
              },
              {
                "name": "file_hash",
                "type": "string"
              }
            ],
            "name": "",
            "type": "tuple[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_content",
            "type": "string"
          }
        ],
        "name": "calculateHash",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_bytes32",
            "type": "bytes32"
          }
        ],
        "name": "bytes32ToString",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_byte",
            "type": "uint8"
          }
        ],
        "name": "byteToChar",
        "outputs": [
          {
            "name": "",
            "type": "bytes1"
          }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
      }
];

// AccessControl contract
const accessControlAddress = "0xB900822e6eA14f1Dc8f7c98f227B39b0fc0922fE";
const accessControlABI = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "patient_address",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "message",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "_doctor",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "doctor_address",
            "type": "address"
          }
        ],
        "name": "GrantDoctorAccess",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "patient_address",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "message",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "_doctor",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "doctor_address",
            "type": "address"
          }
        ],
        "name": "RevokeDoctorAccess",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_doctor",
            "type": "address"
          }
        ],
        "name": "grantAccessToDoctor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_doctor",
            "type": "address"
          }
        ],
        "name": "revokeAccessFromDoctor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
];

export {
    doctorRegistrationAddress,
    doctorRegistrationABI,
    patientRegistrationAddress,
    patientRegistrationABI,
    fileManagementAddress,
    fileManagementABI,
    accessControlAddress,
    accessControlABI
};
