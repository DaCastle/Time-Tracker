document.addEventListener("DOMContentLoaded", function() {

    var saveButton = document.getElementById("save");
    var resetButton = document.getElementById("reset");
    var rows = Array.from(document.getElementsByClassName('row'));


    getAndSetData();



    saveButton.addEventListener('click', function() {
        saveData();
    });
    resetButton.addEventListener('click', function() {
        resetData();
    });



    function getAndSetData() {

        let data = [];
        try {
            chrome.storage.sync.get(['data'], function(result) {
                data = result.data;
                if (data !== undefined) {
                    let counter = 0;
                    rows.forEach(function(row) {
                        row = row.children;
                        row[1].value = data[counter].client;
                        row[3].value = data[counter].hours;
                        row[5].value = data[counter].notes;
                        counter++;
                    });
                }
            });
        }
        catch (error) {
            alert(error);
        }
    }


    var saveData = function() {

        let data = [];

        rows.forEach(function(row) {
            row = row.children;
            data.push({
                client: row[1].value,
                hours: row[3].value,
                notes: row[5].value
            });
        });

        chrome.storage.sync.set({ data: data }, function() { });
    }



    var resetData = function() {

        let data = [];

        rows.forEach(function(row) {
            row = row.children;
            data.push({
                client: "",
                hours: "",
                notes: ""
            });
        });

        chrome.storage.sync.set({ data: data }, function() {
            getAndSetData();
        });
    }

});
