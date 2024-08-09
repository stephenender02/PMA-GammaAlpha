let NUM_EXEC = 8;
let NUM_CATEGORIES = 4;

// Constants for fetching info from sheet
let SHEET_ID = "1fUK58S6qx6G4vm1xMcGLerUQtgk4auVGW5nGGwA6TCU";
let SHEET_TITLE = "Exex Directory";
let SHEET_RANGE = "A2:D9";
let FULL_URL = "https://docs.google.com/spreadsheets/d/" + SHEET_ID + "/gviz/tq?/sheet=" + SHEET_TITLE + "&range=" + SHEET_RANGE;

// Fetch info
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    // Clean up data and put into array
    var data = JSON.parse (rep.substr(47).slice(0, -2));
    var tableData = data.table.rows;
    // Create 2d array
    var execPersonas = new Array(NUM_EXEC);
    for (var i = 0; i < NUM_EXEC; i++) {
        execPersonas[i] = new Array(NUM_CATEGORIES);
    }
    // Fill 2d array
    for(var i = 0; i < NUM_EXEC; i++) {
        for (var j = 0; j < NUM_CATEGORIES; j++) {
            execPersonas[i][j] = tableData[i].c[j].v;
        }
    }
    // Display Personas
})
