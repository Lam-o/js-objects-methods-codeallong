const cat = {
    name : "Fred",
    nickname : "Flooficus",
    age : 5,
    isSleeping : true,
    favoriteToys : ["spring","ping pong balls","bird stuffy"],
    pet : function() {
        return "purrrrrrr";
    }
},
//in vs code it says type annotations can only be used in typescript files ??

play: function() {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing !`;
};

console.log(cat.play());



//cat.play = function() {
    //this.isSleeping = false;
    //return `${this.nickname} is awake and playing !`;
//};

//console.log(cat.play());


//cat.isSleeping = false;
//cat["color"] = "orange";

//console.log(cat);
//console.log(cat.nickname);
//console.log(cat.favoriteToys[2]);
//console.log(cat["name"]);













