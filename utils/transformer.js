import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(encodeURIComponent(JSON.stringify(obj)));
};

export const decodeData = (base64) => JSON.parse(decodeURIComponent(decode(base64)));
};
