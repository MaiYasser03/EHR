import Web3 from 'web3';

const connectMetaMask = async () => {
  if (window.ethereum) {
    try {
      // Request access to user's accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // Create and return Web3 instance
      const web3 = new Web3(window.ethereum);
      return web3;
    } catch (error) {
      // Handle user denial
      console.error('User denied account access');
      return null;
    }
  } else if (window.web3) {
    // Injected Web3 detected
    const web3 = window.web3;
    console.log('Injected web3 detected.');
    return web3;
  } else {
    // Non-Ethereum browser detected
    console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
    return null;
  }
};

export default connectMetaMask;
