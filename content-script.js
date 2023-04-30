if (!chrome.runtime.onMessage.hasListeners()) {
  window.chrome.runtime.onMessage.addListener(
    // chrome.runtime.onMessage.addListener(
    async function (msg, sender, response) {
      console.log(msg.command + " clicked");
      if (msg.command === "scan") {
        var allTxt = document.querySelector("body").innerText;
        console.log(allTxt);
        response({ msg: "command received" });
      }

      if (msg.command === "upload") {
        console.log("upload command received");
        var fileHandle;

        [fileHandle] = await window.showOpenFilePicker();
        const file = await fileHandle.getFile();
        var name = file.name;
        console.log(name);

        let reader = new FileReader();
        // //
        reader.onload = function (evt) {
          const file = evt.target.result;
          const lines = file.split(/\r\n|\n/);
          console.log(lines);
        };
        reader.onerror = function (evt) {
          alert(e.target.error.name);
        };

        reader.readAsText(file, "UTF-8");
        // reader.onload = (e) => {
        //   const file = e.target.result;

        //   // This is a regular expression to identify carriage
        //   // Returns and line breaks
        //   const lines = file.split(/\r\n|\n/);
        //   console.log(lines);
        // };
        // reader.onerror = (e) => alert(e.target.error.name);

        // reader.readAsText(file);
        response({ msg: "command received" });
      }
    }
  );
}
