function characterReplacement(s, k) {
    let maxCount = 0;
let left = 0;
let maxLength = 0;
let count = new Array(26).fill(0); // To store frequency of each character

for (let right = 0; right < s.length; right++) {
   let index = s.charCodeAt(right) - 'A'.charCodeAt(0);
   count[index]++;
   maxCount = Math.max(maxCount, count[index]);

   // If the current window size minus the count of the most frequent character
   // is greater than k, shrink the window from the left
   if ((right - left + 1) - maxCount > k) {
       let leftIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
       count[leftIndex]--;
       left++;
   }

   // Update maxLength
   maxLength = Math.max(maxLength, right - left + 1);
}

return maxLength;
}