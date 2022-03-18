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

    game.pressKey = [];

    // Verifica se o usuario precionou alguma tecla

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
        }

        if(game.pressKey[KEYS.A]) {
            var toLeft = parseInt($(".player").css("left"));
            $(".player").css("left", toLeft-10);
        }

        if(game.pressKey[KEYS.S]) {
            var toTop = parseInt($(".player").css("top"));
            $(".player").css("top", toTop+10);
        }

        if(game.pressKey[KEYS.D]) {
            var toLeft = parseInt($(".player").css("left"));
            $(".player").css("left", toLeft+10);
        }

        if(game.pressKey[KEYS.SPACE]) {

        }
    }
}