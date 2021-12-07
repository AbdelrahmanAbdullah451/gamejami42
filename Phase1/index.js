
var config = {
    type: Phaser.AUTO,
    width: 1530,
    height: 710,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 400},
            debug: false
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
var input , line , player, platforms;
var keyA , keyW  , keyD;
function preload ()
{
    this.load.image('rightBG', 'assests/bg1.jpg');
    this.load.image('leftBG', 'assests/bg2.png');
    this.load.image('line', 'assests/line.png');
    this.load.image('platform', "assests/platform.png");
    this.load.spritesheet('dude', "assests/dude.png", {frameWidth: 32, frameHeight: 48})

}
function create ()
{
    this.add.image(380,355 , 'rightBG').setScale(1.04,1);
    this.add.image(1145,355 , 'leftBG');
    this.add.image(764,350 , 'line');

    platforms = this.physics.add.staticGroup();
    line = this.physics.add.staticGroup();
    line.create(764,584, 'line').setScale(1,2).refreshBody();
    //line = this.physics.add.sprite(764, 355, 'line');
    //line.setBounce(0.5);
    //line.setCollideWorldBounds(true);
    // this.physics.add.collider(player, platforms);

    player1 = this.physics.add.sprite(380,600,'dude')
    player1.setCollideWorldBounds(true)
    player1.setBounce(0.1)
    player2 = this.physics.add.sprite(1145,600,'dude')
    player2.setCollideWorldBounds(true)
    player2.setBounce(0.1)


    
    platforms.create(400,710-16, 'platform').setScale(6,1).refreshBody();
    this.physics.add.collider(player1,line)
    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(player2,line)
    this.physics.add.collider(player2, platforms);


    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    input = this.input.keyboard.createCursorKeys();

}

function update ()
{
    if (input.left.isDown)
    {
        player2.setVelocityX(-200);
    
    }else if (input.right.isDown)
    {
        player2.setVelocityX(200);
    
    }else if (input.up.isDown && player2.body.touching.down)
    {
        player2.setVelocityY(-200);
    }else
    {
        player2.setVelocityX(0);
    
    }



     if (keyA.isDown)
    {
        player1.setVelocityX(-200);
    }else if (keyD.isDown)
    {
        player1.setVelocityX(200);
    }else if (keyW.isDown && player1.body.touching.down)
    {
        player1.setVelocityY(-200);
    }else
    {
        player1.setVelocityX(0);
    
    }
    
    

}