var titreZone = document.getElementById("serieFilm");

ajaxGet("http://cinetout.herokuapp.com/cine/getAllCategorie/Serie", function (reponse) {
    var articles = JSON.parse(reponse);
    var data_length = articles.length;
    titre.innerHTML = "Nos séries";
        for (var i = 0; i < data_length; i++) {
            
           var documents = document.createElement("p");
           documents.innerHTML = "<div class='col-md-2 w3l-movie-gride-agile'>"+
        "<a href='single.jsp?id="+articles[i]["id"]+"' class='hvr-shutter-out-horizontal'><img src='"+articles[i]["affiche"]+"' title='album-name' />"+
        "<div class='w3l-action-icon'><i class='fa fa-play-circle' aria-hidden='true'></i></div>"+
        "</a>"+
        "<div class='mid-1'>"+
        "<div class='w3l-movie-text'>"+
            "<h6><a href='single.jsp?id="+articles[i]["id"]+"'>"+articles[i]["titre"]+"</a></h6>"+                         
        "</div>"+
        "<div class='mid-2'>"+              
        "<p>"+articles[i]["anneeDeSortie"]+"</p>"+
        "<div class='block-stars'>"+
            "<ul class='w3l-ratings'>"+
                "<li><a href='#'><i class='fa fa-star' aria-hidden='true'></i></a></li>"+
                "<li><a href='#'><i class='fa fa-star' aria-hidden='true'></i></a></li>"+
                "<li><a href='#'><i class='fa fa-star' aria-hidden='true'></i></a></li>"+
                "<li><a href='#'><i class='fa fa-star-half-o' aria-hidden='true'></i></a></li>"+
                "<li><a href='#'><i class='fa fa-star-o' aria-hidden='true'></i></a></li>"+
            "</ul>"+
        "</div>"+
        "<div class='clearfix'></div>"+
        "</div>"+
        "</div><div class='ribben'><p>"+articles[i]["categorie"]+"</p></div>"+
        "</div>";
        titreZone.appendChild(documents);
    }
});
