'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on btc-p2p Module {0}'
};

module.exports = require('@owstack/btc-lib').errors.extend(spec);
