<?
	require_once('config.php');
?>
<!DOCTYPE html> 
<html> 
<head> 
	<title>Control House</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/jquery.mobile-1.3.2.min.css" />
    <link rel="stylesheet" href="css/controlhouse.css" />
	<script src="js/jquery-1.9.1.min.js"></script>
	<script src="js/jquery.mobile-1.3.2.min.js"></script>
    <script src="js/javascripts.js"></script>
<meta charset="utf-8">
</head> 
<body>

<div data-role="page" id="index" data-theme="a">
	<div data-role="content">
    	<div id="logo">
        	<img src="images/logo_controlhouse.png" width="160" height="113">
        </div>
        <div id="login">
            <form name="form_login" id="form_login" action="login.php" data-ajax="false">
                <label for="form_user" class="ui-hidden-accessible">Login:</label>
                <input type="text" name="form_user" id="form_user" placeholder="Login" />
                <label for="form_senha" class="ui-hidden-accessible">Senha:</label>
                <input type="password" name="form_senha" id="form_senha" placeholder="Senha" />
                <button type="submit">Acessar o sistema</button>
            </form>
        </div>
    </div><!-- /content -->
</div><!-- /page -->

</body>
</html>
