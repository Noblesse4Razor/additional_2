module.exports = function flatten(array) {
    let recurArray = arr => arr.reduce((prev, cur) => Array.isArray(cur) ? prev.concat(recurArray(cur)) : prev.concat(cur), []);
    return Array.isArray(array) ? recurArray(array) : [];
}
