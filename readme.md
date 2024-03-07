1 create index.html file
2 do npm init 
3  install react and react-dom 
4 install parcel as dev dependency i:e npm i -D parcel for hmr - then you can use commnads like parcel index.html for start
5 inside package.json set start command for parcel index.html & "build" : "parcel build index.html"
6 then you can run -  npm run start

7 your html file where you have created a div with root id and inside that h1 tag which says hello world would show up in the browser now 

- to initialize git repo inside our lappy from remote we do - git init
- to change branch from master to main we do - git branch -M main (from master)
- git add .
- git commit -m "add comment"
- git remote add origin git@github.com:reponame/reponame.git
- git push -u origin main 
-----------------------------------------------------------------------
1- first task is to create an element using js
2 - second create an element using react    
3 - third create an element using jsx in react
    react element can be rendered direclty by just putting its name 
    where as for react jsx element we need to wrap it in like this > <Heading/> n write its first letter as capital 
------------------------------------------------------------------------------------------------------------------------

#creating quotes generator using this quotes API - "https://api.quotable.io/quotes"
#making api call using react - using this approach = load > render > api > re-render it helps in better ux 
- react has best rendering mechanism
- using useEffect hook 
        - here inside a useEffect hook we have two argument 1. callback function and 2.Dependency array 
        -inside useEffect cb fn() write fetch data 
        - fetch() given by the browser will help us to get api data 
        - to resolve we can use old method like  .then() .then() and catch() or else we can use new method async await
        - then convert data to json
-------------------------------------------------------------------------------------------------------------------------

What is github - it is an hosting platform often refered to as cloud that lets dev manage
and track their source code and its progression over time using a version control system.
github is userinterface that works direclty with a version control system in this case git , it
gives us a ability to host our code on cloud 

what is source code - in simplest terms its a bunch of files and folders with code in them

version control - its a software tool that helps developers manage and track their code over 
time







