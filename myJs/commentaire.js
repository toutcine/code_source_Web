function commenter() {
    var idCine = getQuerystringDef('id', 'false');
    var coms = document.forms["commentaire_cine"].messageJS.value;
    var id = sessionStorage.id;
            
    var daty = new Date();
    var maDate = (daty.getFullYear())+"/"+(daty.getMonth()+1)+"/"+daty.getDate();
    if (id === undefined) {
        alert("Une connexion est necessaire pour laisser un commentaire");
    } else {
        if(coms.length<1){
            $('#erreur').html("<div class='alert alert-danger col-md-5'>"+
                                        "<i class='icon icon-times-circle icon-lg'></i>"+
                                        "<strong> Erreur !</strong> Veuillez entrez votre commentaire !."+
                                        "</div>");
        }else{
        var data = {
                    idClient:id,
                    idFilm:idCine,
                    date:maDate,                    
                    commentaire:coms
                };
            $.ajax({
              url: "http://cinetout.herokuapp.com/comment/insert/",
              type: 'POST',
              contentType:'application/json',
              data: JSON.stringify(data),
              dataType:'json',
              success: function(data){
                //On ajax success do this
                document.forms["commentaire_cine"].messageJS.value = "";
                console.log("Commentaire insérer");
                document.location.href = "single.jsp?id="+data.idFilm;
              },
              error: function(xhr, ajaxOptions, thrownError) {
                 //On error do this
                   if (xhr.status === 200) {
                       console.log(ajaxOptions);
                   }
                   else {
                       console.log(xhr.status);
                       console.log(thrownError);
                   }
               }
            });
        }
    }
}



var zoneCommentaire = document.getElementById('commentaireJs');
var get_id = getQuerystringDef('id','false');
var url = "http://cinetout.herokuapp.com/comment/getAllFilm/"+get_id;
ajaxGet(url, function (reponse) {
    var comments = JSON.parse(reponse);
    var data_length = comments.length;
    for (var i = 0; i < data_length; i++) {
        var laDate = comments[i]["date"].split("/");
        var commentaire = comments[i]["commentaire"];
    	var url2 = "http://cinetout.herokuapp.com/membre/getDetail/"+comments[i]["idClient"];
    	ajaxGet(url2, function (reponses) {
    		var client = JSON.parse(reponses);
	    		var paragraphe = document.createElement("p");
	            paragraphe.innerHTML = "&nbsp;&nbsp;<h5>"+client.pseudonyme+"</h5>"+
	                "<div class='media-left'>"+
	                    "<a href='#'>"+
	                        "<img src='"+client.avatar+"' title='One movies' class='img-circle'/>"+
	                    "</a>"+
	                "</div>"+
	                "<div class='media-body'>"+
	            		"<p>"+commentaire+"</p>"+
	                    "<span>Commenté le : "+full_date(laDate[0],laDate[1]-1,laDate[2])+" </span>"+
	                "</div>";
	        zoneCommentaire.appendChild(paragraphe);
		});
    }
});
	