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
goog.exportSymbol('proto.github.CreateEvent', null, global);

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
proto.github.CreateEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.CreateEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.CreateEvent.displayName = 'proto.github.CreateEvent';
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
proto.github.CreateEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.CreateEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.CreateEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.CreateEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    masterBranch: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pusherType: jspb.Message.getFieldWithDefault(msg, 5, ""),
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
 * @return {!proto.github.CreateEvent}
 */
proto.github.CreateEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.CreateEvent;
  return proto.github.CreateEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.CreateEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.CreateEvent}
 */
proto.github.CreateEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterBranch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPusherType(value);
      break;
    case 6:
      var value = new repository_pb.Repository;
      reader.readMessage(value,repository_pb.Repository.deserializeBinaryFromReader);
      msg.setRepository(value);
      break;
    case 7:
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
 * @param {!proto.github.CreateEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.CreateEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.CreateEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.CreateEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRef();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRefType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getMasterBranch();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getPusherType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getRepository();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      repository_pb.Repository.serializeBinaryToWriter
    );
  }
  f = this.getSender();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ref = 1;
 * @return {string}
 */
proto.github.CreateEvent.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.CreateEvent.prototype.setRef = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string ref_type = 2;
 * @return {string}
 */
proto.github.CreateEvent.prototype.getRefType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.CreateEvent.prototype.setRefType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string master_branch = 3;
 * @return {string}
 */
proto.github.CreateEvent.prototype.getMasterBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.CreateEvent.prototype.setMasterBranch = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.github.CreateEvent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.CreateEvent.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string pusher_type = 5;
 * @return {string}
 */
proto.github.CreateEvent.prototype.getPusherType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.CreateEvent.prototype.setPusherType = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional Repository repository = 6;
 * @return {?proto.github.Repository}
 */
proto.github.CreateEvent.prototype.getRepository = function() {
  return /** @type{?proto.github.Repository} */ (
    jspb.Message.getWrapperField(this, repository_pb.Repository, 6));
};


/** @param {?proto.github.Repository|undefined} value */
proto.github.CreateEvent.prototype.setRepository = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.CreateEvent.prototype.clearRepository = function() {
  this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.CreateEvent.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional User sender = 7;
 * @return {?proto.github.User}
 */
proto.github.CreateEvent.prototype.getSender = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 7));
};


/** @param {?proto.github.User|undefined} value */
proto.github.CreateEvent.prototype.setSender = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.CreateEvent.prototype.clearSender = function() {
  this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.CreateEvent.prototype.hasSender = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.github);