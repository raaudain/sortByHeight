// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

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
