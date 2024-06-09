import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory hook
import Layout from './layout'; // Import Layout component
import '../Styles/Medilab.css'; // Import the CSS file
import Web3 from 'web3';
import { patientRegistrationABI, patientRegistrationAddress } from '../constant/constant.js'; // named import for the contract ABI and address


const PatientRegistration = ({ updatePatientRecords }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
      }).catch(err => console.error('Error fetching accounts:', err));
    } else {
      alert('Please install Metamask to use this feature');
    }
  }, []);

  const handlePatientSignup = async () => {
    if (!name || !contact || !gender) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const web3Instance = new Web3(window.ethereum);
      const contractInstance = new web3Instance.eth.Contract(patientRegistrationABI, patientRegistrationAddress);
      await contractInstance.methods.signupPatient(name, contact, gender).send({
        from: window.ethereum.selectedAddress,
      });
      alert('Patient registered successfully!');
      updatePatientRecords({ name, contact, gender }); // Update patient records with the new patient
    } catch (error) {
      console.error('Error details:', error);
      if (error.code === 4001) {
        alert('Transaction was rejected by the user.');
      } else if (error.message.includes('gas required exceeds allowance') || error.message.includes('gas required exceeds limit')) {
        alert('Unable to estimate gas. Please check the contract and try again.');
      } else {
        alert('There was an error registering the patient. Please try again.');
      }
    }
  };

  return (
    <Layout>
      <div className="section-padding"> {/* Apply the section-padding class */}
        <h2>Patient Registration</h2>
        <div className="form-group"> {/* Apply styles for form-group class */}
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div className="form-group"> {/* Apply styles for form-group class */}
          <label>
            Contact:
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </label>
        </div>
        <div className="form-group"> {/* Apply styles for form-group class */}
          <label>
            Gender:
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
          </label>
        </div>
        <button className="btn-form" onClick={handlePatientSignup}>Sign Up</button> {/* Apply styles for btn-form class */}
      </div>
    </Layout>
  );
};

export default PatientRegistration;
