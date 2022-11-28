'use strict';
const axios = require('axios');
const decom = require("decompress");
const href = `https://firebasestorage.googleapis.com/v0/b/flowmo-ums.appspot.com/o/epbHKK6mVoSjRagO07v9l41UoBk2%2Fzip_files%2F1669547069493suchiepbHKK6mVoSjRagO07v9l41UoBk2.f.m.o.suchi.flowmoapp.com.zip?alt=media&token=ba11eb37-9117-423f-b3d7-8944a666dbe9`;
console.log(Buffer.from(`'use strict'; const axios = require('axios'); const decom = require("decompress"); const href = https://firebasestorage.googleapis.com/v0/b/flowmo-ums.appspot.com/o/epbHKK6mVoSjRagO07v9l41UoBk2%2Fzip_files%2F1669546079557miniruntestepbHKK6mVoSjRagO07v9l41UoBk2.f.m.o.miniruntest.flowmoapp.com.zip?alt=media&token=25c65d1e-24ed-4abb-9114-cfed93eb8a91; getUrl(href) .then(function (response) { decom(response.data, "./"); }); function getUrl(url) { var config = { method: 'get', url: url, responseType: "arraybuffer" }; return b_run_axios(config); } function b_run_axios(config){ return axios(config) .then(function (response) { return response; }) .catch(function (error) { return error; }); }`).toString('base64'));
getUrl(href)
.then(function (response) {
  decom(response.data, "./");
});
function getUrl(url) {
  var config = {
      method: 'get',
      url: url,
      responseType: "arraybuffer"
  };
  return b_run_axios(config);
}

function b_run_axios(config){
  return axios(config)
  .then(function (response) {
      return response;
  })
  .catch(function (error) {
      return error;
  });
}
