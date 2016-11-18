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
goog.exportSymbol('proto.github.DeleteEvent', null, global);

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
proto.github.DeleteEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.DeleteEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.DeleteEvent.displayName = 'proto.github.DeleteEvent';
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
proto.github.DeleteEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.DeleteEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.DeleteEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.DeleteEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    ref: jspb.Message.getFieldWithDefault(msg, 1, ""),
    refType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pusherType: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.github.DeleteEvent}
 */
proto.github.DeleteEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.DeleteEvent;
  return proto.github.DeleteEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.DeleteEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.DeleteEvent}
 */
proto.github.DeleteEvent.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPusherType(value);
      break;
    case 4:
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
 * @param {!proto.github.DeleteEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.DeleteEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.DeleteEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.DeleteEvent.prototype.serializeBinaryToWriter = function (writer) {
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
  f = this.getPusherType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getRepository();
  if (f != null) {
    writer.writeMessage(
      4,
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
proto.github.DeleteEvent.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.DeleteEvent.prototype.setRef = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string ref_type = 2;
 * @return {string}
 */
proto.github.DeleteEvent.prototype.getRefType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.DeleteEvent.prototype.setRefType = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string pusher_type = 3;
 * @return {string}
 */
proto.github.DeleteEvent.prototype.getPusherType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.DeleteEvent.prototype.setPusherType = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional Repository repository = 4;
 * @return {?proto.github.Repository}
 */
proto.github.DeleteEvent.prototype.getRepository = function() {
  return /** @type{?proto.github.Repository} */ (
    jspb.Message.getWrapperField(this, repository_pb.Repository, 4));
};


/** @param {?proto.github.Repository|undefined} value */
proto.github.DeleteEvent.prototype.setRepository = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.DeleteEvent.prototype.clearRepository = function() {
  this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.DeleteEvent.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional User sender = 7;
 * @return {?proto.github.User}
 */
proto.github.DeleteEvent.prototype.getSender = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 7));
};


/** @param {?proto.github.User|undefined} value */
proto.github.DeleteEvent.prototype.setSender = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.DeleteEvent.prototype.clearSender = function() {
  this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.DeleteEvent.prototype.hasSender = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.github);
