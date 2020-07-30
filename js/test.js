function message(page) {
    var gree = ["1","2","3"];
    
    if(page == 1){
        i = 0;
    }
    
    else if(page == 2){
        i = 1;
    }
    
    else if(page == 3){
        i = 2;
    }
    
    alert(gree[i]+"年生のページへ移動します。");
}


function answer(number) {
    
    var message = "";
    
    if(number == 1) {
        message = "答え：アイソレーション";
    } else if (number == 2) {
        message = "答え：ランニングマン";
    } else if (number == 3) {
        message = "答え：トゥエル";
    } else if (number == 4) {
        message = "答え：バレエ";
    }
    
    alert(message);
}