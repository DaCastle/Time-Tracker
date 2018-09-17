document.addEventListener("DOMContentLoaded", function() {
  var alertTime = "";

  setInterval(function() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();

    try {
      chrome.storage.sync.get(["alertTime"], function(result) {
        alertTime = parseInt(result.alertTime);
        if (hour === alertTime && min === 0) {
          alert(
            "it's " + alertTime + ":00! A good time to update your hours (:"
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, 60000);
});
