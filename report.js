const newman = require("newman");

newman.run(
  {
    collection: 'https://api.postman.com/collections/29168453-5f0ae2a1-f886-4557-a195-880ab30fd9d2?access_key=PMAT-01H93JJ87VHKXST9ZDD098DJKX', // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
