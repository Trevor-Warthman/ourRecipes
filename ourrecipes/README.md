# ourrecipes

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ourRecipes
A website to collect recipes with tagging, logins, and customization in order to track your own or see friends recipes.

To start soon.

cd into ourRecipes git project folder
cd into ourrecipes vue folder
npm run serve to start


TODO:
fake database json file with my passcode and username in it
Make an option to "create an account", only allowed if their username is already in my file I guess. Have a guest account.
Figure out how to pass css into a module from parent, cuz I want to pass what the h-w ratio should be into the dashboard.
Install dev tools

cd backend
dotnet run


Goals:
pin a recipe, saved to pinned database, with a user and recipe id. Dashes will load pins.

Different types of Dashboards. There is the non-logged in dash, the logged in dash which is more custom, and there's a specific page with loads a dash with url params. For instance, the Vietnamise Dash displays everything with Vietnamise tag and is sortable. 

You can get to a Dashboard using url parameters to sort on tags or author. tags is a string split by commas to "and". 
So I can basically at any time pull up a custom dashboard of 
CONSIDER: Maybe clicking on a tag or author doesn't pull up a dash in a new window, maybe it calls a modal. That would be cool and better. 
When you click

Author -> show modal with option to go to their profile and with their dashboard of recipes. 
Author -> route to Author's home page, profile info, and their dash.
Tag -> show tag modal with tag dashboard, given the info thru JS. Easy. 

Seach bar on your main page -> search for any author or recipe and display hits in search modal, which is basically just another Dashboard. Shows both profile page hits and recipe hits. 



Firebase config stuff:
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDCWODNuWpO0ImWeM_Y4WYgKt3fL77ulfY",
    authDomain: "ourrecipes-d576f.firebaseapp.com",
    projectId: "ourrecipes-d576f",
    storageBucket: "ourrecipes-d576f.appspot.com",
    messagingSenderId: "396152375943",
    appId: "1:396152375943:web:900bd76cf186ebb41b0622"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

https://firebase.google.com/docs/web/setup