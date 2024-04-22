const url = require("url");
const addres =
  "https://milda.escritorio.mildanoronhaadvogada.com/clients/information/65aa88182cf4893039638bde";

const parsedUrl = new url.URL(addres);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
