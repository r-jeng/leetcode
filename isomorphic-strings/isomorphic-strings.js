/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var characterObject = {};
    var newSecondString = '';
    for (var i = 0; i < s.length; i++) {
        var firstStringChar = s[i];
        if (characterObject[firstStringChar] === undefined) {
            for (var key in characterObject) {
                if (characterObject[key] === t[i]) {
                    return false;
                }
            }
            characterObject[firstStringChar] = t[i];
        }
    }
    // console.log(characterObject)
    for (var j = 0; j < s.length; j++) {
        if (characterObject[s[j]]) {
            newSecondString += characterObject[s[j]];
        }
    }
    // console.log(newSecondString);
    if (newSecondString === t) {
        return true;
    } else {
        return false;
    }
};



   
   