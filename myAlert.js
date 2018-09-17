document.addEventListener("DOMContentLoaded", function() {
  var alertTime = document.getElementById("hours");
  var saveButton = document.getElementById("save");

  try {
    chrome.storage.sync.get(["alertTime"], function(result) {
      alertTime.value = result.alertTime;
    });
  } catch (error) {
    return error;
  }

  saveButton.addEventListener("click", function() {
    chrome.storage.sync.set({ alertTime: alertTime.value }, function() {});
  });
});
