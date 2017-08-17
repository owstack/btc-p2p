'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on btccore-p2p Module {0}'
};

module.exports = require('btccore-lib').errors.extend(spec);
