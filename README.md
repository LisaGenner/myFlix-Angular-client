# MyFlixAngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

# Objective
Uses Angular, I built the client-side for an application called myFlix based on
its existing server-side code (REST API and database), with supporting
documentation.

# The 5 W’s

● Who—The users of the myFlix movie app and codebase, including other developers and
designers.

● What—A single-page, responsive movie app built with Angular, with routing and several
interface views. The client-side developed in this Achievement will support the existing
server-side from Achievement 2 by facilitating user requests and rendering the response from
the server-side via a number of different interface views. The app will be accompanied by
relevant documentation and handoff deliverables, including a kanban board containing user
stories and story points.

● When—Users will be able to use the app whenever they want to read information about
different movies or update their user information.

● Where—The app will be hosted online. It is responsive and can therefore be used anywhere
and on any device, giving all users an equal experience.

● Why—Movie enthusiasts like to be able to access information about different movies,
directors, and genres whenever they want. The app will demonstrate your Angular skills and
your ability to create straightforward documentation for other developers and employers.

# Design Criteria

User Stories

● As a user, I want to be able to receive information on movies, directors, and genres so that I
can learn more about movies I’ve watched or am interested in.

● As a user, I want to be able to create a profile so I can save data about my favorite movies.

# Key Features

● Your app displays a welcome view where users will be able to either log in or register an
account.

● Once authenticated, the user should now view all movies.

● Upon clicking on a particular movie, users will be taken to a single movie view, where
additional movie details will be displayed. The single movie view will contain the following
additional features:

● A button that when clicked takes a user to the director view, where details about the
director of that particular movie will be displayed.

● A button that when clicked takes a user to the genre view, where details about that
particular genre of the movie will be displayed.

# Technical Requirements

● The application is written in Angular (version 9 or later).

● The application requires the latest version of Node.js and npm package.

● The application contains user registration and login forms.

● The application is designed using Angular Material.

● The application's codebase contains comments using Typedoc.

● The project contains technical documentation using JSDoc.

● The project is hosted on GitHub Pages.
## Development server

Run #`ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Deploy
Whenever you make any changes to your application's code, all you need to do is redo Step 1 to generate a new build and push the new code. Both parts will be done automatically by angular-cli-ghpages once you run the command.

Step 1: Build your application (i.e., generate static HTML, CSS, and JavaScript files out of your application so that browsers can interpret them without the need to use any extra tools/plugins). To do so, run the following command, replacing <repository-name> with your own repository name: ng deploy --base-href=/<repository-name>/.

To deploy the app in your browser run "ng serve" in the terminal.  Once published you will be provided the location of the local server for the live development.  
    i.e. ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.    
