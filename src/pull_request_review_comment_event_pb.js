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
var pullrequest_pb = require('./pullrequest_pb.js');
goog.exportSymbol('proto.github.PullRequestReviewComment', null, global);
goog.exportSymbol('proto.github.PullRequestReviewCommentEvent', null, global);
goog.exportSymbol('proto.github.PullRequestReviewCommentLink', null, global);
goog.exportSymbol('proto.github.PullRequestReviewCommentLinks', null, global);

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
proto.github.PullRequestReviewCommentLink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.PullRequestReviewCommentLink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.PullRequestReviewCommentLink.displayName = 'proto.github.PullRequestReviewCommentLink';
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
proto.github.PullRequestReviewCommentLink.prototype.toObject = function(opt_includeInstance) {
  return proto.github.PullRequestReviewCommentLink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.PullRequestReviewCommentLink} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.PullRequestReviewCommentLink.toObject = function(includeInstance, msg) {
  var f, obj = {
    html: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.github.PullRequestReviewCommentLink}
 */
proto.github.PullRequestReviewCommentLink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.PullRequestReviewCommentLink;
  return proto.github.PullRequestReviewCommentLink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.PullRequestReviewCommentLink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.PullRequestReviewCommentLink}
 */
proto.github.PullRequestReviewCommentLink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtml(value);
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
 * @param {!proto.github.PullRequestReviewCommentLink} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentLink.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.PullRequestReviewCommentLink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentLink.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getHtml();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string html = 1;
 * @return {string}
 */
proto.github.PullRequestReviewCommentLink.prototype.getHtml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewCommentLink.prototype.setHtml = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.github.PullRequestReviewCommentLinks = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.PullRequestReviewCommentLinks, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.PullRequestReviewCommentLinks.displayName = 'proto.github.PullRequestReviewCommentLinks';
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
proto.github.PullRequestReviewCommentLinks.prototype.toObject = function(opt_includeInstance) {
  return proto.github.PullRequestReviewCommentLinks.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.PullRequestReviewCommentLinks} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.PullRequestReviewCommentLinks.toObject = function(includeInstance, msg) {
  var f, obj = {
    self: (f = msg.getSelf()) && proto.github.PullRequestReviewCommentLink.toObject(includeInstance, f),
    html: (f = msg.getHtml()) && proto.github.PullRequestReviewCommentLink.toObject(includeInstance, f),
    pullRequest: (f = msg.getPullRequest()) && proto.github.PullRequestReviewCommentLink.toObject(includeInstance, f)
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
 * @return {!proto.github.PullRequestReviewCommentLinks}
 */
proto.github.PullRequestReviewCommentLinks.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.PullRequestReviewCommentLinks;
  return proto.github.PullRequestReviewCommentLinks.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.PullRequestReviewCommentLinks} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.PullRequestReviewCommentLinks}
 */
proto.github.PullRequestReviewCommentLinks.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.PullRequestReviewCommentLink;
      reader.readMessage(value,proto.github.PullRequestReviewCommentLink.deserializeBinaryFromReader);
      msg.setSelf(value);
      break;
    case 2:
      var value = new proto.github.PullRequestReviewCommentLink;
      reader.readMessage(value,proto.github.PullRequestReviewCommentLink.deserializeBinaryFromReader);
      msg.setHtml(value);
      break;
    case 3:
      var value = new proto.github.PullRequestReviewCommentLink;
      reader.readMessage(value,proto.github.PullRequestReviewCommentLink.deserializeBinaryFromReader);
      msg.setPullRequest(value);
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
 * @param {!proto.github.PullRequestReviewCommentLinks} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentLinks.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.PullRequestReviewCommentLinks.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentLinks.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSelf();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.github.PullRequestReviewCommentLink.serializeBinaryToWriter
    );
  }
  f = this.getHtml();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.PullRequestReviewCommentLink.serializeBinaryToWriter
    );
  }
  f = this.getPullRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.PullRequestReviewCommentLink.serializeBinaryToWriter
    );
  }
};


/**
 * optional PullRequestReviewCommentLink self = 1;
 * @return {?proto.github.PullRequestReviewCommentLink}
 */
proto.github.PullRequestReviewCommentLinks.prototype.getSelf = function() {
  return /** @type{?proto.github.PullRequestReviewCommentLink} */ (
    jspb.Message.getWrapperField(this, proto.github.PullRequestReviewCommentLink, 1));
};


