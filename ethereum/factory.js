import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x47a9f76Cc9D774190044B55F858adF0000E98ba3'
);

export default instance;
