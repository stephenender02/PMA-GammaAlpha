let NUM_BROTHERS = 40
let NUM_INFO = 5

// Constants for fetching info from sheet
let SHEET_ID_BRO = "1fUK58S6qx6G4vm1xMcGLerUQtgk4auVGW5nGGwA6TCU";
let SHEET_GID_BRO = "0";
let SHEET_RANGE_BRO = "A2:E41";
let FULL_URL_BRO = "https://docs.google.com/spreadsheets/d/" + SHEET_ID_BRO + "/gviz/tq?tqx=out:json&gid=" + SHEET_GID_BRO + "&range=" + SHEET_RANGE_BRO;


// Fetch info
fetch(FULL_URL_BRO)
.then(res => res.text())
.then(rep => {
    // Clean up data and put into array
    var data = JSON.parse (rep.substr(47).slice(0, -2));
    var tableData = data.table.rows;
    // Create 2d array
    var families = new Array(NUM_BROTHERS);
    for (var i = 0; i < NUM_BROTHERS; i++) {
        families[i] = new Array(NUM_INFO);
    }
    // Fill 2d array
    for(var i = 0; i < NUM_BROTHERS; i++) {
        for (var j = 0; j < NUM_INFO; j++) {
            families[i][j] = tableData[i].c[j] ? tableData[i].c[j].v : "";
        }
    }



/** <h2>Blue and Orange</h2>
            <h4>Maxwell Cooper</h4>
            <ul>
              <li>CLASS</li>
              <li>MAJOR</li>
              <li>INSTRUMENT</li>
            </ul> */

    let INDEX_BLUE_ORANGE = 0;
    let INDEX_IRISH = 7;
    let INDEX_GRAY_SKY = 12;
    let INDEX_JCU = 14;
    let INDEX_MAROON = 16;
    let INDEX_PUMPKIN = 23;
    let INDEX_RES = 31;
    let INDEX_TRIBLACK = 35;

    // BLUE AND ORANGE
    for(var i = INDEX_BLUE_ORANGE; i < INDEX_IRISH; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("blueOrangeBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // FIGHTING IRISH
    for(var i = INDEX_IRISH; i < INDEX_GRAY_SKY; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("irishBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // GRAY SKY
    for(var i = INDEX_GRAY_SKY; i < INDEX_JCU; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("graySkyBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // JCU GRIMES
    for(var i = INDEX_JCU; i < INDEX_MAROON; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("grimesBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // MAROON
    for(var i = INDEX_MAROON; i < INDEX_PUMPKIN; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("maroonBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // Pumpkin
    for(var i = INDEX_PUMPKIN; i < INDEX_RES; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("pumpkinBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // RES
    for(var i = INDEX_RES; i < INDEX_TRIBLACK; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("resBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

    // TRI BLACK
    for(var i = INDEX_TRIBLACK; i < 39; i++) {
        let name = families[i][1];
        let rushClass = families[i][2];
        let major = families[i][3];
        let instrument = families[i][4];

        var brotherName = document.createElement('h4');
        var familyBody = document.getElementsByClassName("triblackBody")[0];
        brotherName.textContent = name;
        brotherName.style.color = "white"
        familyBody.appendChild(brotherName);
    }

});