'use strict';
// Import
const request = require('superagent');
const fs = require('fs');
const decom = require("decompress");
// TODO: change to where your zip file is located
const repoName = 'node-zip-download-sample';
const href = `https://firebasestorage.googleapis.com/v0/b/flowmo-ums.appspot.com/o/epbHKK6mVoSjRagO07v9l41UoBk2%2Fzip_files%2F1669547069493suchiepbHKK6mVoSjRagO07v9l41UoBk2.f.m.o.suchi.flowmoapp.com.zip?alt=media&token=ba11eb37-9117-423f-b3d7-8944a666dbe9`;
const zipFile = '1669547069493suchiepbHKK6mVoSjRagO07v9l41UoBk2.f.m.o.suchi.flowmoapp.com.zip';

const source = `${href}`;

// TODO: change to the directory instead of the zip that you want to extract
const extractEntryTo = `${repoName}-master/`;

// TODO: change to the directory where you want to extract to
const outputDir = `./${repoName}-master/`;

request
  .get(source)
  .on('error', function(error) {
    console.log(error);
  })
  .pipe(fs.createWriteStream(zipFile))
  .on('finish', function() {
      decom(zipFile, "./")
        .then((files) => {
            fs.unlinkSync("./"+zipFile);
        })
  });
;