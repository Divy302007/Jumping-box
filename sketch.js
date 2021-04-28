    var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
    var movingSprite;
    var canvas;
    var music;
    var isTouching;

    function preload(){
        music = loadSound("music.mp3");
    }


    function setup(){
        canvas = createCanvas(800,600);

        //create 4 different surfaces

        movingSprite= createSprite(random(10,750),300,20,20);
        movingSprite.shapeColor= "white";
        movingSprite.velocityX= 3;
        movingSprite.velocityY= 3;

        fixSprite1= createSprite(100,590,180,20);
        fixSprite1.shapeColor= "red";

        fixSprite2= createSprite(300,590,180,20);
        fixSprite2.shapeColor= "green";

        fixSprite3= createSprite(500,590,180,20);
        fixSprite3.shapeColor= "blue";

        fixSprite4= createSprite(700,590,180,20);
        fixSprite4.shapeColor= "yellow";



        //create box sprite and give velocity

    }

    function draw() {
        background(rgb(10,10,10));
        //create edgeSprite

        if(movingSprite.x<0){
            music.stop()
            movingSprite.velocityX=3
        }else if(movingSprite.x>800){
            music.stop()
            movingSprite.velocityX=-3
        }

        if(fixSprite4.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite4)){
            music.play()
        movingSprite.shapeColor= "yellow";
        }

        else if(fixSprite3.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite3)){
        music.stop()
        movingSprite.shapeColor= "blue";
    
        }

        else if(fixSprite2.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite2)){
            music.stop()
            movingSprite.shapeColor= "green";
            movingSprite.velocityX=0;
            movingSprite.velocityY=0;
        }

     else if(fixSprite1.isTouching(movingSprite) && movingSprite.bounceOff(fixSprite1)){
         music.stop()
           movingSprite.shapeColor= "red";
      }

        if(movingSprite.y<0){
            music.stop()
            movingSprite.velocityY=3

        }
    


        drawSprites()



        //add condition to check if box touching surface and make it box
        console.log(movingSprite);
    }
