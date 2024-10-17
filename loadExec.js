let NUM_EXEC = 10;
let NUM_CATEGORIES = 4;

// Constants for fetching info from sheet
let SHEET_ID = "1fUK58S6qx6G4vm1xMcGLerUQtgk4auVGW5nGGwA6TCU";
let SHEET_TITLE = "ExecDirectory";
let SHEET_RANGE = "A2:D11";
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

    /* DISPLAY THE PERSONAS */
    for (var i = 0; i < NUM_EXEC; i++) {
        // Create persona div
        var execPersona = document.createElement('div');
        var execDir = document.getElementsByClassName("execDirectory")[0];
        execPersona.style.display = "flex";
        execPersona.style.flexDirection = "column";
        execPersona.style.alignItems = "center";
        execPersona.style.margin = "25px";
        execDir.appendChild(execPersona);

        // Add Picture
        var picture = execPersonas[i][1];
        var execPersonaPicture = document.createElement('img');
        execPersonaPicture.setAttribute("src", picture);
        execPersonaPicture.setAttribute("width", 300);
        execPersona.appendChild(execPersonaPicture);
        // Add Position
        var position = execPersonas[i][0];
        var execPersonaPosition = document.createElement('h1');
        execPersonaPosition.textContent = position;
        execPersonaPosition.style.color = "#a87a00";
        execPersonaPosition.style.fontFamily = "Priori Sans";
        if (position.length > 15) {
            execPersonaPosition.style.fontSize = "1.89rem"
        }
        execPersona.appendChild(execPersonaPosition);
        // Add Name
        var name = execPersonas[i][2];
        var execPersonaName = document.createElement('h3');
        execPersonaName.textContent = name;
        execPersonaName.style.color = "#b01c2e";
        execPersonaName.style.fontFamily = "Gill Sans";
        execPersona.appendChild(execPersonaName);
        // Add email
        var email = execPersonas[i][3];
        var execPersonaEmail = document.createElement('h3');
        execPersonaEmail.textContent = email;
        execPersonaEmail.style.color = "#b01c2e";
        execPersonaEmail.style.fontFamily = "Gill Sans";
        execPersona.appendChild(execPersonaEmail);
    }

})
