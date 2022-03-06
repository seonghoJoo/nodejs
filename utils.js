function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
    // key : value 형태
    capitalize : capitalize
}