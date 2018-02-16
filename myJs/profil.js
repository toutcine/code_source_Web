var get_id = sessionStorage.id;
$.get("http://cinetout.herokuapp.com/favoris/nbFavorisClient/"+get_id, function( data ) {
  $('#nombreFavoris').html(data);
});

$.get("http://cinetout.herokuapp.com/comment/nombreCommentaireClient/"+get_id, function( data ) {
  $('#nombreComments').html(data);
});



var listeComments = document.getElementById("listecomments");
var url = "http://cinetout.herokuapp.com/comment/getAllClient/"+get_id;
ajaxGet(url, function (reponse) {
    var comments = JSON.parse(reponse);
    var data_length = comments.length;
    for (var i = 0; i < data_length; i++) {
        var laDate = comments[i]["date"].split("/");
        var commentaire = comments[i]["commentaire"];
    	var url2 = "http://cinetout.herokuapp.com/cine/getFiche/"+comments[i]["idFilm"];
    	ajaxGet(url2, function (reponses) {
    		var film = JSON.parse(reponses);
    		var paragraphe = document.createElement("p");
	    		paragraphe.innerHTML = "<p>Vous avez commentez "+film.titre+":<b>"+commentaire+"</b> le "+full_date(laDate[0],laDate[1]-1,laDate[2])+"</p><br>";
        		listeComments.appendChild(paragraphe);
		});
    }
});

var listeFavoris = document.getElementById("listeFavoris");
var url = "http://cinetout.herokuapp.com/comment/getAllClient/"+get_id;
ajaxGet(url, function (reponse) {
    var comments = JSON.parse(reponse);
    var data_length = comments.length;
    for (var i = 0; i < data_length; i++) {
        var laDate = comments[i]["date"].split("/");
        var url2 = "http://cinetout.herokuapp.com/cine/getFiche/"+comments[i]["idFilm"];
        ajaxGet(url2, function (reponses) {
            var film = JSON.parse(reponses);
            var paragraphe = document.createElement("p");
                paragraphe.innerHTML = "<div class='col-md-3'>"+
                                        "<img src='"+film.affiche+"'>"+
                                        "<p>"+film.titre+"</p>"+
                                    "</div>";
                listeFavoris.appendChild(paragraphe);
        });
    }
});


