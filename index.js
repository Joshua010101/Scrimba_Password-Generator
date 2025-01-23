function passwordGenerate() {
    let char = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g"];
    let passwordGenerated = "";

        for (let i = 0; i < 8; i++) {
            let randomNum = Math.floor(Math.random() * char.length);
            passwordGenerated += char[randomNum];
        } 
        document.getElementById("password").value = passwordGenerated;
    }

function generate() {
    passwordGenerate();
    
}