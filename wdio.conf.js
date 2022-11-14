exports.config = {
  port: 4723,
  specs: ["./test/specs/**/*.spec.js"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      platformName: "iOS",
      "appium:automationName": "XCuiTest",
      "appium:deviceName": "iPhone 13 Pro Max",
      "appium:platformVersion": "15.5",
      "appium:app": "./ios-apps/TestApp.app",
      "appium:udid": "D0BF7DA3-F7DD-4A74-8DF7-A400F5C997A4",
      "appium:fullReset": false,
      "appium:noReset": false,
      "appium:language": "en",
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "appium",
      {
        logPath: "./",
        args: {
          logLevel: "debug",
        },
      },
    ],
  ],
  framework: "mocha",
  reporters: [],
  mochaOpts: {
    ui: "bdd",
    timeout: 150000,
    retries: 1,
  },
};
