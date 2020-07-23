function encodeBasic(username, password){
  return Buffer.from(`${username}:${password}`).toSting('base64');
}

module.exports = encodeBasic;