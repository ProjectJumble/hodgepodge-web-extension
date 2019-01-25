"use strict";

const fs = require("fs-extra");
// const chalk = require("chalk");

const paths = require("../react-config/paths");

const NODE_ENV = process.env.NODE_ENV;
if (!NODE_ENV && (NODE_ENV != "development" || NODE_ENV != "production")) {
  throw new Error(
    "The NODE_ENV environment variable is required but was not specified."
  );
}

const PLATFORM = process.env.PLATFORM;
if (!PLATFORM && (PLATFORM != "chromium" || PLATFORM != "firefox")) {
  throw new Error(
    "The PLATFORM environment variable is required but was not specified."
  );
}

pack();

function pack() {
  console.log(`Cleaning contents of /package/${PLATFORM}...`);
  fs.emptyDirSync(`${paths.appPackage}/${PLATFORM}`);

  console.log(`Copying contents of /build to /package/${PLATFORM}...`);
  fs.copySync(paths.appBuild, `${paths.appPackage}/${PLATFORM}`, {
    dereference: true
    // filter: file => file !== paths.appHtml
  });

  console.log(
    `Copying contents of /configuration/${NODE_ENV} to /package/${PLATFORM}...`
  );
  fs.copySync(
    `${paths.appConfiguration}/${NODE_ENV}`,
    `${paths.appPackage}/${PLATFORM}`,
    {
      dereference: true
    }
  );

  console.log(
    `Copying contents of /platform/${PLATFORM} to /package/${PLATFORM}...`
  );
  fs.copySync(
    `${paths.appPlatform}/${PLATFORM}`,
    `${paths.appPackage}/${PLATFORM}`,
    {
      dereference: true
    }
  );
}
