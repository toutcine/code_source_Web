
function is_int(value){
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return true;
  } else {
      return false;
  }
}

var titreZone = document.getElementById("genresFilm");
var get_mot = getQuerystringDef('mot','false');

var mot_cle = "";
var url = ""; 
if(is_int(get_mot)){
    mot_cle = get_mot
    if(get_mot == "2006"){
      url = "http://cinetout.herokuapp.com/cine/getAllAnneeBefore/2007";
    }
    else if(get_mot == "2018"){
      url = "http://cinetout.herokuapp.com/cine/getAllAnneeAfter/2017";
    }else{
      url = "http://cinetout.herokuapp.com/cine/getAllAnnee/"+mot_cle;
    }
}else{
  mot_cle = get_mot;
  url = "http://cinetout.herokuapp.com/cine/getAllGenre/"+mot_cle;
}

var titre = document.getElementById("titre");

ajaxGet(url, function (reponse) {
    var articles = JSON.parse(reponse);
    var data_length = articles.length;
    titre.innerHTML = mot_cle + " Cinema ";
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
