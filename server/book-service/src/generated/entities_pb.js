/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.bev.bookstore.v1.Author', null, global);
goog.exportSymbol('proto.bev.bookstore.v1.Book', null, global);
goog.exportSymbol('proto.bev.bookstore.v1.Genre', null, global);

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
proto.bev.bookstore.v1.Book = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bev.bookstore.v1.Book.repeatedFields_, proto.bev.bookstore.v1.Book.oneofGroups_);
};
goog.inherits(proto.bev.bookstore.v1.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.Book.displayName = 'proto.bev.bookstore.v1.Book';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bev.bookstore.v1.Book.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.bev.bookstore.v1.Book.oneofGroups_ = [[7]];

/**
 * @enum {number}
 */
proto.bev.bookstore.v1.Book.PriceOneofCase = {
  PRICE_ONEOF_NOT_SET: 0,
  PRICE: 7
};

/**
 * @return {proto.bev.bookstore.v1.Book.PriceOneofCase}
 */
proto.bev.bookstore.v1.Book.prototype.getPriceOneofCase = function() {
  return /** @type {proto.bev.bookstore.v1.Book.PriceOneofCase} */(jspb.Message.computeOneofCase(this, proto.bev.bookstore.v1.Book.oneofGroups_[0]));
};



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
proto.bev.bookstore.v1.Book.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.Book.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.Book} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.Book.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorsList: jspb.Message.toObjectList(msg.getAuthorsList(),
    proto.bev.bookstore.v1.Author.toObject, includeInstance),
    title: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    genre: jspb.Message.getFieldWithDefault(msg, 5, 0),
    publishedAt: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.bev.bookstore.v1.Book}
 */
proto.bev.bookstore.v1.Book.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.Book;
  return proto.bev.bookstore.v1.Book.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.Book} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.Book}
 */
proto.bev.bookstore.v1.Book.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBookUid(value);
      break;
    case 2:
      var value = new proto.bev.bookstore.v1.Author;
      reader.readMessage(value,proto.bev.bookstore.v1.Author.deserializeBinaryFromReader);
      msg.addAuthors(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {!proto.bev.bookstore.v1.Genre} */ (reader.readEnum());
      msg.setGenre(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublishedAt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bev.bookstore.v1.Book.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.Book.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.Book} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.Book.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.bev.bookstore.v1.Author.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getGenre();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getPublishedAt();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional string book_uid = 1;
 * @return {string}
 */
proto.bev.bookstore.v1.Book.prototype.getBookUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Book.prototype.setBookUid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Author authors = 2;
 * @return {!Array<!proto.bev.bookstore.v1.Author>}
 */
proto.bev.bookstore.v1.Book.prototype.getAuthorsList = function() {
  return /** @type{!Array<!proto.bev.bookstore.v1.Author>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.bev.bookstore.v1.Author, 2));
};


/** @param {!Array<!proto.bev.bookstore.v1.Author>} value */
proto.bev.bookstore.v1.Book.prototype.setAuthorsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.bev.bookstore.v1.Author=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bev.bookstore.v1.Author}
 */
proto.bev.bookstore.v1.Book.prototype.addAuthors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.bev.bookstore.v1.Author, opt_index);
};


proto.bev.bookstore.v1.Book.prototype.clearAuthorsList = function() {
  this.setAuthorsList([]);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.bev.bookstore.v1.Book.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Book.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.bev.bookstore.v1.Book.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Book.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Genre genre = 5;
 * @return {!proto.bev.bookstore.v1.Genre}
 */
proto.bev.bookstore.v1.Book.prototype.getGenre = function() {
  return /** @type {!proto.bev.bookstore.v1.Genre} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.bev.bookstore.v1.Genre} value */
proto.bev.bookstore.v1.Book.prototype.setGenre = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string published_at = 6;
 * @return {string}
 */
proto.bev.bookstore.v1.Book.prototype.getPublishedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Book.prototype.setPublishedAt = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 price = 7;
 * @return {number}
 */
proto.bev.bookstore.v1.Book.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.bev.bookstore.v1.Book.prototype.setPrice = function(value) {
  jspb.Message.setOneofField(this, 7, proto.bev.bookstore.v1.Book.oneofGroups_[0], value);
};


proto.bev.bookstore.v1.Book.prototype.clearPrice = function() {
  jspb.Message.setOneofField(this, 7, proto.bev.bookstore.v1.Book.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.bev.bookstore.v1.Book.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.bev.bookstore.v1.Author = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bev.bookstore.v1.Author, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.Author.displayName = 'proto.bev.bookstore.v1.Author';
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
proto.bev.bookstore.v1.Author.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.Author.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.Author} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.Author.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorUid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    birthdate: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.bev.bookstore.v1.Author}
 */
proto.bev.bookstore.v1.Author.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.Author;
  return proto.bev.bookstore.v1.Author.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.Author} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.Author}
 */
proto.bev.bookstore.v1.Author.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorUid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.bev.bookstore.v1.Author.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.Author.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.Author} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.Author.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string author_uid = 1;
 * @return {string}
 */
proto.bev.bookstore.v1.Author.prototype.getAuthorUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Author.prototype.setAuthorUid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.bev.bookstore.v1.Author.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Author.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string birthdate = 3;
 * @return {string}
 */
proto.bev.bookstore.v1.Author.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.Author.prototype.setBirthdate = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.bev.bookstore.v1.Genre = {
  GENRE_INVALID: 0,
  GENRE_UNSPECIFIED: 1,
  GENRE_NOVEL: 2,
  GENRE_THRILLER: 3,
  GENRE_COMEDY: 4
};

goog.object.extend(exports, proto.bev.bookstore.v1);
