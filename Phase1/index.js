
var config = {
    type: Phaser.AUTO,
    width: 1400,
    height: 700,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 0},
            debug: true
        }
    }
    ,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('rightBG', 'assests/bg1.jpg')
    this.load.image('leftBG', 'assests/bg2.png')
    
}
function create ()
{
    this.add.image(350,350 , 'rightBG');
    this.add.image(1050,350 , 'leftBG');
    
}

function update ()
{
    
}

