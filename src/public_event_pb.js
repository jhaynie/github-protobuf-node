/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var user_pb = require('./user_pb.js');
var repository_pb = require('./repository_pb.js');
goog.exportSymbol('proto.github.PublicEvent', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.PublicEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.PublicEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.PublicEvent.displayName = 'proto.github.PublicEvent';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.PublicEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.PublicEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.PublicEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.PublicEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    repository: (f = msg.getRepository()) && repository_pb.Repository.toObject(includeInstance, f),
    sender: (f = msg.getSender()) && user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.PublicEvent}
 */
proto.github.PublicEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.PublicEvent;
  return proto.github.PublicEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.PublicEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.PublicEvent}
 */
proto.github.PublicEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new repository_pb.Repository;
      reader.readMessage(value,repository_pb.Repository.deserializeBinaryFromReader);
      msg.setRepository(value);
      break;
    case 2:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.github.PublicEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PublicEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.PublicEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PublicEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRepository();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      repository_pb.Repository.serializeBinaryToWriter
    );
  }
  f = this.getSender();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repository repository = 1;
 * @return {?proto.github.Repository}
 */
proto.github.PublicEvent.prototype.getRepository = function() {
  return /** @type{?proto.github.Repository} */ (
    jspb.Message.getWrapperField(this, repository_pb.Repository, 1));
};


/** @param {?proto.github.Repository|undefined} value */
proto.github.PublicEvent.prototype.setRepository = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.PublicEvent.prototype.clearRepository = function() {
  this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PublicEvent.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User sender = 2;
 * @return {?proto.github.User}
 */
proto.github.PublicEvent.prototype.getSender = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 2));
};


/** @param {?proto.github.User|undefined} value */
proto.github.PublicEvent.prototype.setSender = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.PublicEvent.prototype.clearSender = function() {
  this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PublicEvent.prototype.hasSender = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.github);
