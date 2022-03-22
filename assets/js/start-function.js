function start() { // Sintaxe do jQuery
    $(".start").hide();
    $(".bg-game").append("<div class='placar placar-title'></div>");
    $(".bg-game").append("<div class='life'></div>");


    $(".bg-game").append("<div class='player'>"); //cria novas divs (append) e onde seria
    $(".bg-game").append("<div class='enemy animation-enemy'>");
    $(".bg-game").append("<div class='enemy2 animation-enemy'>");
    $(".bg-game").append("<div class='enemy3 animation-enemy'>");
    $(".bg-game").append("<div class='enemy4 animation-enemy'>");    
    $(".bg-game").append("<div class='enemy5 animation-enemy'>");
    $(".bg-game").append("<div class='enemy6 animation-enemy2'>");
    $(".bg-game").append("<div class='enemy7 animation-enemy2'>");
    $(".bg-game").append("<div class='enemy8 animation-enemy2'>");

    //Musicas do jogo

    var shotSound = document.getElementById("shotSound");
    var backgroundSound=document.getElementById("backgroundSound");
    var gameOverSound=document.getElementById("gameOverSound");

    //Música em loop
    backgroundSound.addEventListener("ended", function(){ backgroundSound.currentTime = 0; music.play(); }, false);
    backgroundSound.play();
    // Principais variáveis do jogo

    var game = {};

    var endGame = false;
    var points= 0;
    var actualLife = 50;

    // Player pode atirar no começo do jogo
    var canShot = true;

    // Definição das teclas de movimentação
    var KEYS = { //valores decimais das teclas, fonte: IBM
        W: 87,
        A: 65,
        S: 83,
        D: 68,
        SPACE: 32
    };

    // Velocidade dos inimos usados nas funções enemyType1 e 2
    var speedEnemyType1 = 3;
    var speedEnemyType2 = 5;

    // Função que gera a cada solicitação o valor randomico para o posicionamento no eixo Y dos inimigos
    function positionEnemyAxisY() {
       return parseInt(Math.random * 606);
    } 


    // Verifica se o usuario precionou alguma tecla

    game.pressKey = [];

    $(document).keydown(function(e){
        game.pressKey[e.which] = true; //se sim
    });

    $(document).keyup(function(e){
        game.pressKey[e.which] = false; // se nao
    });

    // Game Loop

    game.timer = setInterval(loop, 30); //Temporizador para execução da função novamente (mili seg)

    function loop () {
        moveBackground();
        movePlayer();
        
        moveEnemyType1(".enemy");
        moveEnemyType1(".enemy2");
        moveEnemyType1(".enemy3");
        moveEnemyType1(".enemy4");
        moveEnemyType1(".enemy5");
        moveEnemyType2(".enemy6");
        moveEnemyType2(".enemy7");
        moveEnemyType2(".enemy8");

        collisionDivsEnemy(".enemy");
        collisionDivsEnemy(".enemy2");
        collisionDivsEnemy(".enemy3");
        collisionDivsEnemy(".enemy4");
        collisionDivsEnemy(".enemy5");
        collisionDivsEnemy(".enemy6");
        collisionDivsEnemy(".enemy7");
        collisionDivsEnemy(".enemy8");

        placar();
        lifeCounter();

    }

    // Fim do loop

    // Move o background
    function moveBackground() {
        moveToLeft = parseInt($(".bg-game").css("background-position"));
        $(".bg-game").css("background-position", moveToLeft-1);
    }

    // Função para mover o jogador

    function movePlayer() {
        if(game.pressKey[KEYS.W]) {
            var toTop = parseInt($(".player").css("top"));
            $(".player").css("top", toTop-10);

            if(toTop <=0) {
                $(".player").css("top", toTop+10);
            }
        }

        if(game.pressKey[KEYS.A]) {
            var toLeft = parseInt($(".player").css("left"));
            $(".player").css("left", toLeft-10);

            if(toLeft <=0) {
                $(".player").css("left", toLeft+10);
            }
        }

        if(game.pressKey[KEYS.S]) {
            var toTop = parseInt($(".player").css("top"));
            $(".player").css("top", toTop+10);

            if(toTop >=570) {
                $(".player").css("top", toTop-10);
            }
        }

        if(game.pressKey[KEYS.D]) {
            var toLeft = parseInt($(".player").css("left"));
            $(".player").css("left", toLeft+10);
        }

        if(game.pressKey[KEYS.SPACE]) {
            doShot();
        }
    }

    // Função move inimigo tipo 1 (Andromalius)

    function moveEnemyType1(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY());
            
            if (positionEnemyAxisX<=0) {
                
            let positionEnemyAxisY = () => {
                return parseInt(Math.random() * 606);
            };
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY());
        }
    }   

    // Função move inimigo tipo 2 (Minion)

    function moveEnemyType2(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType2);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY());
            
            if (positionEnemyAxisX<=0) {
            
            let positionEnemyAxisY = () => {
                return parseInt(Math.random() * 606);
            }

            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY());
        }
    }   
    
    // Função para atirar

   function doShot() {
       
    if (canShot==true) {
            
            canShot=false;

            shotSound.play();
            
            toTop = parseInt($(".player").css("top"));
            
            positionPlayerAxisX= parseInt($(".player").css("left"));

            shotAxisX = positionPlayerAxisX + 190;

            topShot = toTop + 5;

            $(".bg-game").append("<div class='bullet'></div");
            $(".bullet").css("top",topShot);
            $(".bullet").css("left",shotAxisX);
            
            var timeShot=window.setInterval(inFactShot, 30);
    } // Fecha a canShot

    function inFactShot(){

        speedPlayerBullet = 35;

        positionPlayerAxisX = parseInt($(".bullet").css("left"));
        $(".bullet").css("left",positionPlayerAxisX + speedPlayerBullet); //altere o numero aqui para definir a velocidade do tiro

        if(positionPlayerAxisX > 900){ // somente apos o tiro percorrer todo o caminho e for deletado que o jogador podera atirar novamente
            window.clearInterval(timeShot);
            timeShot = null; // Para compatibilidade, alguns browsers exigem null
    
            $(".bullet").remove();
            canShot = true;

        }
    } // Fecha a tiro de fato

    
    } // Fecha a doShot


    // Função para detectar colisão de DIVs

    function collisionDivsEnemy(numberOfTheEnemy) {
        let collision = ($(".player").collision($(numberOfTheEnemy)));

        var bulletCollision = ($(".bullet").collision($(numberOfTheEnemy)));

        

        // jogador com inimigos

        if(collision.length > 0) {

            actualLife--;

            // Capturando a localização exata do inimigo
            var enemyAxisX = parseInt($(numberOfTheEnemy).css("top")); 
            var enemyAxisY = parseInt($(numberOfTheEnemy).css("left"));
            
            // Chama função para o Kabuuuuum!
            explosionWithPlayer(enemyAxisX, enemyAxisY);

            // Realoca o inimigo após a colisao
            newPositionEnemyAxisY = () => parseInt(Math.random() * 334);

            $(numberOfTheEnemy).css("left", 694);
            $(numberOfTheEnemy).css("top", newPositionEnemyAxisY());
        }

        // Tiro com inimgo

        if(bulletCollision.length > 0) {
            
            points = points + 1;
            speedEnemyType1 += 0.1;
            speedEnemyType2 += 0.1;

            speedPlayerBullet+= 1;
            
            $(".bullet").css("left", 1000)
            enemyAxisYBullet = parseInt($(numberOfTheEnemy).css("left"));
            enemyAxisXBullet = parseInt($(numberOfTheEnemy).css("top")); 

            newPositionEnemyAxisY = () => parseInt(Math.random() * 334);

            $(numberOfTheEnemy).css("left", 694);
            $(numberOfTheEnemy).css("top", newPositionEnemyAxisY());
        }
    }
     
    
    // Fim da função para detectar colisão

    // Função para execução da explosão
    
    function explosionWithPlayer(enemyAxisX,enemyAxisY) {

        $(".bg-game").append("<div class='explosion animation-explosion'></div");
        $(".explosion").css("background-image", "url(../assets/img/Explosion.png)");

        var div=$(".explosion");
        div.css("left", enemyAxisY);
        div.css("top", enemyAxisX);

        // div.animate({width:200, opacity:0}, "slow");
        
        var timeExplosion= window.setInterval(removeExplosion, 500); // tempo para remoção da explosão (tem que ser igual ao da animação)
        
            function removeExplosion() {
                
                div.remove();
                window.clearInterval(timeExplosion);
                timeExplosion=null;
                
            }
            
        }
         // Fim da função explosao1()

         function placar() {
	
            $(".placar").html("<h2 class='placar-title'> Pontos: " + points + "</h2>");
            
        } //fim da função placar()

        // Função para atualizar a vida do player

        function lifeCounter(){
            if(actualLife >= 3){
                $(".life").css("background-image", "url(../assets/img/energia3.png)");
            }
            else if(actualLife==2){
                $(".life").css("background-image", "url(../assets/img/energia2.png)");
            }
            else if(actualLife==1){
                $(".life").css("background-image", "url(../assets/img/energia1.png)");
            }
            else {
                $(".life").css("background-image", "url(../assets/img/energia0.png)");
                gameOver();
            }
        }

        function gameOver() {
            endGame=true;
            backgroundSound.pause();
            gameOverSound.play();
            
            window.clearInterval(game.timer);
            game.timer=null;
            
            $(".player").remove();
            $(".enemy").remove();
            $(".enemy2").remove();
            $(".enemy3").remove();
            $(".enemy4").remove();
            $(".enemy5").remove();
            $(".enemy6").remove();
            $(".enemy7").remove();
            $(".enemy8").remove();
            
            $(".bg-game").append("<div class='end'></div>");
            
            $(".end").html("<h1> Game Over </h1><p>Sua pontuação foi: " + points + "</p>" + "<div class='restart' onClick=reiniciaJogo()><h3 class='playAgain'>Jogar Novamente</h3></div>");
            } // Fim da função gameOver();

            //Reinicia o Jogo
}

        function reiniciaJogo() {
            gameOverSound.pause();
            $(".end").remove();
            start();
        
        } //Fim da função reiniciaJogo