describe("Test Suite Example", function () {
  before(async function () {
    await driver.startRecordingScreen();
  });

  after(async function () {
    await driver.saveRecordingScreen("video.mp4");
  });

  it("Test Example", async function () {
    console.log("test");
  });
});
