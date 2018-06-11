cognito-auth
============

This project outlines the authentication, registration and authorization of an AWS Cognito user pool using simple bootstrap forms and the AWS Cognito SDKs. 

**HTML**
###### The folowing \*.html files are included as examples
###### `login.html`
###### `register.html`
###### `index.html` 
###### `login.html` and `registration.html` use standard form elements.  
###### `index.html` is an example of protecting your app by requiring the token provided by Cognito upon successful login.  The token is stored in the browser's local storage.
>Local Storage items persist between tabs and do not expire.  The token issued by cognito should expire 1 hour from the time it is issued.
###### The responding jQuery functions handle events by an element's id; `#elementid`.  

**JS**

**CSS**


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
