module.exports = function camelcase(entry) {
    return entry.split('-').reduce(function (str, word) {
        return str + word[0].toUpperCase() + word.slice(1);
    });
}