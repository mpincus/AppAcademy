module.exports = function findAndReplace(str,find,replace){
    return str.split(find).join(replace);
}