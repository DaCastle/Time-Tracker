document.addEventListener("DOMContentLoaded", function() {
  var alertTime = getAlertTime();

  setInterval(function() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    alertTime = getAlertTime();

    if (hour === parseInt(getAlertTime()) && min === 0) {
      alert("its " + alertTime + " ! A good time to update your hours (:");
    }
  }, 60000);

  function getAlertTime() {
    try {
      chrome.storage.sync.get(["alertTime"], function(result) {
        return result.alertTime;
      });
    } catch (error) {
      return error;
    }
  }
});
