

function sortByHeight(a) {
    const sorted = []
    
    for (let n of a) {
        if (n >= 0) {
            sorted.push(n)
        }
    }
    
    sorted.sort((a, b) => a - b);
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            sorted.splice(i, 0, a[i]);
        }
    }
    
    return sorted;
}
