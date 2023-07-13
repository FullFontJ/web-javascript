function generarPassword(){
    var pass = document.getElementById('password');
    var caracteres = "0123456789qwertyuiopasdfghjklñzxcvbnmQWERTYUIOP";
    var tamanioPass = 12;
    var password = "";

    for(var i = 0; i<= tamanioPass; i++){
        var random = Math.floor(Math.random() * caracteres.length);
        password += caracteres.substring(random, random+1);
    }

    pass.value = password
}


function copiarPassword(){
    var passwordCopiar = document.getElementById('password');
    
    if(!passwordCopiar.value){
        alert('Por favor genere el password');
        return;
    }
    passwordCopiar.select();
    document.execCommand("copy");
}