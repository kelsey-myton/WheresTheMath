These files are for react app only (client side), the default page loaded is called Home referenced with a single back slash
(not "./"). App.js is still there from the original install of react-app but I wanted to make sure I knew how to do it for
any old set-up I want plus I have some testing backend stuff going on with App.js. These are just the "src" files to look at for reference. 
You'll likely need to install reactstrap and some other stuff but it will tell you if it fails to compile.
These files show how to link pages with Route and BrowserRouter from react-router-dom and switch 
between them with a button (onClick functon). Look at index.js, whenever you add a new page make sure to add it in index.js
so the router knows that the page exists!
