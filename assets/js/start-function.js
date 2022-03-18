function start() { // Sintaxe do jQuery
    $(".start").hide();

    $(".bg-game").append("<div class='player'>"); //cria novas divs (append) e onde seria
    $(".bg-game").append("<div class='enemy animation-enemy'>");
    $(".bg-game").append("<div class='enemy2 animation-enemy'>");
    $(".bg-game").append("<div class='enemy3 animation-enemy'>");
    $(".bg-game").append("<div class='enemy4 animation-enemy'>");    
    $(".bg-game").append("<div class='enemy5 animation-enemy'>");
    $(".bg-game").append("<div class='enemy6 animation-enemy2'>");
    $(".bg-game").append("<div class='enemy7 animation-enemy2'>");
    $(".bg-game").append("<div class='enemy8 animation-enemy2'>");

    // Principais variáveis do jogo

    var game = {};

    var KEYS = { //valores decimais das teclas, fonte: IBM
        W: 87,
        A: 65,
        S: 83,
        D: 68,
        SPACE: 32
    };

    var speedEnemyType1 = 3;
    var speedEnemyType2 = 5;

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
  
}