/** @param {?proto.github.PullRequestReviewCommentLink|undefined} value */
proto.github.PullRequestReviewCommentLinks.prototype.setSelf = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.PullRequestReviewCommentLinks.prototype.clearSelf = function() {
  this.setSelf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentLinks.prototype.hasSelf = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PullRequestReviewCommentLink html = 2;
 * @return {?proto.github.PullRequestReviewCommentLink}
 */
proto.github.PullRequestReviewCommentLinks.prototype.getHtml = function() {
  return /** @type{?proto.github.PullRequestReviewCommentLink} */ (
    jspb.Message.getWrapperField(this, proto.github.PullRequestReviewCommentLink, 2));
};


/** @param {?proto.github.PullRequestReviewCommentLink|undefined} value */
proto.github.PullRequestReviewCommentLinks.prototype.setHtml = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.PullRequestReviewCommentLinks.prototype.clearHtml = function() {
  this.setHtml(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentLinks.prototype.hasHtml = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PullRequestReviewCommentLink pull_request = 3;
 * @return {?proto.github.PullRequestReviewCommentLink}
 */
proto.github.PullRequestReviewCommentLinks.prototype.getPullRequest = function() {
  return /** @type{?proto.github.PullRequestReviewCommentLink} */ (
    jspb.Message.getWrapperField(this, proto.github.PullRequestReviewCommentLink, 3));
};


/** @param {?proto.github.PullRequestReviewCommentLink|undefined} value */
proto.github.PullRequestReviewCommentLinks.prototype.setPullRequest = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.PullRequestReviewCommentLinks.prototype.clearPullRequest = function() {
  this.setPullRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentLinks.prototype.hasPullRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.github.PullRequestReviewComment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.PullRequestReviewComment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.PullRequestReviewComment.displayName = 'proto.github.PullRequestReviewComment';
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
proto.github.PullRequestReviewComment.prototype.toObject = function(opt_includeInstance) {
  return proto.github.PullRequestReviewComment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.PullRequestReviewComment} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.PullRequestReviewComment.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    diffHunk: jspb.Message.getFieldWithDefault(msg, 3, ""),
    path: jspb.Message.getFieldWithDefault(msg, 4, ""),
    position: jspb.Message.getFieldWithDefault(msg, 5, 0),
    originalPosition: jspb.Message.getFieldWithDefault(msg, 6, 0),
    commitId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    originalCommitId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    user: (f = msg.getUser()) && user_pb.User.toObject(includeInstance, f),
    body: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 12, ""),
    htmlUrl: jspb.Message.getFieldWithDefault(msg, 13, ""),
    pullRequestUrl: jspb.Message.getFieldWithDefault(msg, 14, ""),
    links: (f = msg.getLinks()) && proto.github.PullRequestReviewCommentLinks.toObject(includeInstance, f)
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
 * @return {!proto.github.PullRequestReviewComment}
 */
proto.github.PullRequestReviewComment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.PullRequestReviewComment;
  return proto.github.PullRequestReviewComment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.PullRequestReviewComment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.PullRequestReviewComment}
 */
proto.github.PullRequestReviewComment.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiffHunk(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOriginalPosition(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalCommitId(value);
      break;
    case 9:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlUrl(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPullRequestUrl(value);
      break;
    case 15:
      var value = new proto.github.PullRequestReviewCommentLinks;
      reader.readMessage(value,proto.github.PullRequestReviewCommentLinks.deserializeBinaryFromReader);
      msg.setLinks(value);
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
 * @param {!proto.github.PullRequestReviewComment} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewComment.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.PullRequestReviewComment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewComment.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getDiffHunk();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPath();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getOriginalPosition();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getCommitId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getOriginalCommitId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getUser();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = this.getBody();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = this.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = this.getHtmlUrl();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = this.getPullRequestUrl();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = this.getLinks();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.github.PullRequestReviewCommentLinks.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.github.PullRequestReviewComment.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.github.PullRequestReviewComment.prototype.setId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string diff_hunk = 3;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getDiffHunk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setDiffHunk = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string path = 4;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setPath = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 position = 5;
 * @return {number}
 */
proto.github.PullRequestReviewComment.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.github.PullRequestReviewComment.prototype.setPosition = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 original_position = 6;
 * @return {number}
 */
proto.github.PullRequestReviewComment.prototype.getOriginalPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.PullRequestReviewComment.prototype.setOriginalPosition = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string commit_id = 7;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setCommitId = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string original_commit_id = 8;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getOriginalCommitId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setOriginalCommitId = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional User user = 9;
 * @return {?proto.github.User}
 */
proto.github.PullRequestReviewComment.prototype.getUser = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 9));
};


/** @param {?proto.github.User|undefined} value */
proto.github.PullRequestReviewComment.prototype.setUser = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.PullRequestReviewComment.prototype.clearUser = function() {
  this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewComment.prototype.hasUser = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string body = 10;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setBody = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string created_at = 11;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setCreatedAt = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string updated_at = 12;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setUpdatedAt = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional string html_url = 13;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getHtmlUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setHtmlUrl = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional string pull_request_url = 14;
 * @return {string}
 */
proto.github.PullRequestReviewComment.prototype.getPullRequestUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewComment.prototype.setPullRequestUrl = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional PullRequestReviewCommentLinks _links = 15;
 * @return {?proto.github.PullRequestReviewCommentLinks}
 */
proto.github.PullRequestReviewComment.prototype.getLinks = function() {
  return /** @type{?proto.github.PullRequestReviewCommentLinks} */ (
    jspb.Message.getWrapperField(this, proto.github.PullRequestReviewCommentLinks, 15));
};


/** @param {?proto.github.PullRequestReviewCommentLinks|undefined} value */
proto.github.PullRequestReviewComment.prototype.setLinks = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.github.PullRequestReviewComment.prototype.clearLinks = function() {
  this.setLinks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewComment.prototype.hasLinks = function() {
  return jspb.Message.getField(this, 15) != null;
};



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
proto.github.PullRequestReviewCommentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.PullRequestReviewCommentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.PullRequestReviewCommentEvent.displayName = 'proto.github.PullRequestReviewCommentEvent';
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
proto.github.PullRequestReviewCommentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.github.PullRequestReviewCommentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.PullRequestReviewCommentEvent} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.PullRequestReviewCommentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, ""),
    comment: (f = msg.getComment()) && proto.github.PullRequestReviewComment.toObject(includeInstance, f),
    pullRequest: (f = msg.getPullRequest()) && pullrequest_pb.PullRequest.toObject(includeInstance, f),
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
 * @return {!proto.github.PullRequestReviewCommentEvent}
 */
proto.github.PullRequestReviewCommentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.PullRequestReviewCommentEvent;
  return proto.github.PullRequestReviewCommentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.PullRequestReviewCommentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.PullRequestReviewCommentEvent}
 */
proto.github.PullRequestReviewCommentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 2:
      var value = new proto.github.PullRequestReviewComment;
      reader.readMessage(value,proto.github.PullRequestReviewComment.deserializeBinaryFromReader);
      msg.setComment(value);
      break;
    case 3:
      var value = new pullrequest_pb.PullRequest;
      reader.readMessage(value,pullrequest_pb.PullRequest.deserializeBinaryFromReader);
      msg.setPullRequest(value);
      break;
    case 4:
      var value = new repository_pb.Repository;
      reader.readMessage(value,repository_pb.Repository.deserializeBinaryFromReader);
      msg.setRepository(value);
      break;
    case 5:
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
 * @param {!proto.github.PullRequestReviewCommentEvent} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentEvent.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.PullRequestReviewCommentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.PullRequestReviewCommentEvent.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAction();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getComment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.PullRequestReviewComment.serializeBinaryToWriter
    );
  }
  f = this.getPullRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      pullrequest_pb.PullRequest.serializeBinaryToWriter
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
      5,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string action = 1;
 * @return {string}
 */
