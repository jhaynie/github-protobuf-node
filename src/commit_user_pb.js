/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.github.CommitUser', null, global);

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
proto.github.CommitUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.CommitUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.CommitUser.displayName = 'proto.github.CommitUser';
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
proto.github.CommitUser.prototype.toObject = function(opt_includeInstance) {
  return proto.github.CommitUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.CommitUser} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.CommitUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    username: jspb.Message.getFieldWithDefault(msg, 3, ""),
    date: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.github.CommitUser}
 */
proto.github.CommitUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.CommitUser;
  return proto.github.CommitUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.CommitUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.CommitUser}
 */
proto.github.CommitUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
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
 * @param {!proto.github.CommitUser} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.CommitUser.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.CommitUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.CommitUser.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getUsername();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getDate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.CommitUser.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.CommitUser.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.github.CommitUser.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.CommitUser.prototype.setEmail = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string username = 3;
 * @return {string}
 */
proto.github.CommitUser.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.CommitUser.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string date = 4;
 * @return {string}
 */
proto.github.CommitUser.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.CommitUser.prototype.setDate = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.github);


// patched by github-protobuf to add toJSON and fromJSON methods

function _toBool (obj) {
	if (typeof(obj) === 'boolean') { return obj; }
	if (typeof(obj) === 'string') { return obj === 'true'; }
	if (typeof(obj) === 'number') { return obj > 0; }
	return false;
};



// .github.CommitUser
proto.github.CommitUser.prototype.fromJSON = function(obj) {
	'name' in obj && this.setName(obj.name);
	'email' in obj && this.setEmail(obj.email);
	'username' in obj && this.setUsername(obj.username);
	'date' in obj && this.setDate(obj.date);
	return this;
};

proto.github.CommitUser.prototype.toJSON = function() {
	var obj = this.toObject();
	if ('name' in obj) {
		obj.name = obj.name;
		delete obj.name;
	}
	if ('email' in obj) {
		obj.email = obj.email;
		delete obj.email;
	}
	if ('username' in obj) {
		obj.username = obj.username;
		delete obj.username;
	}
	if ('date' in obj) {
		obj.date = obj.date;
		delete obj.date;
	}
	return obj;
};

