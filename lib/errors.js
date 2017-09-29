'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on btc-p2p Module {0}'
};

module.exports = require('btc-lib').errors.extend(spec);
