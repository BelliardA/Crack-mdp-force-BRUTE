const calculateHash = str => {
    let hash = str
    .split("")
    .map((c, i) => str.charCodeAt(i))
    .map(c => c + 2)
    .map(c => String.fromCharCode(c))
    .join("");
    return B
}