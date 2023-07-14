import { Base64 } from "js-base64";

export const encodeData = (data) => {
  return Base64.encodeURI(JSON.stringify(data));
};

export const decodeData = (encodedData) => {
  return JSON.parse(Base64.decode(encodedData));
};
