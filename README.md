# Test the app on mobile
host=0.0.0.0 yarn start 
E.g:

```
You can now view whatsapp-demo in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.43.149:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

connect your mobile on the same network and connect on the url displayed on the consle.log of create-react-app.



# Send with whatsapp
 
the user will be redirected to the app if it is already installed or to api.whatsapp.com page 
and he will be asked to install the app if not installed.


# Send with fb

The Send Dialog does not work on mobile.
Working for a solution.


# Send with Linkedin
User always redirected to the browser.

issues:
if the user is not logged in, it is redirected to the homepage after the sign in step.
on mobile, user is redirected to share post on public not in a message (with the app if it is installed or in browser)

