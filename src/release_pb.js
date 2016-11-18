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
goog.exportSymbol('proto.github.Asset', null, global);
goog.exportSymbol('proto.github.Release', null, global);

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
proto.github.Asset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.Asset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.Asset.displayName = 'proto.github.Asset';
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
proto.github.Asset.prototype.toObject = function(opt_includeInstance) {
  return proto.github.Asset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.Asset} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.Asset.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    browserDownloadUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    label: jspb.Message.getFieldWithDefault(msg, 5, ""),
    state: jspb.Message.getFieldWithDefault(msg, 6, ""),
    contentType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    size: jspb.Message.getFieldWithDefault(msg, 8, 0),
    downloadCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
    uploader: (f = msg.getUploader()) && user_pb.User.toObject(includeInstance, f)
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
 * @return {!proto.github.Asset}
 */
proto.github.Asset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.Asset;
  return proto.github.Asset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.Asset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.Asset}
 */
proto.github.Asset.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setBrowserDownloadUrl(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDownloadCount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 12:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setUploader(value);
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
 * @param {!proto.github.Asset} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Asset.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.Asset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Asset.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getBrowserDownloadUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getLabel();
  if (f.length > 0) {
    writer.writeString(
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
  f = this.getContentType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getSize();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = this.getDownloadCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = this.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = this.getUploader();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.Asset.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string browser_download_url = 2;
 * @return {string}
 */
proto.github.Asset.prototype.getBrowserDownloadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setBrowserDownloadUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.github.Asset.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.Asset.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.github.Asset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setName = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string label = 5;
 * @return {string}
 */
proto.github.Asset.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setLabel = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string state = 6;
 * @return {string}
 */
proto.github.Asset.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setState = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string content_type = 7;
 * @return {string}
 */
proto.github.Asset.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setContentType = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 size = 8;
 * @return {number}
 */
proto.github.Asset.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.Asset.prototype.setSize = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional int32 download_count = 9;
 * @return {number}
 */
proto.github.Asset.prototype.getDownloadCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.github.Asset.prototype.setDownloadCount = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string created_at = 10;
 * @return {string}
 */
proto.github.Asset.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setCreatedAt = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string updated_at = 11;
 * @return {string}
 */
proto.github.Asset.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.github.Asset.prototype.setUpdatedAt = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional User uploader = 12;
 * @return {?proto.github.User}
 */
proto.github.Asset.prototype.getUploader = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 12));
};


/** @param {?proto.github.User|undefined} value */
proto.github.Asset.prototype.setUploader = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.github.Asset.prototype.clearUploader = function() {
  this.setUploader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.Asset.prototype.hasUploader = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.github.Release = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.Release.repeatedFields_, null);
};
goog.inherits(proto.github.Release, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.Release.displayName = 'proto.github.Release';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.Release.repeatedFields_ = [17];



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
proto.github.Release.prototype.toObject = function(opt_includeInstance) {
  return proto.github.Release.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.Release} msg The msg instance to transform.
 * @return {!Object}
 */
proto.github.Release.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    htmlUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    assetsUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uploadUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tarballUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    zipballUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    id: jspb.Message.getFieldWithDefault(msg, 7, 0),
    tagName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    targetCommitish: jspb.Message.getFieldWithDefault(msg, 9, ""),
    name: jspb.Message.getFieldWithDefault(msg, 10, ""),
    body: jspb.Message.getFieldWithDefault(msg, 11, ""),
    draft: jspb.Message.getFieldWithDefault(msg, 12, false),
    prerelease: jspb.Message.getFieldWithDefault(msg, 13, false),
    createdAt: jspb.Message.getFieldWithDefault(msg, 14, ""),
    publishedAt: jspb.Message.getFieldWithDefault(msg, 15, ""),
    author: (f = msg.getAuthor()) && user_pb.User.toObject(includeInstance, f),
    assetsList: jspb.Message.toObjectList(msg.getAssetsList(),
    proto.github.Asset.toObject, includeInstance)
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
 * @return {!proto.github.Release}
 */
proto.github.Release.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.Release;
  return proto.github.Release.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.Release} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.Release}
 */
