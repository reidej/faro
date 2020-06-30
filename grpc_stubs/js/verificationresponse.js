/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.VerificationResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.FaceRecord');

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
proto.VerificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.VerificationResponse.repeatedFields_, null);
};
goog.inherits(proto.VerificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VerificationResponse.displayName = 'proto.VerificationResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.VerificationResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.VerificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.VerificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VerificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VerificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    errorMessage: jspb.Message.getFieldWithDefault(msg, 5, ""),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    matchesList: jspb.Message.toObjectList(msg.getMatchesList(),
    proto.FaceRecord.toObject, includeInstance)
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
 * @return {!proto.VerificationResponse}
 */
proto.VerificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VerificationResponse;
  return proto.VerificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VerificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VerificationResponse}
 */
proto.VerificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setErrorCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
      break;
    case 3:
      var value = new proto.FaceRecord;
      reader.readMessage(value,proto.FaceRecord.deserializeBinaryFromReader);
      msg.addMatches(value);
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
proto.VerificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VerificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VerificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VerificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorCode();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMatchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.FaceRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 error_code = 4;
 * @return {number}
 */
proto.VerificationResponse.prototype.getErrorCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.VerificationResponse.prototype.setErrorCode = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string error_message = 5;
 * @return {string}
 */
proto.VerificationResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.VerificationResponse.prototype.setErrorMessage = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.VerificationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.VerificationResponse.prototype.setSuccess = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional float confidence = 2;
 * @return {number}
 */
proto.VerificationResponse.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.VerificationResponse.prototype.setConfidence = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated FaceRecord matches = 3;
 * @return {!Array<!proto.FaceRecord>}
 */
proto.VerificationResponse.prototype.getMatchesList = function() {
  return /** @type{!Array<!proto.FaceRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.FaceRecord, 3));
};


/** @param {!Array<!proto.FaceRecord>} value */
proto.VerificationResponse.prototype.setMatchesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.FaceRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.FaceRecord}
 */
proto.VerificationResponse.prototype.addMatches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.FaceRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.VerificationResponse.prototype.clearMatchesList = function() {
  this.setMatchesList([]);
};

