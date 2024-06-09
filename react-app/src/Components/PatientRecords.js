import React, { useState, useEffect } from 'react';
import { Container, Table } from 'semantic-ui-react';
import Web3 from 'web3';
import { patientRegistrationABI, patientRegistrationAddress } from '../constant/constant.js';
import Layout from './layout'; // Import Layout component

const PatientRecords = () => {
  // eslint-disable-next-line no-unused-vars
  const [patientRecords, setPatientRecords] = useState([]);

  useEffect(() => {
    fetchPatientRecords();
  }, []);

  const fetchPatientRecords = async () => {
    try {
      const web3Instance = new Web3(window.ethereum);
      const contractInstance = new web3Instance.eth.Contract(patientRegistrationABI, patientRegistrationAddress);
      // eslint-disable-next-line no-unused-vars
      const accounts = await web3Instance.eth.getAccounts();
      const totalPatients = await contractInstance.methods.totalPatients().call({ from: accounts[0] });

      let records = [];
      for (let i = 0; i < totalPatients; i++) {
        const patient = await contractInstance.methods.getPatientInfo(i).call({ from: accounts[0] });
        records.push(patient);
      }

      setPatientRecords(records);
    } catch (error) {
      console.error('Error fetching patient records:', error);
    }
  };

  return (
    <Layout>
      <Container>
        <h1>Patient Records</h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Contact</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {patientRecords.map((record, index) => (
              <Table.Row key={index}>
                <Table.Cell>{record.name}</Table.Cell>
                <Table.Cell>{record.contact}</Table.Cell>
                <Table.Cell>{record.gender}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  );
};

export default PatientRecords;
