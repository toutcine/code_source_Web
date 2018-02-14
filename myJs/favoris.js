function addFavoris() {
    var daty = new Date();
    var maDate = (daty.getFullYear()) + "/" + (daty.getMonth() + 1) + "/" + daty.getDate();
    var id = sessionStorage.id;
    var idCine = getQuerystringDef('id', 'false');

    if (id === undefined) {
        alert("Une connexion est necessaire pour ajouter un favoris");
    } else {
        var data = {
            idClient: id,
            idFilm: idCine,
            date: maDate
        };
        $.ajax({
            url: "http://cinetout.herokuapp.com/favoris/insert/",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(data) {
                //On ajax success do this
                console.log("Ce film est désormais dans votre favoris");
                document.location.href = "single.jsp?id=" + data.idFilm;
            },
            error: function(xhr, ajaxOptions, thrownError) {
                //On error do this
                if (xhr.status === 200) {
                    console.log(ajaxOptions);
                } else {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            }
        });
    }
}