proto.github.PullRequestReviewCommentEvent.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.PullRequestReviewCommentEvent.prototype.setAction = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional PullRequestReviewComment comment = 2;
 * @return {?proto.github.PullRequestReviewComment}
 */
proto.github.PullRequestReviewCommentEvent.prototype.getComment = function() {
  return /** @type{?proto.github.PullRequestReviewComment} */ (
    jspb.Message.getWrapperField(this, proto.github.PullRequestReviewComment, 2));
};


/** @param {?proto.github.PullRequestReviewComment|undefined} value */
proto.github.PullRequestReviewCommentEvent.prototype.setComment = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.PullRequestReviewCommentEvent.prototype.clearComment = function() {
  this.setComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentEvent.prototype.hasComment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PullRequest pull_request = 3;
 * @return {?proto.github.PullRequest}
 */
proto.github.PullRequestReviewCommentEvent.prototype.getPullRequest = function() {
  return /** @type{?proto.github.PullRequest} */ (
    jspb.Message.getWrapperField(this, pullrequest_pb.PullRequest, 3));
};


/** @param {?proto.github.PullRequest|undefined} value */
proto.github.PullRequestReviewCommentEvent.prototype.setPullRequest = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.PullRequestReviewCommentEvent.prototype.clearPullRequest = function() {
  this.setPullRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentEvent.prototype.hasPullRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Repository repository = 4;
 * @return {?proto.github.Repository}
 */
proto.github.PullRequestReviewCommentEvent.prototype.getRepository = function() {
  return /** @type{?proto.github.Repository} */ (
    jspb.Message.getWrapperField(this, repository_pb.Repository, 4));
};


/** @param {?proto.github.Repository|undefined} value */
proto.github.PullRequestReviewCommentEvent.prototype.setRepository = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.PullRequestReviewCommentEvent.prototype.clearRepository = function() {
  this.setRepository(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentEvent.prototype.hasRepository = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional User sender = 5;
 * @return {?proto.github.User}
 */
proto.github.PullRequestReviewCommentEvent.prototype.getSender = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 5));
};


/** @param {?proto.github.User|undefined} value */
proto.github.PullRequestReviewCommentEvent.prototype.setSender = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.PullRequestReviewCommentEvent.prototype.clearSender = function() {
  this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.PullRequestReviewCommentEvent.prototype.hasSender = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.github);
