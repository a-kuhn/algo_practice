/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //could refactor by calling n/2 until !isBadVersion, then n++ until isBadVersion again
        //this refactor could result in far fewer api calls if # of versions is high and firstBadVersion happened early in product development
        while (isBadVersion(n-1)){
            n--;
        }
        return n;
    };
};