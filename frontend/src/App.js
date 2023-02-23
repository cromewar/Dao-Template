import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar';

import { useEffect } from 'react';

import { useMetamaskState } from './web3/ConnectWallet';
// import { useGetValue } from './web3/GetCurrentValue';
// import { useGetBalance } from './web3/GetTokenBalance';
// import { useRequestFunds } from './web3/GetFunds';
// import { useCreateProposal } from './web3/NewProposal';

import "./App.css"



function App() {

  const { isConnected, account, signer, connectToMetamask } = useMetamaskState();




  return (
    <>
      <Header connectToMetamask={connectToMetamask} isConnected={isConnected} account={account} signer={signer} />
      <Navbar signer={signer} />
      <Footer />
    </>
  );
}

export default App;
