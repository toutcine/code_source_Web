var populaire = document.getElementById("populaire");
var url1 = "http://cinetout.herokuapp.com/cine/getAll";
ajaxGet(url1, function (reponse) {
    var articles = JSON.parse(reponse);
    for (var i = 0; i < 4; i++) {
        var paragraphe = document.createElement("p");
            paragraphe.innerHTML = "<div class='col-md-3'>"+
            "<div class='item'>"+
            "<div class='w3l-movie-gride-agile w3l-movie-gride-agile1'>"+
        "<a class='hvr-shutter-out-horizontal' href='single.jsp?id="+articles[i]["id"]+"'><img src='"+articles[i]["affiche"]+"' title='album-name' class='img-responsive' />"+
            "<div class='w3l-action-icon'><i class='fa fa-play-circle' aria-hidden='true'></i></div>"+
            "</a>"+
            "<div class='mid-1 agileits_w3layouts_mid_1_home'>"+
            "<div class='w3l-movie-text'>"+
            "<h6><a href='single.jsp?id="+articles[i]["id"]+"'>"+articles[i]["titre"]+
                "<br/><b>("+articles[i]["categorie"]+")</b> en <i>"+articles[i]["anneeDeSortie"]+"</i>"+"</a></h6>" +
                                 
            "</div>"+
            "<div class='mid-2 agile_mid_2_home'>"+
            "<div class='block-stars'>"+
            "<ul class='w3l-ratings'>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star-half-o' aria-hidden='true'></i></li>"+
            "</ul>"+
            "</div>"+
            "<div class='clearfix'></div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<br>"+
            "</div>";
            populaire.appendChild(paragraphe);
    }
});

function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var alaune = document.getElementById("alaune");
ajaxGet("http://cinetout.herokuapp.com/cine/getAll", function (reponse) {
    var articles = JSON.parse(reponse);
    var data_length = articles.length;
    var nb = entierAleatoire(0, data_length-1);
        for (var i = nb; i < nb+4; i++) {
            var paragraphe = document.createElement("p");
            paragraphe.innerHTML = "<div class='col-md-3'>"+
            "<div class='item'>"+
            "<div class='w3l-movie-gride-agile w3l-movie-gride-agile1'>"+
        "<a class='hvr-shutter-out-horizontal' href='single.jsp?id="+articles[i]["id"]+"'><img src='"+articles[i]["affiche"]+"' title='album-name' class='img-responsive'/>"+
            "<div class='w3l-action-icon'><i class='fa fa-play-circle' aria-hidden='true'></i></div>"+
            "</a>"+
            "<div class='mid-1 agileits_w3layouts_mid_1_home'>"+
            "<div class='w3l-movie-text'>"+
            "<h6><a href='single.jsp?id="+articles[i]["id"]+"'>"+articles[i]["titre"]+
                "<br/><b>("+articles[i]["categorie"]+")</b> en <i>"+articles[i]["anneeDeSortie"]+"</i>"+"</a></h6>" +                         
            "</div>"+
            "<div class='mid-2 agile_mid_2_home'>"+
            "<div class='block-stars'>"+
            "<ul class='w3l-ratings'>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star' aria-hidden='true'></i></li>"+
            "<li><i class='fa fa-star-half-o' aria-hidden='true'></i></li>"+
            "</ul>"+
            "</div>"+
            "<div class='clearfix'></div>"+
            "</div>"+
            "<div class='ribben'><p>"+articles[i]["categorie"]+"</p></div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "<br>";
            alaune.appendChild(paragraphe);
            }
});
