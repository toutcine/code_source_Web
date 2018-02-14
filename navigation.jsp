	<%@page contentType="text/html" pageEncoding="UTF-8"%>
	<div class="movies_nav">
		<div class="container">
			<nav class="navbar navbar-default">
				<div class="navbar-header navbar-left">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
					<nav>
						<ul class="nav navbar-nav">
							<li><a href="index.jsp">Acceuil</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Genres <b class="caret"></b></a>
								<ul class="dropdown-menu multi-column columns-3">
									<li>
									<div class="col-sm-4">
										<ul class="multi-column-dropdown">
											<li><a href="genres.jsp?mot=Action">Action</a></li>
											<li><a href="genres.jsp?mot=Aventure">Aventure</a></li>
											<li><a href="genres.jsp?mot=Biographie">Biographie</a></li>
											<li><a href="genres.jsp?mot=Famille">Famille</a></li>
										</ul>
									</div>
									<div class="col-sm-4">
										<ul class="multi-column-dropdown">
											<li><a href="genres.jsp?mot=Animation">Animation</a></li>
											<li><a href="genres.jsp?mot=Comédie">Comedie</a></li>
											<li><a href="genres.jsp?mot=Documentarie">Documentarie</a></li>
											<li><a href="genres.jsp?mot=Fantasie">Fantasie</a></li>
											<li><a href="genres.jsp?mot=Drame">Drame</a></li>
										</ul>
									</div>
									<div class="col-sm-4">
										<ul class="multi-column-dropdown">
											<li><a href="genres.jsp?mot=Horreur">Horreur</a></li>
											<li><a href="genres.jsp?mot=Romance">Romance</a></li>
											<li><a href="genres.jsp?mot=Fantastique">Fantastique</a></li>
											<li><a href="genres.jsp?mot=Science fiction">Science fiction</a></li>
										</ul>
									</div>
									
									<div class="clearfix"></div>
									</li>
								</ul>
							</li>
							<li><a href="series.jsp">Serie - TV</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Année de sortie<b class="caret"></b></a>
								<ul class="dropdown-menu multi-column columns-3">
									<li>
										<%for(int i=2006; i<2019; i++){%>
										<div class="col-sm-4">
											<ul class="multi-column-dropdown">
												<li><a href="genres.jsp?mot=<%=i%>"><%=i%></a></li>
											</ul>
										</div>
										<%}%>
										<div class="clearfix"></div>
									</li>
								</ul>
							</li>
							<li><a href="list.jsp">A-z liste</a></li>
                                                        <script>
                                                            var id = sessionStorage.id;
                                                            if(id!==undefined){
                                                                document.write("<li><a href='profil.jsp'>Profil</a></li>");                                                                
                                                                document.write("<li><a onclick='deconnexion()'>Déconnexion</a></li>");
                                                            }
                                                        </script>
                                                        
						</ul>
					</nav>
				</div>
			</nav>	
		</div>
	</div>