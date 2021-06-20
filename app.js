function welcom(){
    let name = prompt ('what\'s your Name');

    alert ("welcome to our site" + " " + name );
console.log('what\'s your Name')
console.log(name);
};

welcom();
function favoriteTeam(){
    let team = prompt ('what\'s your favorite team');

    alert(team + ' ' + 'is great team');
    console.log('what\'s your favorite team')
    console.log(team);
};

favoriteTeam();

function sport(){
    let player = prompt('guess who is our website player today?')
    const websitePlayer = 'mbape'
    if (player == websitePlayer){
        alert('great guess')
    }
    else{
        alert('wrong guess its' + ' ' + websitePlayer)
    };

    console.log('guess who is our website player today?');
    console.log(player);

};
sport();

function rateOurSite(){

    Rate = prompt('pleas rate our site')
   
    
   
   for (let a= 0; a < Rate;){
   
    document .write(' <img src="https://media.istockphoto.com/photos/golden-star-award-for-game-isolated-on-white-background-star-star-3d-picture-id1173610414"width="30"height="30"/>' )
   ++a
   }
   console.log('pleas rate our site')
   }
   
   rateOurSite()

