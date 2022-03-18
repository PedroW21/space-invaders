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

    // Game Loop
    game.timer = setInterval(loop, 30); //Temporizador para execução da função novamente (mili seg)

    function loop () {
        moveBackground();
    }

    // Fim do loop

    function moveBackground() {
        moveToLeft = parseInt($(".bg-game").css("background-position"));
        $(".bg-game").css("background-position", moveToLeft-1);
    }
}