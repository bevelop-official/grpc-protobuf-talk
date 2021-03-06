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

var entities_pb = require('./entities_pb.js');
goog.object.extend(proto, entities_pb);
goog.exportSymbol('proto.bev.bookstore.v1.ListBooksByGenreRequest', null, global);
goog.exportSymbol('proto.bev.bookstore.v1.ListBooksByGenreResponse', null, global);
goog.exportSymbol('proto.bev.bookstore.v1.SearchBookRequest', null, global);
goog.exportSymbol('proto.bev.bookstore.v1.SearchBookResponse', null, global);

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
proto.bev.bookstore.v1.ListBooksByGenreRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bev.bookstore.v1.ListBooksByGenreRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.ListBooksByGenreRequest.displayName = 'proto.bev.bookstore.v1.ListBooksByGenreRequest';
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
proto.bev.bookstore.v1.ListBooksByGenreRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.ListBooksByGenreRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.ListBooksByGenreRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    genre: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.bev.bookstore.v1.ListBooksByGenreRequest}
 */
proto.bev.bookstore.v1.ListBooksByGenreRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.ListBooksByGenreRequest;
  return proto.bev.bookstore.v1.ListBooksByGenreRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.ListBooksByGenreRequest}
 */
proto.bev.bookstore.v1.ListBooksByGenreRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.bev.bookstore.v1.Genre} */ (reader.readEnum());
      msg.setGenre(value);
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
proto.bev.bookstore.v1.ListBooksByGenreRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.ListBooksByGenreRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.ListBooksByGenreRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenre();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional Genre genre = 1;
 * @return {!proto.bev.bookstore.v1.Genre}
 */
proto.bev.bookstore.v1.ListBooksByGenreRequest.prototype.getGenre = function() {
  return /** @type {!proto.bev.bookstore.v1.Genre} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.bev.bookstore.v1.Genre} value */
proto.bev.bookstore.v1.ListBooksByGenreRequest.prototype.setGenre = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
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
proto.bev.bookstore.v1.ListBooksByGenreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bev.bookstore.v1.ListBooksByGenreResponse.repeatedFields_, null);
};
goog.inherits(proto.bev.bookstore.v1.ListBooksByGenreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.ListBooksByGenreResponse.displayName = 'proto.bev.bookstore.v1.ListBooksByGenreResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.repeatedFields_ = [1];



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
proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.ListBooksByGenreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    booksList: jspb.Message.toObjectList(msg.getBooksList(),
    entities_pb.Book.toObject, includeInstance)
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
 * @return {!proto.bev.bookstore.v1.ListBooksByGenreResponse}
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.ListBooksByGenreResponse;
  return proto.bev.bookstore.v1.ListBooksByGenreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.ListBooksByGenreResponse}
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new entities_pb.Book;
      reader.readMessage(value,entities_pb.Book.deserializeBinaryFromReader);
      msg.addBooks(value);
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
proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.ListBooksByGenreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.ListBooksByGenreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBooksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      entities_pb.Book.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Book books = 1;
 * @return {!Array<!proto.bev.bookstore.v1.Book>}
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.getBooksList = function() {
  return /** @type{!Array<!proto.bev.bookstore.v1.Book>} */ (
    jspb.Message.getRepeatedWrapperField(this, entities_pb.Book, 1));
};


/** @param {!Array<!proto.bev.bookstore.v1.Book>} value */
proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.setBooksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bev.bookstore.v1.Book=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bev.bookstore.v1.Book}
 */
proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.addBooks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bev.bookstore.v1.Book, opt_index);
};


proto.bev.bookstore.v1.ListBooksByGenreResponse.prototype.clearBooksList = function() {
  this.setBooksList([]);
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
proto.bev.bookstore.v1.SearchBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.bev.bookstore.v1.SearchBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.SearchBookRequest.displayName = 'proto.bev.bookstore.v1.SearchBookRequest';
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
proto.bev.bookstore.v1.SearchBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.SearchBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.SearchBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.SearchBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.bev.bookstore.v1.SearchBookRequest}
 */
proto.bev.bookstore.v1.SearchBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.SearchBookRequest;
  return proto.bev.bookstore.v1.SearchBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.SearchBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.SearchBookRequest}
 */
proto.bev.bookstore.v1.SearchBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
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
proto.bev.bookstore.v1.SearchBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.SearchBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.SearchBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.SearchBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string query = 1;
 * @return {string}
 */
proto.bev.bookstore.v1.SearchBookRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.bev.bookstore.v1.SearchBookRequest.prototype.setQuery = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
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
proto.bev.bookstore.v1.SearchBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.bev.bookstore.v1.SearchBookResponse.repeatedFields_, null);
};
goog.inherits(proto.bev.bookstore.v1.SearchBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.bev.bookstore.v1.SearchBookResponse.displayName = 'proto.bev.bookstore.v1.SearchBookResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.bev.bookstore.v1.SearchBookResponse.repeatedFields_ = [1];



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
proto.bev.bookstore.v1.SearchBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.bev.bookstore.v1.SearchBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.bev.bookstore.v1.SearchBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.SearchBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    entities_pb.Book.toObject, includeInstance)
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
 * @return {!proto.bev.bookstore.v1.SearchBookResponse}
 */
proto.bev.bookstore.v1.SearchBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.bev.bookstore.v1.SearchBookResponse;
  return proto.bev.bookstore.v1.SearchBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.bev.bookstore.v1.SearchBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.bev.bookstore.v1.SearchBookResponse}
 */
proto.bev.bookstore.v1.SearchBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new entities_pb.Book;
      reader.readMessage(value,entities_pb.Book.deserializeBinaryFromReader);
      msg.addResults(value);
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
proto.bev.bookstore.v1.SearchBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.bev.bookstore.v1.SearchBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.bev.bookstore.v1.SearchBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.bev.bookstore.v1.SearchBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      entities_pb.Book.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Book results = 1;
 * @return {!Array<!proto.bev.bookstore.v1.Book>}
 */
proto.bev.bookstore.v1.SearchBookResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.bev.bookstore.v1.Book>} */ (
    jspb.Message.getRepeatedWrapperField(this, entities_pb.Book, 1));
};


/** @param {!Array<!proto.bev.bookstore.v1.Book>} value */
proto.bev.bookstore.v1.SearchBookResponse.prototype.setResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.bev.bookstore.v1.Book=} opt_value
 * @param {number=} opt_index
 * @return {!proto.bev.bookstore.v1.Book}
 */
proto.bev.bookstore.v1.SearchBookResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.bev.bookstore.v1.Book, opt_index);
};


proto.bev.bookstore.v1.SearchBookResponse.prototype.clearResultsList = function() {
  this.setResultsList([]);
};


goog.object.extend(exports, proto.bev.bookstore.v1);
