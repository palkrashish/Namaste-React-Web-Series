# Namaste 🙏 React Web Series Course by [Akshay Saini](https://courses.namastedev.com/)

## Episode 02 - Igniting OurApp

<details >
<summary><b>Que 1 : - </b> What is Parcel?</summary>
<b>Parcel is beast.</b> In a parcel we can write the code. It's auto manually run our change in the browser without refresh the page manually.
<b>The zero configuration build tool for</b> <em>HTML,CSS, JavaScript, ReactJS, Vue, TypeScript, SASS, SVG, CoffeeScript many more </em>
<b>A build tool for the rest of us.</b>
Parcel starts with a great development experience, from starting a new project, to iterating and debugging, and shipping to production. No more fiddling with configuration, or spending hours to keep up with best practices – it just works!
<ol>
    <li>Zero Config</li>
    <li>Dev Build</li>
    <li>Local Server</li>
    <li>HMR - Hot Module Replacement</li>
    <li>File Watching :- Algo written in C++</li>
    <li>Caching - Faster Builds</li>
    <li>Image Optimization</li>
    <li>Minification</li>
    <li>Bundling</li>
    <li>Compressing</li>
    <li>Consistent</li>
    <li>Code Splitting</li>
    <li>Differential Bundling - {Support Old Browser}</li>
    <li>Diagnostic</li>
    <li>Error Handling</li>
    <li>HTTPs </li>
    <li> Tree Shaking - remove unused code </li>
    <li> Different dev and producation bundled </li>
 </ol>
 </details>
<br>

<details>  
<summary><b>Que 2 : -  </b>What is NPM ?</summary> 
<b>NPM is NOT A Node Package Manager 😂🙄😀</b>, Actually NPM is MANAGES A PACKAGE✌.
    <li> NPM is a package manager for the JavaScript Programming Language maintained by NPM.</li>
    NPM is the default package manager for the JavaScript runtime environment Node.js. In consists of a command line clinet also called NPM and an online database of public and paid - for private packages called the npm registry.
</details>
<br>

<details>  
<summary><b>Que 3 : - </b>What is Bundler, Webpack, parcel?</summary> 
<b>Bundler </b> A bundler in React is a tool that allows developers to package their code into a single file or bundle. This bundle can then be used to run the application in the browser. Bundlers are used to reduce the size of the code and improve the performance of the application. Common bundlers used with React are Webpack and Parcel.
<hr>
<b>Pros</b><br> Here is some props in Bundler
<ol>
<li><b>Optimization:</b> Bundlers allow you to optimize your application by minifying, compressing and tree shaking your code, which can make it faster to load and run.</li>
<li><b>Asset management:</b> Bundlers can handle different types of assets, such as images, fonts, and styles. It also allow to transpile code like javascript, scss or sass.</li>
<li><b>Code splitting:</b> Bundlers enable you to split your code into multiple chunks that can be loaded on demand, which can make your application more efficient by only loading the code that is necessary for the current user.</li>
<li><b>Modularity:</b> Bundlers allow you to use a modular approach to your code, by using import/export statements to organize your code in a way that makes it easy to reuse and manage.</li>
<li><b>Cross-browser compatibility:</b> Some bundlers can provide cross-browser compatibility through a set of loaders, which make sure that the code works well across different browsers.</li></ol>
<hr>
<b>Cons</b>
<ol>
<li><b>Complexity:</b> The configuration and setup of a bundler can be complex and may require a lot of time to understand, especially for developers new to React.</li>
<li><b>Performance cost:</b> The extra step of bundling can add some extra overhead to the build process and increase the time it takes to develop, test, and deploy your application. This can be especially noticeable when working on large projects or when using features that require more complex processing like code splitting or transpiling.</li>
<li><b>Additional Dependency:</b> You will need to maintain and update the bundler and its associated configuration. This can be a hassle if the tool or the way it's used changes rapidly or there is not good documentation or community support.</li>
<li><b>Learning Curve:</b>Depending on the complexity of the bundler, you may have to spend some extra time to get familiar with its features and how to set it up properly.</li>
<li><b>Debugging:</b> Debugging can be more difficult when using a bundler because the code that runs in the browser is transformed and minified, making it harder to understand.</li>
 </ol>
</details>
<br>

<details>  
<summary><b>Que 4 : - </b> What is difference between <b>tilde (~) and caret (^) </b> in package.json
 </summary> 
 <b>tilde (~)</b> basically you see tilde (~) in package.lock.json file. Actually, We run our project of any dependencies at the version which are a fixed. 

 ```
 "dependencies": {
        "color-name": "~1.1.4"
      },
 ```
 <b>Caret (^)</b> You see in both json file in package.json and package.lock.json. Its mean that you update regarding our version change react and react-dom or other dependencies.
 ```
   "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
 ```
</details>
<br>

<details>  
<summary><b>Que 5 : - </b> What is defference between <b>package.json and package.lock.json?</b></summary>
<b> package.json :-</b> It contains basic information about the project. What type of dependencies we are using in the project.<br> <b>OR</b><br>
It's a configuration of NPM. Its keep of track of what version of package installed of our system.
<br>
<b>package.lock.json :-</b> When we are going install any dependencies that time created packag.lock.json and node_moude files.
<br><b>OR</B><br>
Keeps trck of exact version of install ex:- Today realese ^2.8.6 version. IT's kind of lock version and keep records of version
Example.

```
npm install -D parcell or
npm install react or
npm install react-dom
```

</details>
<br>

<details>  
<summary><b>Que 6 : - </b> What is node_module? 
</summary>
node_module take all code from npm, Where did <b>npm install -D parcel</b>. Its go to npm and all all producation code, Which is npm finished. node_module like a database. It contain actual database.
<li><b>Our project needs a parcel, but parcel have own dependencies and those dependencies has own dependencies this is know as <em>"transit dependencies"</em> </b></li>
</details>
<br>

<details>  
<summary><b>Que 7 : - </b> What is integrity? 
</summary> 
The version of the package that should be installed. An integrity hash used to provide assurance that the package hasn't been tampered with. The resolved registry location indicating from where this package was retrieved and from where it should be retrieved for future installs
<img src="./img/hashintegrity.png">
</details>
<br>

<details>  
<summary><b>Que 8 : - </b>How many package.json in our project?
</summary> 
There is n number of package.json files in every project. We can see package.json in the node module. Click of any folder it is available the package.json file is available.
</details>
<br>

<details>  
<summary><b>Que 9 : - </b> Should I push on everything on the producation?
</summary> 
<b>NO </b> What ever you re-generated, Kindly don't put it on GitHub or Producation
</details>
<br>

<details>  
<summary><b>Que 10 : - </b>Why is not good to create a project using CDN?</summary> 
Because, When all necessary things are available in the node_module. So doesn't need  again use CDN
</details>
<br>
