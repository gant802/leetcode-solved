var mergeAlternately = function(word1, word2) {
    let result = []
    let length = word1.length > word2.length ? word1.length : word2.length
    for (let i = 0; i < length; i++){
        if (word1){
          let moveLetter1 = word1[i]
            result.push(moveLetter1)  
        }
        if(word2){
            let moveLetter2 = word2[i]
            result.push(moveLetter2)
        }   
    }
    console.log(result.join(""))
    return result.join("")
};

