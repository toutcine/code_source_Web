var titreZone = document.getElementById("listeFilm");
ajaxGet("http://cinetout.herokuapp.com/cine/getAll", function (reponse) {
    var articles = JSON.parse(reponse);
    var data_length = articles.length;
        for (var i = 0; i < data_length; i++) {
            
            var debut = document.createElement("tr");
             
             var tdaffiche = document.createElement("td");
tdaffiche.innerHTML = "<td class='w3-list-img'><img src="+articles[i]["affiche"]+" /> <span><a href='single.jsp?id="+articles[i]["id"]+"'>"+articles[i]["titre"]+"</span></a></td>"
             
             
             var tdannee = document.createElement("td");
             tdannee.innerHTML = "<td>"+articles[i]["anneeDeSortie"]+"</td>";
             var tdduree = document.createElement("td");
             tdduree.innerHTML = "<td>"+articles[i]["duree"]+"</td>";
             var tdgenre = document.createElement("td");
             tdgenre.innerHTML = "<td>"+articles[i]["genre"]+"</td>";
             var tdacteur = document.createElement("td");
             tdacteur.innerHTML = "<td class='w3-list-info'>"+articles[i]["acteur"]+"</td>";
            var fin = document.createElement("tr");

            titreZone.appendChild(debut);
            
            titreZone.appendChild(tdaffiche);
            titreZone.appendChild(tdannee);
            titreZone.appendChild(tdduree);
            titreZone.appendChild(tdgenre);
            titreZone.appendChild(tdacteur);
            titreZone.appendChild(fin);
             
        }
});
