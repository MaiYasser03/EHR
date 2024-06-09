import React, { useState, useEffect } from 'react';
import Layout from './layout'; // Corrected import path
import '../Styles/Medilab.css'; // Import the CSS file
import Web3 from 'web3';
import { doctorRegistrationABI, doctorRegistrationAddress } from '../constant/constant.js'; // Named import for the contract ABI and address

const DoctorRegistration = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const connectToMetaMask = async () => {
      if (window.ethereum) {
        try {
          // Connect to MetaMask provider
          const web3Instance = new Web3(window.ethereum);
          setContract(new web3Instance.eth.Contract(doctorRegistrationABI, doctorRegistrationAddress));

          // Request accounts from MetaMask
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } catch (err) {
          console.error('Error fetching accounts:', err);
          alert('Failed to connect to MetaMask. Please try again.');
        }
      } else {
        alert('Please install MetaMask to use this feature');
      }
    };

    connectToMetaMask();
  }, []);

  const handleDoctorSignup = async () => {
    if (!name || !contact || !specialization) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Call the signupDoctor function on the contract
      await contract.methods.signupDoctor(name, contact, specialization).send({
        from: account,
      });
      alert('Doctor registered successfully!');
    } catch (error) {
      console.error('Error registering doctor:', error);
      alert('Failed to register doctor. Please try again.');
    }
  };

  return (
    <Layout> {/* Wrap the content in the Layout component */}
      <div className="section-padding"> {/* Apply the section-padding class */}
        <h2>Doctor Registration</h2>
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
            Specialization:
            <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
          </label>
        </div>
        <button className="btn-form" onClick={handleDoctorSignup}>Sign Up</button>
      </div>
    </Layout>
  );
};

export default DoctorRegistration;
