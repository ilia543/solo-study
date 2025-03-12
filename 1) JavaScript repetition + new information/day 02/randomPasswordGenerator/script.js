const randompasswordbutton = document.getElementById("randompasswordbutton");
let randompasswortptxt = document.getElementById("randompasswortptxt");


randompasswordbutton.onclick = function() {
    
    const length = 20;
    const includelowercase = true;
    const includeuppercase = true;
    const includenumbers = true;
    const includesymbols = true;


    const lowchars = "qwertyuioplkjhgfdsazxcvbnm";
    const upperchars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    const numbchars = "01234567890123456789";
    const symbolchars = "!@#$%^&*<,>.?/:;+-_)(=";


    let allowedChars = "";
    let password = ""; 


    allowedChars += includelowercase ? lowchars : ""; // თუ includelowercase = true მაშინ იგი დაემატება allowedChars ხოლო თუ არ უდრის მაშინ allowedChars დაემატება "" ანუ არაფერი. აქ : ნიშნავს ელსეს, ანუ როცა ფოლსია მაშინ რა უნდა მოხდეს
    allowedChars += includeuppercase ? upperchars : "";
    allowedChars += includenumbers ? numbchars : "";
    allowedChars += includesymbols ? symbolchars : "";

    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomindex];
    }

    randompasswortptxt.textContent = password;
};