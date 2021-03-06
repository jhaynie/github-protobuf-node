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
goog.exportSymbol('proto.github.FollowEvent', null, global);

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
proto.github.FollowEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.FollowEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.FollowEvent.displayName = 'proto.github.FollowEvent';
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
proto.github.FollowEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.FollowEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.FollowEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.FollowEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    target: (f = msg.getTarget()) && user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.github.FollowEvent}
 */
proto.github.FollowEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.FollowEvent;
  return proto.github.FollowEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.FollowEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.FollowEvent}
 */
proto.github.FollowEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setTarget(value);
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
 * @param {!proto.github.FollowEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.FollowEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.FollowEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.FollowEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTarget();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional User target = 1;
 * @return {?proto.github.User}
 */
proto.github.FollowEvent.prototype.getTarget = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 1));
};


/** @param {?proto.github.User|undefined} value */
proto.github.FollowEvent.prototype.setTarget = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.FollowEvent.prototype.clearTarget = function() {
  this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.FollowEvent.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.github);


// patched by github-protobuf to add toJSON and fromJSON methods

function _toBool (obj) {
	if (typeof(obj) === 'boolean') { return obj; }
	if (typeof(obj) === 'string') { return obj === 'true'; }
	if (typeof(obj) === 'number') { return obj > 0; }
	return false;
};



// .github.FollowEvent
proto.github.FollowEvent.prototype.fromJSON = function(obj) {
	if ('target' in obj) {
		var User = require('./user_pb.js').User;
		var UserInstance = new User();
		this.setTarget(UserInstance.fromJSON(obj.target));
	}
	return this;
};

proto.github.FollowEvent.prototype.toJSON = function() {
	var obj = this.toObject();
	if ('target' in obj) {
		obj.target = this.getTarget().toJSON();
	}
	return obj;
};

