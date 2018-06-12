cognito-auth
============

This project outlines the authentication, registration and authorization of an AWS Cognito user pool using simple bootstrap forms and the AWS Cognito SDKs. 

## HTML
The folowing \*.html files are included as examples
###### - `login.html`
###### - `register.html`
###### - `index.html` 
The `login.html` and `registration.html` files use simple bootstrap form elements.  
`index.html` is an example of protecting your app by requiring the token provided by Cognito upon successful login.  The token is stored in the browser's local storage.
>Local Storage items persist between tabs and do not expire.  The token issued by cognito should expire 1 hour from the time it is issued.
The responding jQuery functions handle events by an element's id; `$(#elementid)`

Define client-side scripts below all other js scripts. Order matters!!
`login.html` and `registration.html`:

```javascript
<!-- COGNITO SDK -->
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.250.1.min.js"></script>
<script src="js/aws-cognito-sdk.min.js"></script>
<script src="js/amazon-cognito-identity.min.js"></script>
        
<!-- COGNITO APP POOL CONFIG -->
<script src="js/config.js"></script>
<script src="js/cognito-auth.js"></script>
```
The app pages, `index.html`, in this example get the same files with one an additional js file.

```javascript
<!-- COGNITO SDK -->
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.250.1.min.js"></script>
<script src="js/aws-cognito-sdk.min.js"></script>
<script src="js/amazon-cognito-identity.min.js"></script>
        
<!-- COGNITO APP POOL CONFIG -->
<script src="js/config.js"></script>
<script src="js/cognito-auth.js"></script>

<!-- COGNITO APP SESSION CONFIG -->
<script src="js/index.js"></script>
```

## JS
The javascript files used to support the Cognito functionality are as follow:
##### - `js/config.js` - Cognito user pool config. 
```javascript
  cognito: {
        userPoolId: '', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: '' // e.g. us-east-2
    }
```
The User Pool ID can be found from the AWS console for Cognito in the General Settings of the desired pool.
Likewise, the Pool Client ID can be found by selecting App Clients from the left menu.

##### - `js/cognito-auth.js`
This file is laid out in three different sections and flows in this order.
1. `/**** POOL CONFIG ****/` 
   - This section establishes a connection to the cognito user pool with the data in the config file. 
2. `/**** EVENT HANDLERS ****/`
   - This section uses jQuery to handle events triggered when the submit button is clicked on a form.
     - The functions called for each of these events are part of the EVENT HANDLERS section. Each function gathers additional data established from either an input box or `<div>` value before calling a Pool function.
  
  ```javascript
   $(function onDocReady() {
        $('#login-form').submit(handleSignin);
        $('#signupform').submit(handleRegister);
        $('#verifyForm').submit(handleVerify);
	});
```
3. `/**** POOL FUNCTIONS ****/`
   - These functions perform the necessary task against the Cognito user pool.
     - Necessary data is provided by the EVENT HANDLER function and the POOL CONFIG data.

##### - `js/index.js`
As mentioned earlier, a successful login creates a token that is stored in Local Storage.  You can verify this token by looking in the Local Storage section of your browser's developer's tools.  

This file is laid out in two sections and flows in this order.
1. `/**** Check Session in Local Storage ****/` 
   - This section verifies the existence of a valid token protecting the page.  If a valid token is not present, the browser will be directed to the login page. 
2. `/**** EVENT HANDLERS ****/`
   - A signOut funtion is established.
   - As an example, a few attributes are inserted to a `<dom>`.


