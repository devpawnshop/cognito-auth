/*global App config */

var AuthPage = window.AuthPage || {};

/*************************************************************
*************** Check Session in Local Storage ***************
*************************************************************/

(function appScopeWrapper($) {
    var authToken;
    
    AuthPage.authToken.then(function setAuthToken(token) {
        if (token) {
            authToken = token;
        } else {
            window.location.href = './login.html';
        } //end if
    }).catch(function handleTokenError(error) {
        alert(error);
        window.location.href = './login.html';
    });//close function
    
    
    /****************************************
    ************ EVENT HANDLERS ************
    ****************************************/
    
    $(function onDocReady() {
        $('#signOut').click(function() {
            AuthPage.signOut();
            //alert("You have been signed out.");
            window.location = "login.html";     
        }); //close function
        var cognitoUser = userPool.getCurrentUser();
        console.log(cognitoUser.client.config.region);
        AuthPage.authToken.then(function updateAuthMessage(token) {
            if (token) {
                //$('.authToken').text(token);
                $('#user-name').html("<b>Username:</b> " + cognitoUser.username);
                $('#user-region').html("<b>User Region:</b> " + cognitoUser.client.config.region);
            } // End if
		}); //close updateAuthMessage function
    }); //close onDocReady Function
    
}(jQuery)); //CLose appScopeWrapper Function