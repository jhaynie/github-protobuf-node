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
goog.exportSymbol('proto.github.Milestone', null, global);

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
proto.github.Milestone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.Milestone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.Milestone.displayName = 'proto.github.Milestone';
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
proto.github.Milestone.prototype.toObject = function(opt_includeInstance) {
  return proto.github.Milestone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.Milestone} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.Milestone.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    htmlUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    number: jspb.Message.getFieldWithDefault(msg, 5, 0),
    state: jspb.Message.getFieldWithDefault(msg, 6, ""),
    title: jspb.Message.getFieldWithDefault(msg, 7, ""),
    description: jspb.Message.getFieldWithDefault(msg, 8, ""),
    creator: (f = msg.getCreator()) && user_pb.User.toObject(includeInstance, f),
    openIssues: jspb.Message.getFieldWithDefault(msg, 10, 0),
    closedIssues: jspb.Message.getFieldWithDefault(msg, 11, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 12, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 13, ""),
    closedAt: jspb.Message.getFieldWithDefault(msg, 14, ""),
    dueOn: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.github.Milestone}
 */
proto.github.Milestone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.Milestone;
  return proto.github.Milestone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.Milestone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.Milestone}
 */
proto.github.Milestone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelsUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 9:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setCreator(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOpenIssues(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClosedIssues(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setClosedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setDueOn(value);
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
 * @param {!proto.github.Milestone} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Milestone.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.Milestone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Milestone.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getHtmlUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getLabelsUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getState();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getTitle();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getCreator();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = this.getOpenIssues();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = this.getClosedIssues();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = this.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = this.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = this.getClosedAt();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = this.getDueOn();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.Milestone.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string html_url = 2;
 * @return {string}
 */
proto.github.Milestone.prototype.getHtmlUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setHtmlUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string labels_url = 3;
 * @return {string}
 */
proto.github.Milestone.prototype.getLabelsUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setLabelsUrl = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.github.Milestone.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.Milestone.prototype.setId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 number = 5;
 * @return {number}
 */
proto.github.Milestone.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.github.Milestone.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string state = 6;
 * @return {string}
 */
proto.github.Milestone.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setState = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string title = 7;
 * @return {string}
 */
proto.github.Milestone.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string description = 8;
 * @return {string}
 */
proto.github.Milestone.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional User creator = 9;
 * @return {?proto.github.User}
 */
proto.github.Milestone.prototype.getCreator = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 9));
};


/** @param {?proto.github.User|undefined} value */
proto.github.Milestone.prototype.setCreator = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.Milestone.prototype.clearCreator = function() {
  this.setCreator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.Milestone.prototype.hasCreator = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 open_issues = 10;
 * @return {number}
 */
proto.github.Milestone.prototype.getOpenIssues = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.github.Milestone.prototype.setOpenIssues = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional int32 closed_issues = 11;
 * @return {number}
 */
proto.github.Milestone.prototype.getClosedIssues = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/** @param {number} value */
proto.github.Milestone.prototype.setClosedIssues = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string created_at = 12;
 * @return {string}
 */
proto.github.Milestone.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setCreatedAt = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional string updated_at = 13;
 * @return {string}
 */
proto.github.Milestone.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setUpdatedAt = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional string closed_at = 14;
 * @return {string}
 */
proto.github.Milestone.prototype.getClosedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setClosedAt = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional string due_on = 15;
 * @return {string}
 */
proto.github.Milestone.prototype.getDueOn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.github.Milestone.prototype.setDueOn = function(value) {
  jspb.Message.setField(this, 15, value);
};


goog.object.extend(exports, proto.github);


// patched by github-protobuf to add toJSON and fromJSON methods

function _toBool (obj) {
	if (typeof(obj) === 'boolean') { return obj; }
	if (typeof(obj) === 'string') { return obj === 'true'; }
	if (typeof(obj) === 'number') { return obj > 0; }
	return false;
};



// .github.Milestone
proto.github.Milestone.prototype.fromJSON = function(obj) {
	'url' in obj && this.setUrl(obj.url);
	'html_url' in obj && this.setHtmlUrl(obj.html_url);
	'labels_url' in obj && this.setLabelsUrl(obj.labels_url);
	'id' in obj && this.setId(+obj.id);
	'number' in obj && this.setNumber(+obj.number);
	'state' in obj && this.setState(obj.state);
	'title' in obj && this.setTitle(obj.title);
	'description' in obj && this.setDescription(obj.description);
	if ('creator' in obj) {
		var User = require('./user_pb.js').User;
		var UserInstance = new User();
		this.setCreator(UserInstance.fromJSON(obj.creator));
	}
	'open_issues' in obj && this.setOpenIssues(+obj.open_issues);
	'closed_issues' in obj && this.setClosedIssues(+obj.closed_issues);
	'created_at' in obj && this.setCreatedAt(obj.created_at);
	'updated_at' in obj && this.setUpdatedAt(obj.updated_at);
	'closed_at' in obj && this.setClosedAt(obj.closed_at);
	'due_on' in obj && this.setDueOn(obj.due_on);
	return this;
};

proto.github.Milestone.prototype.toJSON = function() {
	var obj = this.toObject();
	if ('url' in obj) {
		obj.url = obj.url;
		delete obj.url;
	}
	if ('htmlUrl' in obj) {
		obj.html_url = obj.htmlUrl;
		delete obj.htmlUrl;
	}
	if ('labelsUrl' in obj) {
		obj.labels_url = obj.labelsUrl;
		delete obj.labelsUrl;
	}
	if ('id' in obj) {
		obj.id = obj.id;
		delete obj.id;
	}
	if ('number' in obj) {
		obj.number = obj.number;
		delete obj.number;
	}
	if ('state' in obj) {
		obj.state = obj.state;
		delete obj.state;
	}
	if ('title' in obj) {
		obj.title = obj.title;
		delete obj.title;
	}
	if ('description' in obj) {
		obj.description = obj.description;
		delete obj.description;
	}
	if ('creator' in obj) {
		obj.creator = this.getCreator().toJSON();
	}
	if ('openIssues' in obj) {
		obj.open_issues = obj.openIssues;
		delete obj.openIssues;
	}
	if ('closedIssues' in obj) {
		obj.closed_issues = obj.closedIssues;
		delete obj.closedIssues;
	}
	if ('createdAt' in obj) {
		obj.created_at = obj.createdAt;
		delete obj.createdAt;
	}
	if ('updatedAt' in obj) {
		obj.updated_at = obj.updatedAt;
		delete obj.updatedAt;
	}
	if ('closedAt' in obj) {
		obj.closed_at = obj.closedAt;
		delete obj.closedAt;
	}
	if ('dueOn' in obj) {
		obj.due_on = obj.dueOn;
		delete obj.dueOn;
	}
	return obj;
};

