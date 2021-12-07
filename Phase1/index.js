
var windowWidth = 1530
var windowHeight = 710


var config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 400},
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
var input , line , player, platforms , tasks;
var keyA , keyW  , keyD;
function preload ()
{
    this.load.image('rightBG', 'assests/p1.jpg');
    this.load.image('leftBG', 'assests/p2.jpg');
    this.load.image('line', 'assests/line.png');
    this.load.image('task' , 'assests/star.png')
    this.load.image('platform', "assests/platform.png");
    this.load.spritesheet('dude', "assests/Asset_1.png", {frameWidth: 134, frameHeight: 334})
    

}
function create ()
{
    // this.add.image(380,355 , 'rightBG').setScale(1.04,1);
    // this.add.image(1145,355 , 'leftBG');
    tileSprite1 = this.add.tileSprite(0,0, 1530 , 1420, 'leftBG');
    tileSprite2= this.add.tileSprite(1145,0, 764 , 1420, 'rightBG');




    this.add.image(764,350 , 'line');

    platforms = this.physics.add.staticGroup();
    tasks = this.physics.add.staticGroup();
    line = this.physics.add.staticGroup();
    line.create(764,584, 'line').setScale(1,2).refreshBody();
    //line = this.physics.add.sprite(764, 355, 'line');
    //line.setBounce(0.5);
    //line.setCollideWorldBounds(true);
    // this.physics.add.collider(player, platforms);

    player1 = this.physics.add.sprite(380,600,'dude').setScale(0.4)
    player1.setCollideWorldBounds(true)
    player1.setBounce(0.1)
    player2 = this.physics.add.sprite(1145,600,'dude').setScale(0.4)
    player2.setCollideWorldBounds(true)
    player2.setBounce(0.1)


    
    platforms.create(400,710-16, 'platform').setScale(6,1).refreshBody();
    platforms.create(400,400, 'platform').refreshBody();

    tasks.create(400 , 350 , 'task').refreshBody();






    this.physics.add.collider(player1,line)
    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(player2,line)
    this.physics.add.collider(player2, platforms);

    
    this.physics.add.collider(player1,tasks)
    this.physics.add.collider(player2, tasks);


    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    


    input = this.input.keyboard.createCursorKeys();

}

function update ()
{
    if(tileSprite1.y < windowHeight){
        tileSprite1.y += 3  
        console.log(tileSprite1.y)
    }else{
        tileSprite1 .y = 0;
    }

    if(tileSprite2.y < windowHeight){
        tileSprite2.y += 5 
        console.log(tileSprite2.y)
    }else{
        tileSprite2 .y = 0;
    }


    if (input.left.isDown)
    {
        player2.setVelocityX(-200);
    
    }else if (input.right.isDown)
    {
        player2.setVelocityX(200);
    
    }else
    {
        player2.setVelocityX(0);
    
    }
    if (input.up.isDown && player2.body.touching.down)
    {
        player2.setVelocityY(-300);
        
    
    }


     if (keyA.isDown)
    {
        player1.setVelocityX(-200);
    }else if (keyD.isDown)
    {
        player1.setVelocityX(200);
    }else
    {
        player1.setVelocityX(0);
    
    }
     if (keyW.isDown && player1.body.touching.down)
    {
        player1.setVelocityY(-500);
    }
    

}