proto.github.Release.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAssetsUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUploadUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarballUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setZipballUrl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTagName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetCommitish(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDraft(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrerelease(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublishedAt(value);
      break;
    case 16:
      var value = new user_pb.User;
      reader.readMessage(value,user_pb.User.deserializeBinaryFromReader);
      msg.setAuthor(value);
      break;
    case 17:
      var value = new proto.github.Asset;
      reader.readMessage(value,proto.github.Asset.deserializeBinaryFromReader);
      msg.addAssets(value);
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
 * @param {!proto.github.Release} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Release.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.Release.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.github.Release.prototype.serializeBinaryToWriter = function (writer) {
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
  f = this.getAssetsUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getUploadUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getTarballUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getZipballUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = this.getTagName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getTargetCommitish();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getBody();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = this.getDraft();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = this.getPrerelease();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = this.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = this.getPublishedAt();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = this.getAuthor();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      user_pb.User.serializeBinaryToWriter
    );
  }
  f = this.getAssetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.github.Asset.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.Release.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string html_url = 2;
 * @return {string}
 */
proto.github.Release.prototype.getHtmlUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setHtmlUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string assets_url = 3;
 * @return {string}
 */
proto.github.Release.prototype.getAssetsUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setAssetsUrl = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string upload_url = 4;
 * @return {string}
 */
proto.github.Release.prototype.getUploadUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setUploadUrl = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string tarball_url = 5;
 * @return {string}
 */
proto.github.Release.prototype.getTarballUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setTarballUrl = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string zipball_url = 6;
 * @return {string}
 */
proto.github.Release.prototype.getZipballUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setZipballUrl = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional int32 id = 7;
 * @return {number}
 */
proto.github.Release.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.Release.prototype.setId = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string tag_name = 8;
 * @return {string}
 */
proto.github.Release.prototype.getTagName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setTagName = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string target_commitish = 9;
 * @return {string}
 */
proto.github.Release.prototype.getTargetCommitish = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setTargetCommitish = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.github.Release.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setName = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional string body = 11;
 * @return {string}
 */
proto.github.Release.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setBody = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional bool draft = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.Release.prototype.getDraft = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.github.Release.prototype.setDraft = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional bool prerelease = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.Release.prototype.getPrerelease = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.github.Release.prototype.setPrerelease = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional string created_at = 14;
 * @return {string}
 */
proto.github.Release.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setCreatedAt = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional string published_at = 15;
 * @return {string}
 */
proto.github.Release.prototype.getPublishedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/** @param {string} value */
proto.github.Release.prototype.setPublishedAt = function(value) {
  jspb.Message.setField(this, 15, value);
};


/**
 * optional User author = 16;
 * @return {?proto.github.User}
 */
proto.github.Release.prototype.getAuthor = function() {
  return /** @type{?proto.github.User} */ (
    jspb.Message.getWrapperField(this, user_pb.User, 16));
};


/** @param {?proto.github.User|undefined} value */
proto.github.Release.prototype.setAuthor = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


proto.github.Release.prototype.clearAuthor = function() {
  this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.Release.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated Asset assets = 17;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.github.Asset>}
 */
proto.github.Release.prototype.getAssetsList = function() {
  return /** @type{!Array.<!proto.github.Asset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.Asset, 17));
};


/** @param {!Array.<!proto.github.Asset>} value */
proto.github.Release.prototype.setAssetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.github.Asset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.Asset}
 */
proto.github.Release.prototype.addAssets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.github.Asset, opt_index);
};


proto.github.Release.prototype.clearAssetsList = function() {
  this.setAssetsList([]);
};


goog.object.extend(exports, proto.github);
