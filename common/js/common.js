    // 追従するヘッダーの処理
    //----------------------------------------------------------
    var $window = $(window), //ウィンドウを指定
        $content = $("#wrap"), //#content部分
        $chenge = $("#header02"), //#change部分
        topContent = $content.offset().top + 180; //#contentの位置を取得
    var sticky = false;
    var sticky_sp = false;
    var $chenge02 = $("#footer-sp01");
    var topContent02 = $content.offset().top + 30; //#contentの位置を取得

    $window.on("scroll", function() {
        //console.info($window.scrollTop());
        if ($window.scrollTop() > topContent) { //scroll位置が#contentの上にある場合
            if (sticky === false) {
                $chenge.animate({
                    marginTop: "0px"
                }, 200, 'linear'); //#change部分が上がる。
                sticky = true;
            }
        } else {
            if (sticky === true) { //scroll位置が下にある場合
                $chenge.animate({
                    marginTop: "-70px"
                }, 200, 'linear'); //#change部分が降りてくる。
                sticky = false;
            }
        }
        /*
         if ($window.scrollTop() > topContent02) {
         console.info('t');
         //$chenge02.animate({'bottom': 0}, 200, 'linear');
         if (sticky_sp === false) {
         $chenge02.animate({
         'bottom': 0
         }, 200, 'linear');
         sticky_sp = true;
         }
         } else {
         console.info('f');
         //$chenge02.animate({'bottom': '-100px'}, 200, 'linear');
         //if (sticky_sp === true) {
         $chenge02.animate({
         'bottom': "-100px"
         }, 200, 'linear');
         sticky_sp = false;
         //}
         }
         */
    });
    $window.trigger("scroll");


