document.querySelector(".scan").addEventListener("click", function () {
  console.log("scan clicked");
  sendScanCommand();
});

document.querySelector(".upload").addEventListener("click", function () {
  console.log("upload clicked");
  sendUploadCommand();
});

function sendScanCommand() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { command: "scan" }, (response) => {
      setTimeout(function () {
        if (response == null) {
          alert("Please refresh the page");
        } else {
          console.log(response);
        }
      }, 2000);
    });
  });
}

function sendUploadCommand() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { command: "upload" },
      async (response) => {
        const r = await response;
        if (r === null) {
          alert("Please refresh the page");
        } else {
          console.log(r);
        }
      }
    );
  });
}
