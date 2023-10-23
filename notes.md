use dig in the terminal with the url to find the IP address
set up dns and https by next time 
 IP 54.160.183.218         
./deployFiles.sh -k ~/downloads/creedtrevor12.pem -h creedthompson.click -s startup

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