export const loadJSON = (path, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            } else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

export const loadPattern = (pattern) => {
    let returnArray = []
    let selectedPattern = pattern.split("\n");
    for(let rowNum = 0; rowNum < selectedPattern.length - 1; rowNum++){
        let colArray = selectedPattern[rowNum].split("");
        returnArray[rowNum] = [];
        for(let colNum = 0; colNum < colArray.length; colNum++){
            returnArray[rowNum][colNum] = colArray[colNum] == 'O';
        }
    }
    return returnArray;
}
