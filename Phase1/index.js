
var windowWidth = 1530
var windowHeight = 710

var player2XSpeed  = 400;
var player1XSpeed = 400;
var player1Jump = 900;
var player2Jump = 900;

var config = {
    type: Phaser.AUTO,
    width: windowWidth,
    height: windowHeight,
    physics: {
        default: 'arcade',
        arcade:{
            gravity: {y: 1500},
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

var taskArr = [];
var platformPositionY = [ 400 , 200  ,0 , -150 , -315 , -500 , - 700 ]
var platformPositionX = [ 100 , 450  ,100 , 400 , 300 , 150 , 600 ]

var temp2;

function preload ()
{
    this.load.image('rightBG', 'assests/bg1.png');
    this.load.image('leftBG', 'assests/bg2.png');
    this.load.image('line', 'assests/line.png');
    this.load.image('task1' , 'assests/monster.png')
    this.load.image('task2' , 'assests/planet.png');
    this.load.image('platform', "assests/Artboard_1.png");
    this.load.spritesheet('dude', "assests/Asset_1.png", {frameWidth: 134, frameHeight: 334})
    

}
function create ()
{
    // this.add.image(380,355 , 'rightBG').setScale(1.04,1);
    // this.add.image(1145,355 , 'leftBG');
    tileSprite1 = this.add.tileSprite(0,0, 1530 , 1420, 'leftBG');
    tileSprite2= this.add.tileSprite(1145,0, 764 , 1420, 'rightBG');




    this.add.image(764,350 , 'line');

    ground = this.physics.add.staticGroup();
    platforms = this.physics.add.group({
        allowGravity: false,
        immovable: true,
    });
    tasks = this.physics.add.group(
        {
            allowGravity: false
        }
    );   
    line = this.physics.add.staticGroup();
    line.create(764,584, 'line').setScale(1,2).refreshBody();
    //line = this.physics.add.sprite(764, 355, 'line');
    //line.setBounce(0.5);
    //line.setCollideWorldBounds(true);
    // this.physics.add.collider(player, platforms);

    player1 = this.physics.add.sprite(380,600,'dude').setScale(0.4)
    player1.setCollideWorldBounds(true) 
    player2 = this.physics.add.sprite(1145,600,'dude').setScale(0.4)
    player2.setCollideWorldBounds(true)


    
    ground.create(400,710, 'platform').setScale(6,0.1).refreshBody();
    platforms.create(400,710-16, 'platform').setScale(6,1).refreshBody();




    platforms.create(platformPositionX[0],platformPositionY[0], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[1],platformPositionY[1], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[2],platformPositionY[2], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[3],platformPositionY[3], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[4],platformPositionY[4], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[5],platformPositionY[5], 'platform').setScale(0.5,0.5).refreshBody();
    platforms.create(platformPositionX[6],platformPositionY[6], 'platform').setScale(0.5,0.5).refreshBody();
    

    
    // taskArr[0] = tasks.create(90 , 300 , 'task1').setScale(0.4).refreshBody();
    // taskArr[1] = tasks.create(450 , 100 , 'task2').setScale(0.4).refreshBody();
    taskArr[0] = tasks.create(platformPositionX[0]- 50, platformPositionY[0] - 50, 'task1').setScale(0.4).refreshBody()
    taskArr[1] = tasks.create(platformPositionX[1]- 20, platformPositionY[1] - 50, 'task2').setScale(0.4).refreshBody()
    taskArr[2] = tasks.create(platformPositionX[2]+ 50, platformPositionY[2] - 50, 'task2').setScale(0.4).refreshBody()
    taskArr[3] = tasks.create(platformPositionX[3]- 50, platformPositionY[3] - 50, 'task1').setScale(0.4).refreshBody()
    taskArr[4] = tasks.create(platformPositionX[4]- 50, platformPositionY[4] - 50, 'task2').setScale(0.4).refreshBody()
    taskArr[5] = tasks.create(platformPositionX[5]- 50, platformPositionY[5] - 50, 'task1').setScale(0.4).refreshBody()
    taskArr[6] = tasks.create(platformPositionX[6]- 50, platformPositionY[6] - 50, 'task1').setScale(0.4).refreshBody()

    console.log(taskArr[0] + "----" + taskArr[1])
 



    this.physics.add.collider(player1,line)
    this.physics.add.collider(player1, platforms);
    this.physics.add.collider(player2,line)
    this.physics.add.collider(player2, platforms);
    this.physics.add.collider(platforms,tasks);
    this.physics.add.collider(player1,ground);
    this.physics.add.collider(player2,ground);
    this.physics.add.collider(player2, tasks);
    
    
    this.physics.add.overlap(player1,tasks , playerOneTaskOverlap); 


    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);    


    input = this.input.keyboard.createCursorKeys();

}
var temp = true;
function update ()
{
    if(!player1.body.touching.down){
        
        Phaser.Actions.IncY(tasks.getChildren(), 3)
        
        Phaser.Actions.IncY(platforms.getChildren(), 3)
    }


    if(tileSprite1.y < windowHeight){
        tileSprite1.y += 0
    }else{
        tileSprite1 .y = 0;
    }

    if(tileSprite2.y < windowHeight){
        tileSprite2.y += 0
    }else{
        tileSprite2 .y = 0;
    }


    if (input.left.isDown)
    {
        player2.setVelocityX(-player2XSpeed);
    
    }else if (input.right.isDown)
    {
        player2.setVelocityX(player2XSpeed);
    
    }else
    {
        player2.setVelocityX(0);
    
    }
    if (input.up.isDown && player2.body.touching.down)
    {
        player2.setVelocityY(- player2Jump);
        
    }

     if (keyA.isDown)
    {
        player1.setVelocityX(-player1XSpeed);
    }else if (keyD.isDown)
    {
        player1.setVelocityX(player1XSpeed);
            
    }else
    {
        player1.setVelocityX(0);
    
    }
     if (keyW.isDown && player1.body.touching.down)
    {
        player1.setVelocityY(- player1Jump);
    }
    
}



function playerOneTaskOverlap(player , task){
    
        var t = new Task();
        var isSolved = t.generateTask2();
        temp = false;
        task.disableBody(true,true)
        
    
}
//Phaser.Actions.IncX(enemies.getChildren(), 100);)