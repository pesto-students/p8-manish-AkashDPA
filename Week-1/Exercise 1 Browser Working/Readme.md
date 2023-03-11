
# Browser Working Structure

When a user enters an URL in the browser, how does the browser fetch the desired result ?


## Main components of Broweser

![components of Browser](/img/browser-components.png?raw=true)

<br/>

1. User Interface: Connects user with broweser functionalities. This includes address bar, back/forward button, bookmark menu. 
2. Browser Engine:  Transfers action between Browser/User interface and rendering engine.
3. Rendering Engine: - It is responsible for displaying requested content. If requested content is HTML document, then its parses HTML and CSS and displays parsed content in screen.
4. Networking: - It is responsible for getting data from web servers, making HTTP request.
5. UI backend: - It uses operating system user interface method.
6. JavaScript Interpreter: - It is used to parse and execute JavaScript code.
7. Data Storage: - Data stored locally such as cookies. Browser also supports local storage, Web SQL and File System. 

<br/>

---

## Rendering Engine
![Rendering Engine Flow](/img/rendering-engine.png?raw=true)

1. Parse HTML to Construct DOM tree: Parse HTML to construct DOM tree  ( DOM nodes like p, h1, input etc)
2. Creates Render Tree: Contains style information like color dimension
3. Creates Layout: Layout of DOM nodes, exact location where it should appear on screen
4. Painting Render Tree: Last stage is painting the nodes with help of back end layer

<br/>

---

## HTML Parser
![HTML CSS Parser](/img/html-css-parser.png?raw=true)

<img src="img/html-parser.png?raw=true" alt="HTML DOM" width="50%" height="auto"/>

<br/>

1. Pre-Process: The input stream is initially processed to make it appropriate for tokenization before being sent on to the tokenization stage.
2. Tokenization : The stage of tokenization is a two-step procedure. Making a token and sending a token are two different things. Each and every entity in the code is represented by a token, which is a node. Aside from representation, a token also carries all of the data associated with that node.
3. Tree Construction: This step receives the tokens from the tokenization stage and builds a dynamically updating DOM/CCSOM tree.
4. Painting Render Tree: Last stage is painting the nodes with help of back end layer

<br/>

---

## Creation of a Layout
![HTML CSS Parser](/img/painting.png?raw=true)

<br/>

- The render tree does not have a location or size when nodes are added. The goal of this Layout stage is to calculate these values
- This step looks into the elements and figures out where it needs to go on the page.
- It will see the sizes and position of the elements and try to calculate the line breaks, placement of each of the elements and the relationship between the elements.