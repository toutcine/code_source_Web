<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <div class="all-comments-info">
        <a>Comment l'avez-vous trouvé, un petit commentaire de votre part</a>
        <div class="agile-info-wthree-box">
            <form name="commentaire_cine">
                <textarea placeholder="Message" name="messageJS" required=""></textarea><br>
                
                <ul class="nav nav-pills nav-purple">
                    <li class="active">
                        <a onclick="commenter()"><span class="fa fa-plus-circle"></span> &nbsp;Commenter<span class="badge">
                            <div id="nombreCommets"></div></span>
                        </a>
                    </li>
                    <li class="active">
                        <a onclick="addFavoris()"><img src="images/fav.jpg" width="40px" height="40px">
                            <span class="badge">
                            <div id="nombreLike"></div>
                            </span>
                        </a>
                    </li>
                </ul>
            </form><br>
            <div id="erreur">
                
            </div>
            
        </div>
    </div>
    <div class="media-grids">
        <div class="media">
            <div id="commentaireJs">
                
            </div>
        </div>
    </div>
    <script src="myJs/ajax.js"></script>
    <script src="myJs/commentaire.js"></script>    
    <script src="myJs/favoris.js"></script>