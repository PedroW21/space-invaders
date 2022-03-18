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
    var positionEnemyAxisY1 = parseInt(Math.random * 606);
    var positionEnemyAxisY2 = parseInt(Math.random * 606);
    var positionEnemyAxisY3 = parseInt(Math.random * 606);
    var positionEnemyAxisY4 = parseInt(Math.random * 606);
    var positionEnemyAxisY5 = parseInt(Math.random * 606);


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
        moveEnemy1(".enemy");
        moveEnemy2(".enemy2");
        moveEnemy3(".enemy3");
        moveEnemy4(".enemy4");
        moveEnemy5(".enemy5");
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

    function moveEnemy1(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY1);
            
            if (positionEnemyAxisX<=0) {
            positionEnemyAxisY1 = parseInt(Math.random() * 606);
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY1);
        }
    }   

    function moveEnemy2(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY2);
            
            if (positionEnemyAxisX<=0) {
            positionEnemyAxisY2 = parseInt(Math.random() * 606);
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY2);
        }
    }   

    function moveEnemy3(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY3);
            
            if (positionEnemyAxisX<=0) {
            positionEnemyAxisY3 = parseInt(Math.random() * 606);
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY3);
        }
    }   

    function moveEnemy4(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY4);
            
            if (positionEnemyAxisX<=0) {
            positionEnemyAxisY4 = parseInt(Math.random() * 606);
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY4);
        }
    }   

    function moveEnemy5(numberOfTheEnemy) {
        
        positionEnemyAxisX = parseInt($(numberOfTheEnemy).css("left"));
        $(numberOfTheEnemy).css("left",positionEnemyAxisX-speedEnemyType1);
        $(numberOfTheEnemy).css("top",positionEnemyAxisY5);
            
            if (positionEnemyAxisX<=0) {
            positionEnemyAxisY5 = parseInt(Math.random() * 606);
            $(numberOfTheEnemy).css("left",694);
            $(numberOfTheEnemy).css("top",positionEnemyAxisY5);
        }
    }   
}