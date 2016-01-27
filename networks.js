var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('e2f2b7d1'),
  addressVersion: 0x3F,
  privKeyVersion: 191,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('3a02dffb178558510689bb611c091fa6b772a048c2fbab723204250eec090000'),
    merkle_root: hex('3f2c5f35bb521ca98c79144305dc50d29ad10732c768fb44968afb03b00484c1'),
    height: 0,
    nonce: 322828,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1436776945,
    bits: 504365055,
  },
  dnsSeeds: [
    'spore1.shrooms.pw',
    'spore2.shrooms.pw',
    'spore3.shrooms.pw',
    'spore4.shrooms.pw'
  ],
  defaultClientPort: 14250
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
