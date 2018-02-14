<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <section>
        <div class="modal-body">
            <div class="w3_login_module">
                <div class="module form-module">
                    <div class="toggle"> <i class="fa fa-times fa-pencil"></i>
                        <div class="tooltip"> Clic Moi </div>
                    </div>
                    <div class="form">
                        <h3> Se connecter a votre compte </h3>
                        <form name="connexion_toutcine">
                            <input type="email" name="email" placeholder="Email" required="">
                            <input type="password" name="mdp" placeholder="Mot de passe" required="">
                            <a onclick="connexion()" class="btn btn-warning"> Se connecter </a>
                        </form><br>
                        <div id="verivication_connexion" style="visibility:hidden;">
                            <div class="alert alert-danger">
                                <i class="icon icon-times-circle icon-lg"></i>
                                <strong> Erreur! </strong> Votre email ou mot de passe est incorrect... </div>
                        </div>
                    </div>
                    <div class="form">
                        <h3> Cr?e er un compte
                        </h3>
                        <form action="#" method="post">
                            <input type="text" name="pseudo" placeholder="Pseudonyme" required="">
                            <input type="password" name="mdp" placeholder="Mot de passe" required="">
                            <input type="email" name="email" placeholder="Adresse email" required="">
                            <input type="submit" value="Enregistrer">
                        </form>
                    </div>
                    <div class="cta"> <a href="#"> Mot de passe oubli?? </a></div>
                </div>
            </div>
        </div>
    </section>