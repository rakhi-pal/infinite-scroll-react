## Problem Statement:

Create an responsive infinite scrolling list in react for a fixed array of items.

## Specs:
The app must be a authenticated app. It can accept fake login with details, username: foo, password: bar.
Post login route is '/home'. This route shows our main list UI. This page shouldn't be accessible by non logged in users.
logged in pages must show logout button. On click of this logout it will redirect to the login page.
There's no need to implement a server for fake login functionality. We're not going to judge you for doing so.
UI must be built using react.
The list is a contact list of user and photo. It can look like this. This design is just for your reference. Any deviations from this design is fine. There's no need for drop down or drawers. Just a list is sufficient.
It should look correct at least for a 320x480 sized view-port.
You can use a static list of users like this or use this free random user api if you fancy that.
Initially only load a partial list and when user scrolls to end of page. App shows loading feedback and loads more contacts after a delay of 1 sec.
You can use any open source lib. That's fine.


## Introduction

This project is developed using React with functional components and hooks(ES6+).
It uses React-router-dom for routing to different pages. It also uses Material UI components. It provides a responsive infinite scrolling list with the following reuirements met.
1.	The app must be a authenticated app.
2.	Post Login we should display the home page with the list of contacts.
3.	The list is a contact list of user and photo.
4.	The app should be responsive.
5.	Initially, a partial list is loaded.
6.	 App shows loading feedback and loads more contacts after a delay of 1 sec.

## Installation and Running test cases
● yarn/nmp is used as a package manager 

Steps to run the application -
● "npm i" can be used to download the dependencies
● "npm run start" can be used to run the application (http://localhost:3000 to be accessed in the browser).
● for login -> username: "foo", password: "bar" can be used.

## Design Decisions

1. Function component based development methodology is used.
2. I have though of having seperation of concerns while designing this simple application.
3. You can find the seperation of the concerns in the src/components directory.
4. Multiple components are created to handle different functionalities.
5. Custom hooks are created for implementing fetching the data on infinite scroll and managing the login session.
6. Material UI is used for creating the components.
7. Error handling for wrong username/password.
8. Skeleton loader is used to display the loading feedback.
9. The contact info is displayed as (user pic, user name, user email, user phone number and cell number)
10. Snapshot testing is added using jest and @testing-library/react

## Trade offs or Further Enhancements/Limitations - if given extra time

 ● TypeScript was prefered to be used here, but since I am new to TypeScript I have purposefully opted out of it. I wanted to display what I am strong with.
 
 ● We can have Bi-directional infinite scroll which will help us to remove the earlier dom nodes based on the visible nodes in the current viewport.
 
 ● Performance of the application can be improved.
 
 ● UI can be enhanced further.
 
 ● Currently all the strings are hardcoded, it can be further enhanced to support Localization.

 
