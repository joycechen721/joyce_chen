### web development

#### what is the backend?
- contains the **server**, **application** (business logic, calculating stuff), **database** (user/account information, like giant spreadsheets)
- **technologies**: php, java, node.js, ruby, etc
- **frameworks** (speeds up development of the technology, reduces amount of repetitive grunt code): ruby on rails, cake php, express, etc
- **server side web applications**: instead of having all code delivered to browser & running js on client side as they load up the website, **server-side apps** make server do all the running and only deliver the *outcome* back to the client browser, so source code is made confidential (allows for faster, more complex websites that can do computations *before* it renders the website to be delivered to the user. interact with databases, queries, search, etc)

#### servers
- a physical device or computer program where local computers connect to for a special service, like retrieving a website, accessing data, emailing
- any ordinary desktop computer can be set up as a server!

#### http protocol
- enables **communication between clients (web browsers) & servers**
- the client (browser) sends an *HTTP request to the server*. the server *returns a reponse back to the client.* response may be stuff like a web page
- **GET request** — HTTP method used to request a resource from the server. browsers use this every time you click a link / type a URL into address bar. instructs server to transmit the **data identified by the URL** to the client. data isn’t modified on server side, since GET request only has client receive the data
    - all visible in the URL
    - e.g. loading a static html page, retrieving css assets, json/xml data, searching & retrieving information (catalogs, yt vids)
- **POST request** — sending data (ie. user inputs) to the server, which typically gets stored into a database, or rendered on the webpage. hides whatever is done.
    - submitting a form, creating new blog post
- **HTTP response [status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)**
    - informational responses (100 - 199)
    - successful!! responses (200 - 299)
    - redirects (300 - 399)
    - client errors (400 - 499)
    - server errors (500 - 599)

#### node.js
- backend technology that runs on the Javascript language
- accessing user’s file systems, listen to network requests — code that can interact directly with the computer, independent of the browser!
- **Terminal Commands**
    - `node [some file]` — run the file on terminal using node!
    - `node` — gets you inside the REPL (console); can run code, do math inside the angular brackets
        - `.exit` or *ctrl-c* twice to exit REPL
    - `clear` deletes all previous commands
- **Native** **Modules (libraries of code bundled in Node)**
    - check [nodejs.org/api](https://nodejs.org/api/), must “require” the module first
        - **const** = a constant var, canNOT change later on
    - [file system module](https://nodejs.org/api/fs.html)
        - open/access/changing files
        
        `jsx
        const fs = require("fs"); // use local file system module
        fs.copyFileSync("file1.txt", "file2.txt"); // copy contents in file1 to file2.txt
        `