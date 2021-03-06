const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'news possible plate width account payment exchange car tray neglect jacket wealth',
  'https://ropsten.infura.io/J9ezcxyo8pwuP3rWnsP6'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('account : ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
  .deploy({ data: '0x' + compiledFactory.bytecode })
  .send({ gas: '1000000', from: accounts[0] });

  console.log('contract deployed : ', result.options.address);
};
deploy();