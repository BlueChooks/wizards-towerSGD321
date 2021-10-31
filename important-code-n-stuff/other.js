function emptyInv() {
    localStorage.setItem('inventory', '');
}

// =====----- level cleared -----===== //
function clearLevel(levelNum) {
    localStorage.setItem(`level-${levelNum}-clear`, 'true');
}

function checkLevelCleared(levelNum) {
    return JSON.parse(localStorage.getItem(`level-${levelNum}-clear`));
}

// =====----- plants -----===== //
function growPlant(plant) {
    localStorage.setItem(`plant-${plant}-clear`, 'true');
}

function checkPlantGrown(plant) {
    return JSON.parse(localStorage.getItem(`plant-${plant}-clear`));
}