
var titreZone = document.getElementById("ficheFilm");
var get_id = getQuerystringDef('id','false');

var url = "http://cinetout.herokuapp.com/cine/getFiche/"+get_id;

var nombreLike = document.getElementById("nombreLike");
ajaxGet("http://cinetout.herokuapp.com/favoris/nbClientFilm/"+get_id, function (reponse) {
    var nb = JSON.parse(reponse);
        var paragraphe = document.createElement("p");
            paragraphe.innerHTML = nb;
        nombreLike.appendChild(paragraphe);
});

var nombreCommets = document.getElementById("nombreCommets");
ajaxGet("http://cinetout.herokuapp.com/comment/nombreCommentaireFilm/"+get_id, function (reponse) {
    var nb = JSON.parse(reponse);
        var paragraphe = document.createElement("p");
            paragraphe.innerHTML = nb;
        nombreCommets.appendChild(paragraphe);
});


ajaxGet(url, function (reponse) {
    var articles = JSON.parse(reponse);
        var paragraphe = document.createElement("p");
            paragraphe.innerHTML = "<div class='song-info'>"+
        "<h3>"+articles["categorie"]+" : "+articles["titre"]+"</h3></div>"+
        "<div class='video-grid-single-page-agileits'>"+
        "<div data-video='dLmKio67pVQ' id='video'> <img src="+articles["affiche"]+" width='700' height='900'/></div></div>"+
        "<div class='row'>"+
        "<div class='page-header text-left'>"+
        "<h3>Description</h3></div>"+
                "<div class='col-md-12'>"+
                    articles["description"]+
                    "<br><br></div>"+
                "<div class='col-md-12 text-left'>"+
                    "<table>"+
                        "<tr>"+
                            "<td><b>Durée</b></td>"+
                            "<td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>"+
                            "<td>"+articles["duree"]+"</td>"+
                        "</tr><tr>"+
                            "<td><b>Réalisateur</b></td>"+
                            "<td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>"+
                            "<td>"+articles["realisateur"]+"</td>"+
                        "</tr><tr>"+
                            "<td><b>Acteur</b></td>"+
                            "<td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>"+
                            "<td>"+articles["acteur"]+"</td>"+
                        "</tr><tr>"+
                            "<td><b>Genre</b></td>"+
                            "<td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>"+
                            "<td>"+articles["genre"]+"</td>"+
                        "</tr>"+
                    "</table>"+
                "</div>"+
        "</div>";
        titreZone.appendChild(paragraphe);
    
});


var filmRelation = document.getElementById("filmEnRelation");
var url2 = "http://cinetout.herokuapp.com/cine/getAllGenre/Horreur";
ajaxGet(url2, function (reponse) {
    var articless = JSON.parse(reponse);
    var data_length = articless.length;
    for (var i = 0; i < data_length; i++) {
        var paragraphes = document.createElement("p");
            paragraphes.innerHTML = "<div class='single-right-grids'>"+
                            "<div class='col-md-4 single-right-grid-left'>"+
                                "<a href='single.jsp?id="+articless[i]["id"]+"'><img src="+articless[i]["affiche"]+"></a>"+
                            "</div>"+
                            "<div class='col-md-8 single-right-grid-right'>"+
                                "<a href='single.jsp?id="+articless[i]["id"]+"' class='title'> "+articless[i]["titre"]+"</a>"+
                                "<p class='author'><a class='author'>"+articless[i]["realisateur"]+"</a></p>"+
                            "</div>"+
                            "<div class='clearfix'> </div>"+
                        "</div>";

        filmRelation.appendChild(paragraphes);
    }
   
});


