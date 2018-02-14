// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function() {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

// Exécute un appel AJAX POST
// Prend en paramètres l'URL cible, la donnée à envoyer et la fonction callback appelée en cas de succès
function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(data);
}

function connexion() {
    var email = document.forms["connexion_toutcine"].email.value;
    var mdp = document.forms["connexion_toutcine"].mdp.value;
    var url = "http://cinetout.herokuapp.com/membre/getAll";
    ajaxGet(url, function(reponse) {
        var membres = JSON.parse(reponse);
        var data_length = membres.length;
        for (i = 0; i < data_length; i++) {
            if (membres[i]["email"] == email && membres[i]["pass"] == mdp) {
                sessionStorage.setItem("avatar", membres[i]["avatar"]);
                sessionStorage.setItem("id", membres[i]["id"]);
                sessionStorage.setItem("pseudonyme", membres[i]["pseudonyme"]);
                sessionStorage.setItem("age", membres[i]["age"]);
                sessionStorage.setItem("sexe", membres[i]["sexe"]);
                sessionStorage.setItem("dateInscription", membres[i]["dateInscription"]);
                sessionStorage.setItem("email", membres[i]["email"]);
                alert("Bienvenu chez ToutCine " + membres[i]["pseudonyme"]);
                document.location.href = "index.jsp";
            } else {
                var alerter = document.getElementById("verivication_connexion");
                if (alerter.style.visibility == "hidden") {
                    alerter.style.visibility = "visible";
                }
            }
        }
    });
}

function getQuerystringDef(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);

    if (qs == null)
        return default_;
    else
        return qs[1];
}
function full_date(annee,moiss,jourss){
     // les noms de jours / mois
     //var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date(annee,moiss,jourss);
     // on construit le message
     //var message = jours[date.getDay()] + " ";   // nom du jour
     var message = date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     message += date.getFullYear();
     return message;
}
function deconnexion(){
    var id = sessionStorage.id;
    if(id !== undefined){
        sessionStorage.clear();
        document.location.href = "index.jsp";
        alert("ToutCine vous dit à bientôt");
    }
}