function validateInput(elem, min, max) {
    const value = parseFloat(elem.value);
    if (!isNaN(value) && value >= min && value <= max) {
        return;
    } else {
        alert(`Por favor, ingresa un número entre ${min} y ${max}.`);
        elem.value = ""; 
    }
}
