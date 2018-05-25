import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB4b53609Cef52E6F7Cf36958F0d54Fea528D5De8'
);

export default instance;
