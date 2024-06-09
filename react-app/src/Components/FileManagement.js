import React, { useState, useEffect } from 'react';
import connectMetaMask from '../utils/connectMetaMask';
import { fileManagementAddress, fileManagementABI } from '../constant/constant';

const FileManagement = () => {
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
          fileManagementABI,
          fileManagementAddress
        );
        setContract(contractInstance);
      } else {
        alert('Please install Metamask!');
      }
    };

    loadWeb3();
  }, []);

  const addUserFiles = async (fileName, fileType, fileContent) => {
    if (contract) {
      try {
        await contract.methods.addUserFiles(fileName, fileType, fileContent).send({ from: account });
        alert('File added successfully!');
      } catch (error) {
        console.error('Error adding file:', error);
      }
    } else {
      alert('Contract not loaded!');
    }
  };

  return (
    <div>
      <h2>File Management</h2>
      <div>
        <label>
          File Name:
          <input type="text" id="fileName" />
        </label>
      </div>
      <div>
        <label>
          File Type:
          <input type="text" id="fileType" />
        </label>
      </div>
      <div>
        <label>
          File Content:
          <textarea id="fileContent"></textarea>
        </label>
      </div>
      <button onClick={() => addUserFiles(
        document.getElementById('fileName').value,
        document.getElementById('fileType').value,
        document.getElementById('fileContent').value
      )}>Add File</button>
    </div>
  );
};

export default FileManagement;
