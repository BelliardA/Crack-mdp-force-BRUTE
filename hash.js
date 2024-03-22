const calculateHash = str => {
    let hash = str
    .split("")
    .map((c, i) => str.charCodeAt(i))
    .map(c => c + 2)
    .map(c => String.fromCharCode(c))
    .join("");
    return buffer.Buffer.from(hash).toString("base64");
};
function crackDeBase(){
    // Cracker le mot de passe
    //création d'une table alphabet avec les lettres de l'alphabet
    const alphabet = [];
    for (let i = 97; i <= 122; i++) {
        alphabet.push(String.fromCharCode(i));
    }
    //plusieurs boucles for imbriqué pour parcourir toutes les combinaisons possibles
    //4 boucles car il y a 4 lettres dans le mot de passe
    for(let a = 0; a < alphabet.length; a++){
        for(let b = 0; b < alphabet.length; b++){
            for(let c = 0; c < alphabet.length; c++){
                for(let d = 0; d < alphabet.length; d++){
                    let pwd = alphabet[a] + alphabet[b] + alphabet[c] + alphabet[d];
                    if(calculateHash(pwd) == "cnFrbg=="){
                        console.log(" le mot hasher est : " + pwd);
                        return;
                    }
                }
            }
        }
    }
}
//ce code n'est pas optimiser car si le mdp est plus grand il faudra rajouter des boucles for

crackDeBase();
