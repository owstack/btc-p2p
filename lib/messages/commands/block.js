'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var btccore = require('btccore-lib');
var $ = btccore.util.preconditions;
var _ = btccore.deps._;

/**
 * @param {Block=} arg - An instance of a Block
 * @param {Object} options
 * @param {Function} options.Block - A block constructor
 * @extends Message
 * @constructor
 */
function BlockMessage(arg, options) {
  Message.call(this, options);
  this.Block = options.Block;
  this.command = 'block';
  $.checkArgument(
    _.isUndefined(arg) || arg instanceof this.Block,
    'An instance of Block or undefined is expected'
  );
  this.block = arg;
}
inherits(BlockMessage, Message);

BlockMessage.prototype.setPayload = function(payload) {
  this.block = this.Block.fromRaw(payload);
};

BlockMessage.prototype.getPayload = function() {
  return this.block.toRaw();
};

module.exports = BlockMessage;
