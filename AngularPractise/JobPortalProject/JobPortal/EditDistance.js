/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//lavenshtein distance algorithm
var minDistance = function(word1, word2) {
    if(!word1.length || !word2.length){
        return word1.length || word2.length;
    }
    let row = word1.length;
    let col = word2.length;
    let wordMatrix = new Array(row+1).fill().map(()=>new Array(col+1).fill(0));
    for(let i=0; i<= row ; i++)
        wordMatrix[i][0] = i;
    for(let j=0; j<= col ; j++)
        wordMatrix[0][j] = j;

    for(let i=1; i<row; i++){
        for(let j=1; j<col ; j++){
            if(word1[i-1] === word2[j-1]){
                wordMatrix[i][j] = wordMatrix[i-1][j-1];
            }
            else{
                wordMatrix[i][j] = Math.min(wordMatrix[i-1][j],wordMatrix[i-1][j-1],wordMatrix[i][j-1]) + 1;
            }
        }
    }
    return wordMatrix[row-1][col-1];

};