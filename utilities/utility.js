function idGenerator(length=12){
    let randomId = "";
    let  chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let index = 0; index < length; index++) {
        randomId += chars.charAt(Math.floor(Math.random()*chars.length));        
    };
    return randomId;
}

module.exports= {
    idGenerator:idGenerator
}