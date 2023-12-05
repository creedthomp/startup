use dig in the terminal with the url to find the IP address
set up dns and https by next time 

git add .
git commit -m "message"
git push

 IP 54.160.183.218     

 ssh -i /Users/creedthompson/downloads/creedtrevor12.pem ubuntu@creedthompson.click

./deployFiles.sh -k ~/downloads/creedtrevor12.pem -h creedthompson.click -s startup

mongodb+srv://creedthomp:<password>@cluster0.2glq8q4.mongodb.net/?retryWrites=true&w=majority
replace with creedtrevor12


make sure to do npm init -y ect and do the new deploy methods


STARTUP IDEAS;
    after logging in there is a home page with the graph and from there you can click on different tabs to direct and insert mole mileage etc



I need to do that thing to my subdomains go to https.md to get help


Network security

9/25
    3.2 simon HTML
    go to simon.mydomain
        login
        play
        scores
        about
    startup.mydomain
        do we do simon and ours??
    deploying


9/27
    <body>
        <p style = color: red /> //idk if this is even right syntax
    
    you can chabge the tag. you can change the header tag, or you can put it in a file

    ex of style 
    <link rel="stylesheet" href= "styles.css" /> // this grabs from a file? but im not exactly sure if this is 100% right syntax 


    inside of html it has a head and a body 

    w3schools to look up all tags woth examples (a tag is <body>)

    css selectors 
        p tag with id = "para1"
            we can modify it with css using the ID tag
        or you can use class 
            .center
            <h1 class= "center" >hello world</h1>
            <p class= "center" >....
            you can use classes to select all the things in the same class and change them all??
        
        #para1 {
            text-align: center;
            color: red;
        }                                   I think you would put these in your file thatyou pull from
        .class1 {
            text-align: left:
            color: orange;
        }

        you would do this:
        <p class= "class1">Hello</p> and this would make it left and orange

        practice on codepen

        bitter and cabin fint are good 

        p tag children using p:nth-child(number){
            font-family:" "
        }
        this is an example of making font slowly bigger 
                                p {
                        text-align: center;
                        font-size: 20vh;

                        animation-name: demo;
                        animation-duration: 3s;
                        }

                        @keyframes demo {
                        from {
                            font-size: 0vh;
                        }

                        95% {
                            font-size: 21vh;
                        }

                        to {
                            font-size: 20vh;
                        }
                        }

10/2
CSS
    responsive design
        make it for a mobile device
        block, inline, flex. grid
            modify the class. 
                ex; .inline {
                    display: inline;
                }
                ex: .grid {
                    display; grid;
                    grid_template_columns: 1fr 2fr;
                    // those are fractions??
                }
    media queries
        it flips behavior?
        turn off certain displays when the screen gets small 
        floats: something that will work around words and such when the screen size shanges

        LOOK AT CODEPEN FLEX AND MEDIA QUERY LAYOUT

CSS reading
    three ways to incorporate css intp html
        using the style attribute of html and assign declarations 
        you can use the style element and you should put it in the head of the html -- this way the rules apply to all elements of the document 
        the final way is to use the link method and hyper link to a seperate css document. this also must appear in the head of the document 

