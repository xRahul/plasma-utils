const BN = require('web3').utils.BN

const DEPOSIT_METHOD = 'deposit'
const START_BYTE_SIZE = 12
const END_BYTE_SIZE = START_BYTE_SIZE
const TYPE_BYTE_SIZE = 4
const COIN_ID_BYTE_SIZE = START_BYTE_SIZE + TYPE_BYTE_SIZE
const BLOCKNUMBER_BYTE_SIZE = 12
const MIN_COIN_ID = new BN(0)
const MAX_COIN_ID = new BN('ffffffffffffffffffffffffffffffff', 16)

module.exports = {
  DEPOSIT_METHOD,
  START_BYTE_SIZE,
  END_BYTE_SIZE,
  TYPE_BYTE_SIZE,
  COIN_ID_BYTE_SIZE,
  BLOCKNUMBER_BYTE_SIZE,
  MIN_COIN_ID,
  MAX_COIN_ID
}
