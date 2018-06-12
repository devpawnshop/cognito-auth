cognito-auth
============

This project outlines the authentication, registration and authorization of an AWS Cognito user pool using simple bootstrap forms and the AWS Cognito SDKs. 

## HTML
###### The folowing \*.html files are included as examples
###### - `login.html`
###### - `register.html`
###### - `index.html` 
###### The `login.html` and `registration.html` files use simple bootstrap form elements.  
###### `index.html` is an example of protecting your app by requiring the token provided by Cognito upon successful login.  The token is stored in the browser's local storage.
>Local Storage items persist between tabs and do not expire.  The token issued by cognito should expire 1 hour from the time it is issued.
###### The responding jQuery functions handle events by an element's id; `$(#elementid)`
  

## JS
###### The javascript files used to support the Cognito functionality are as follow:
##### - `js/config.js` - Cognito user pool config. 
```javascript
  cognito: {
        userPoolId: '', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: '' // e.g. us-east-2
    }
```
###### The User Pool ID can be found from the AWS console for Cognito in the General Settings of the desired pool.
###### Likewise, the Pool Client ID can be found by selecting App Clients from the left menu.

##### - `js/cognito-auth.js`
###### This file is laid out in three different sections.
###### 1. `/**** POOL CONFIG ****/` 
######    - This section establishes a connection to the cognito user pool with the data in the config file. 
##### - `index.html`



```javascript
   $(function onDocReady() {
        $('#login-form').submit(handleSignin);
        $('#signupform').submit(handleRegister);
        $('#verifyForm').submit(handleVerify);
	});
```


## CSS


**HTML**
```html
    <form class="form-horizontal readOnly">
        <div class="control-group">
            <label class="control-label" for="inputName">
                Name
            </label>
            <div class="controls">
                <input type="text" id="inputName" placeholder="Name" value="Marty Mcfly">
            </div>
        </div>
        <div class="control-group">
            ...
        </div>
        ...
    </form>
```
