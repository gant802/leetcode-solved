function minWindow(s, t) {
    if (!s || !t || s.length < t.length) return "";

    let need = {};
    let window = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    let left = 0, right = 0;
    let required = Object.keys(need).length;
    let formed = 0;
    let minLength = Infinity, minLeft = 0;
    
    while (right < s.length) {
        let char = s[right];
        window[char] = (window[char] || 0) + 1;
        
        if (need[char] && window[char] === need[char]) {
            formed++;
        }
        
        while (left <= right && formed === required) {
            char = s[left];
            
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }
            
            window[char]--;
            if (need[char] && window[char] < need[char]) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}