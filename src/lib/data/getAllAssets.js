// Import axios for get requests
import axios from 'axios';
// Historical Assets
import assets from './deploys.js';

// All Vaults URL
const urlVaults = `${process.env.ETH_PARSER_VAULTS_URL}`;
// Active Pools URL
const urlPools = `${process.env.ETH_PARSER_POOLS_URL}`;

// Init Empty Assets Array
const allVaultsExport = axios.get(urlVaults).then(result => result.data.data)
const allPoolsExport = axios.get(urlPools).then(result => result.data.data)
let histAssetsExport = assets.assets
// Utils async get act vaults, act pools, and hist assets
const getAllVaults = () => {
  return allVaultsExport
};

// MODULE EXPORTS
export {
  allVaultsExport,
  allPoolsExport,
  histAssetsExport
}