JAVA SCRIPT
    strings with quotes
    use + to cat strings
    console.log is like print
    for and while loops
    Arrays/ list. if you do arrray(name of it)). foreach prints all them out
        const words = ['hello', 'world'];

        words.forEach((word) => {
            console.log(word);
        });
    join can also be used to combine strings 
    make a javas file and do index.js
    include it in your head <script src="index.js"></script>
    you can also throw js in the script tags
    onclick="something" will be a scripts attribute. it will run it when you click the button
    let defines variables
    ***alert pops up a box use this. or console.log. console.log is better 
    go to inspesct then console and you can just type javascript
    typeof  lets you know what type it is 

    console.time and console.timeEnd to see how long it takes 
    console.count('a'); to see how many times a block of code was called??
    you can add javascript to html by including it in the <script> tag or by using <script src=something.js></script>
    onclick <button onclick="let i=1;i++;console.log(i)">press me</button> <!-- OUTPUT: 2 -->
    use let and const to declare variables 
    you dont need to declare what type the variable is 
    functions, array(list), map 
    + - / * and === (strict equality) == 
    if else if else && ||  !
    do while loop??
                let i = 0;
            do {
            console.log(i);
            i++;
            } while (i < 2);
        or a normal cpp while loop
    const arr = ['a', 'b'];
    for (const name in arr) {
    console.log(name);
    }
    // OUTPUT: 0
    // OUTPUT: 1  

    functions 
        function hello(who) {
        who.count++;
        console.log('hello ' + who.name);
        }
        hello({ name: 'world', count: 0 });

        // Anonymous declaration of the function that is later assigned to a variable
        const add = function (a, b) {
            return a + b;

    arrow function
        kinda like function but more compact
        () => {
             return 3;
        };
        changes the scope??
    debounce
        idk im confused 
        function debounce(windowMs, windowFunc) {
            let timeout;
            return function () {
                console.log('scroll event');
                clearTimeout(timeout);
                timeout = setTimeout(() => windowFunc(), windowMs);
            };
            }  this makes it it is white when the user is scrolling and goes grey when the user isnt scrolling


    DOM 
        document object model 
        how to manipulate DOM
            use recursion to look at the children of every element 
        <button onclick= 'alert("something")'>
        tips for that DOM assignment
            make an alert box whenypou click on the headers 
            then figure out how to sort
            look at headers 
            sort() function that you can call on any array

    promises 
        everything must me asynchronus
        you pass a function with resolve and reject parameters 
        idk i have no clue
    use json

    USE LOCAL STORAGE AND JSON FOR MY CHART 


    Test studying
In the following code, what does the link element do?
    The link element is used to link an external resource, typically a stylesheet, to an HTML document.
In the following code,  what does a div tag do?
    The <div> tag is a block-level HTML element that is often used as a container to group and style other HTML elements.
In the following code, what is the difference between the #title and .grid selector?
    The #title selector targets an element with the id attribute of "title," while the .grid selector targets elements with the class attribute set to "grid." The # selector is used for selecting elements by their unique IDs, while the . selector is used for selecting elements by their class names.
In the following code, what is the difference between padding and margin?
    Padding is the space inside an element between its content and its border, while margin is the space outside an element, creating space between the element and other elements around it.
Given this HTML and this CSS how will the images be displayed using flex?
    Certainly! In CSS and HTML, "flex" refers to the Flexbox layout model, which is a powerful and flexible way to design the layout and alignment of elements within a container. Flexbox, short for "Flexible Box," is particularly useful for creating responsive and complex layouts, and it simplifies the way elements are arranged in both rows and columns.

        Here are some key concepts and properties associated with Flexbox:

        Container and Items:

        In a Flexbox layout, there is a "container" element (often referred to as the flex container) and its child elements (referred to as "items" or "flex items"). The container is used to define the context for the layout, and the items are the elements that are arranged inside it.
        Main Axis and Cross Axis:

        Flexbox layouts have two primary axes: the "main axis" and the "cross axis." The main axis is the primary direction in which items are laid out, and the cross axis is the perpendicular axis.
        Flex Container Properties:

        To create a Flexbox layout, you need to define the container as a flex container. You can do this by setting its display property to flex or inline-flex.
        Common properties for the flex container include:
        flex-direction: Determines the main axis direction (row, row-reverse, column, or column-reverse).
        justify-content: Specifies how items are aligned along the main axis.
        align-items: Specifies how items are aligned along the cross axis.
        align-content: Defines the alignment of the flex lines when there's extra space in the container.
        Flex Items Properties:

        Flex items can be styled using various properties, such as:
        flex: Specifies how an item grows or shrinks to fill available space.
        order: Controls the order in which items appear in the flex container.
        align-self: Overrides the align-items property for individual items.
        flex-basis: Sets the initial size of a flex item before it starts to grow or shrink.
        Responsive Layouts:

        Flexbox is particularly useful for creating responsive designs. It can automatically adjust the layout and alignment of items based on available space and screen size.
        Nesting:

        You can nest flex containers within other flex containers to create complex layouts with different levels of flexibility.
        Flexbox is a powerful tool for designing web layouts that adapt to different screen sizes and orientations. It simplifies the design process by reducing the need for complex CSS and positioning rules, making it a preferred choice for many layout tasks in modern web development. It's well-supported in all major web browsers, making it a reliable and widely used layout model.
What does the following padding CSS do?

What does the following code using arrow syntax function declaration do?
    const a = [1, 2, 3, 4];

    // standard function syntax
    a.sort(function (v1, v2) {
    return v1 - v2;
    });

    // arrow function syntax
    a.sort((v1, v2) => v1 - v2);
What does the following code using map with an array output?
    const numbers = [1, 2, 3, 4, 5];

    // Using arrow function with map() to double each number in the array
    const doubledNumbers = numbers.map(number => number * 2);

    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
What does the following code output using getElementByID and addEventListener?

What does the following line of Javascript do using a # selector?

Which of the following are true? (mark all that are true about the DOM)
    The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

    The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.
    Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

    The DOM provides a set of methods and properties that allow developers to access and modify the content and structure of a document. This enables dynamic content manipulation and interaction with the web page, making it an essential part of client-side scripting.

By default, the HTML span element has a default CSS display property value of: 
    The default CSS display property value for the HTML <span> element is inline.
How would you use CSS to change all the div elements to have a background color of red?
    div {
        background-color: red;
    }
How would you display an image with a hyperlink in HTML?
    <a href="https://example.com">
  <img src="image.jpg" alt="Description">
    </a>
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    Content > Padding > Border > Margin.
Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
    a class ID
What will the following code output when executed using a for loop and console.log?

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    document.getElementById("byu").style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    Paragraph: <p>
    Ordered List: <ol>
    Unordered List: <ul>
    Second Level Heading: <h2>
    First Level Heading: <h1>
    Third Level Heading: <h3>
How do you declare the document type to be html?
    doctype html
What is valid javascript syntax for if, else, for, while, switch statements?
    if (condition) {
    // Code to execute if the condition is true
    } else if (anotherCondition) {
        // Code to execute if another condition is true
    } else {
        // Code to execute if no condition is true
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i}`);
        }

    let count = 0;
    while (count < 3) {
        console.log(`Count: ${count}`);
        count++;
        }

    const day = "Monday";

    switch (day) {
        case "Monday":
            console.log("It's the start of the week.");
            break;
        case "Friday":
            console.log("It's almost the weekend!");
            break;
        default:
            console.log("It's a regular day.");
    }





What is the correct syntax for creating a javascript object?
    var objectName = {
        key1: value1,
        key2: value2,
        // More key-value pairs
        };
Is is possible to add new properties to javascript objects?
    yes
If you want to include JavaScript on an HTML page, which tag do you use?
    script
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    document.getElementById("yourElementId").textContent = "crow";
Which of the following correctly describes JSON?
    JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    cd- course directory
    ls - list 
    mkdir - make directory 
    rm - remove
    chmod- permissions?
    pwd - print working dir
    vim - text editor
    nano - another text editor
    mv - move files
    man - manual for things
    ssh - secure shell 
    ps - shows info ion the running process like ids
    wget - downloading things from int
    sudo - stands for "superuser do" and is used to execute a command with superuser or administrative privileges. It's often used to perform system administration tasks that require elevated permissions.
Which of the following console command creates a remote shell session?
    ssh
Which of the following is true when the -la parameter is specified for the ls console command?
    the hidden one show
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    In the domain name "banana.fruit.bozo.click," "click" is the top-level domain (TLD), "bozo" is a subdomain, and "fruit" is also a subdomain. "banana" is a subdomain of "fruit."
Is a web certificate is necessary to use HTTPS.
    yes
Can a DNS A record can point to an IP address or another A record.
    both, usually IP
Port 443, 80, 22 is reserved for which protocol?
    HTTPS, HTTP, SSH
What will the following code using Promises output when executed?

no other element can have the same ID?
ID = #

Elements in HTML are the building blocks of a web page. Elements are represented by HTML tags, such as <p>, <div>, <h1>, and many others. Each tag corresponds to a specific type of element, like paragraphs, headings, links, images, and so on.
You can select elements based on their HTML tag names using element selectors in CSS.
IDs are unique and can be applied to only one element on a page, while elements represent various HTML tags and can be applied to multiple instances of the same tag.



use which node to find the path
do npm stuff in the node.md if I need. also creating a web server and an API
        const http = require('http');
        const server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
        res.end();
        });

        server.listen(8080, () => {
        console.log(`Web service listening on port 8080`);
        });
                / switch content type to application/JSON in orde to make it and JSON and do JSON.stringify(something) in the res.write place





URL. this is an example. only the first two elements are necessary. <scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication).
URL - unifor resource locator 
HTTP - hypertext transfer protocol


defining routes
    request and response object
    app.get('/store/:storeName', (req, res, next) => {
        res.send({name: req.params.storeName});
        });

        // Wildcard - matches /store/x and /star/y
        app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

        // Pure regular expression
        app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

middleware
    function middlewareName(req, res, next)
creating your own 
    app.use((req, res, next) => {
        console.log(req.originalUrl);
        next();
    });
    use the next function for a middleware chain 
built in middle ware 
    app.use(express.static('public'));


Data services
    data bases are great for data persistance
    CRUD create read update delete


hashing is making it so passwords are encrypted and can't be hacked 

to test endpoints I might need to go back and download some stuff


{
  "name": "startup",
  "version": "1.0.0",
  "description": "My idea is to have a website where someone can login and enter how many miles they ran and what shoe they used. The database will store how many miles are on each shoe so the person is aware of when to get new shoes. I am on the BYU cross country team and we run up to 100 miles a week, and shoes can generally handle 300 to 400 miles so it can be helpful to know how many miles are on each shoe so the person can be aware of when to retire the shoes and get new ones.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Creed Thompson",
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/creedthomp/startup"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}




















maybe find the inclass and assets file and look at the example 
put the vite stuff into public directory??
// app.post('/api/shoe', async (req, res) => {
//   try {
//     const shoeData = req.body;
//     await database.addShoeData(shoeData);
//     res.status(200).json({ message: 'Data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/shoe', async (req, res) => {
//   try {
//     const data = await database.getShoeData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });





function shoemiles() {
    // Fetch values from the form
    const shoename = document.querySelector("#shoe").value;
    const miles = parseFloat(document.querySelector("#miles").value);
    const username = localStorage.getItem("Username"); // Assuming you're storing the username in local storage

    // Proceed to make the fetch request
    fetch('/api/shoe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, shoe: shoename, miles })
    })
    .then(() => window.location.href = "chart.html")
    .catch(error => console.error('Error:', error));
}

const database = require('./database');


change Username to userName