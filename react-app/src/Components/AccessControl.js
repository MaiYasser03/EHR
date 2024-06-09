import React, { useState, useEffect } from 'react';
import connectMetaMask from '../utils/connectMetaMask';
import { accessControlAddress, accessControlABI } from '../constant/constant';

const AccessControl = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');

  useEffect(() => {
    const loadWeb3 = async () => {
      const web3Instance = await connectMetaMask();
      if (web3Instance) {
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        const contractInstance = new web3Instance.eth.Contract(
          accessControlABI,
          accessControlAddress
        );
        setContract(contractInstance);
      } else {
        alert('Please install Metamask!');
      }
    };

    loadWeb3();
  }, []);

  const grantAccess = async (doctorAddress) => {
    if (contract) {
      try {
        await contract.methods.grantAccessToDoctor(doctorAddress).send({ from: account });
        alert('Access granted successfully!');
      } catch (error) {
        console.error('Error granting access:', error);
      }
    } else {
      alert('Contract not loaded!');
    }
  };

  return (
    <div>
      <h2>Access Control</h2>
      <div>
        <label>
          Doctor Address:
          <input type="text" id="doctorAddress" />
        </label>
      </div>
      <button onClick={() => grantAccess(document.getElementById('doctorAddress').value)}>Grant Access</button>
    </div>
  );
};

export default AccessControl;
