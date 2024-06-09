import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Components/MenuBar';
import Home from './Components/HomePage';
import DoctorRegistration from './Components/DoctorRegistration';
import PatientRegistration from './Components/PatientRegistration';
import FileManagement from './Components/FileManagement';
import AccessControl from './Components/AccessControl';
import connectMetaMask from './utils/connectMetaMask';
import PatientRecords from './Components/PatientRecords';
import {
    doctorRegistrationAddress,
    doctorRegistrationABI,
    patientRegistrationAddress,
    patientRegistrationABI,
    fileManagementAddress,
    fileManagementABI,
    accessControlAddress,
    accessControlABI
} from './constant/constant';

function App() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');
    const [patientRecords, setPatientRecords] = useState([]);

    useEffect(() => {
        const init = async () => {
            const web3Instance = await connectMetaMask();
            if (web3Instance) {
                setWeb3(web3Instance);
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
            }
        };
        init();
    }, []);

    const updatePatientRecords = (newPatient) => {
        setPatientRecords([...patientRecords, newPatient]);
    };

    const signupDoctor = async (name, contact, specialization) => {
        if (!web3) return;
        const contract = new web3.eth.Contract(doctorRegistrationABI, doctorRegistrationAddress);
        await contract.methods.signupDoctor(name, contact, specialization).send({ from: account });
    };

    const signupPatient = async (name, contact, gender) => {
        if (!web3) return;
        const contract = new web3.eth.Contract(patientRegistrationABI, patientRegistrationAddress);
        await contract.methods.signupPatient(name, contact, gender).send({ from: account });
        // After signing up the patient, update the patient records
        updatePatientRecords({ name, contact, gender });
    };

    const addUserFiles = async (fileName, fileType, fileContent) => {
        if (!web3) return;
        const contract = new web3.eth.Contract(fileManagementABI, fileManagementAddress);
        await contract.methods.addUserFiles(fileName, fileType, fileContent).send({ from: account });
    };

    const grantAccess = async (doctorAddress) => {
        if (!web3) return;
        const contract = new web3.eth.Contract(accessControlABI, accessControlAddress);
        await contract.methods.grantAccessToDoctor(doctorAddress).send({ from: account });
    };

    return (
        <Router>
            <div>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctor-registration" element={<DoctorRegistration signupDoctor={signupDoctor} />} />
                    <Route path="/patient-registration" element={<PatientRegistration signupPatient={signupPatient} />} />
                    <Route path="/file-management" element={<FileManagement addUserFiles={addUserFiles} />} />
                    <Route path="/access-control" element={<AccessControl grantAccess={grantAccess} />} />
                    <Route path="/patient-records" element={<PatientRecords patientRecords={patientRecords} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
