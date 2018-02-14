<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 
        <title>One Movies an Entertainment Category Flat Bootstrap Responsive Website Template | Home :: w3layouts</title>
        <%@ include file="include.jsp" %>
            <link rel="stylesheet" type="text/css" href="myCss/mycss.css">
    </head>

    <body>
        <!-- header -->
        <%@ include file="header.jsp" %>
            <!-- //header -->
            <!-- bootstrap-pop-up -->
            <div class="modal video-modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            Se connecter & S'inscrire
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <%@ include file="section_account.jsp" %>
                    </div>
                </div>
            </div>
            <%@ include file="navigation.jsp" %>
                <div class="container">
                    <div class="page-header text-center">
                        <div class="col-md-5">
                            <h2 style="font-family:user;font-size: 50px">
                                <script>
                                    document.write("<img src='" + sessionStorage.avatar + "' width='120px' height='120px' class='img-circle'>");
                                </script>
                                <img src="images/hello1.png" width="150" height="105">
                                <small style="color:#F74A00;">
                                    <script>document.write(sessionStorage.pseudonyme);</script>
                                </small>
                            </h2>
                        </div>
                        <div class="col-md-offset-3 col-md-4">
                            <div class="text-center">
                                <img src="images/notification.png" width="30px" height="30px">
                            </div><br>
                            <div class="list-group ">
                                <a data-toggle="modal" href="#comments" class="list-group-item"><i class="icon icon-sign-out icon-lg"></i> <span class="badge badge-danger"><div id="nombreFavoris"></div></span> Nombre favoris</a>
                                <a data-toggle="modal" href="#comments" class="list-group-item"><i class="icon icon-sign-out icon-lg"></i> <span class="badge badge-success"><div id="nombreComments"></div></span> Nombre de commentaire</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <table class="table table-hover" style="
                            box-shadow:0px 1px 0px 1px #CC0099;
                            border-radius:5px;">
                            <tr>
                                <td>Contact</td>
                                <td>:</td>
                                <td>
                                    <script>
                                        document.write(sessionStorage.email);
                                    </script>
                                </td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>:</td>
                                <td>
                                    <script>
                                        document.write(sessionStorage.age);
                                    </script>
                                </td>
                            </tr>
                            <tr>
                                <td>Sexe</td>
                                <td>:</td>
                                <td>
                                    <script>
                                        document.write(sessionStorage.sexe);
                                    </script>
                                </td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="modal fade" id="favoris" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color:#DDDDDD">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">Vos favoris</h4>
                            </div>
                            <div class="modal-body">
                                <div id="listeFavoris">

                                </div>
                            </div>
                            <div class="modal-footer" style="background-color:#DDDDDD">
                                <button type="button" class="btn btn-inverse" data-dismiss="modal"><i class="icon icon-times icon-lg"></i> <img src="images/ok-icon.png" width="40px" height="40px"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="comments" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color:#DDDDDD">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">Vos commentaire</h4>
                            </div>
                            <div class="modal-body">
                                <div id="listecomments">
                                    
                                </div>
                                <div id="titreFilm">
                                    
                                </div>
                            </div>
                            <div class="modal-footer" style="background-color:#DDDDDD">
                                <button type="button" class="btn btn-inverse" data-dismiss="modal"><i class="icon icon-times icon-lg"></i> <img src="images/ok-icon.png" width="40px" height="40px"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/bootstrap.min.js "></script>
                <script src="myJs/ajax.js"></script>
                <script src="myJs/profil.js"></script>
    </body>

    </html>