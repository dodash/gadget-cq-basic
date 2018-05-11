# A basic OpenSocial Gadget that uses ClearQuest (CQ) OSLC API [![Build Status](https://travis-ci.org/dodash/gadget-cq-basic.svg?branch=master)](https://travis-ci.org/dodash/gadget-cq-basic) [![Coverage Status](https://coveralls.io/repos/github/dodash/gadget-basic/badge.svg?branch=master)](https://coveralls.io/github/dodash/gadget-basic?branch=master)

## Intro
This is a project meant to be used as a starting point for creating an opensocial gadget that can interact with ClearQuest using OSLC API.

This project was bootstrapped with [Web app generator](https://github.com/yeoman/generator-webapp).

Before following the below steps, please refer to [Getting started with OpenSocial gadget development](https://github.com/dodash/gadget-cq-basic/wiki/Tutorial:-Getting-started-with-OpenSocial-gadget-development) to make sure you are ready to follow the below steps.

## Steps 
First install [Node](https://nodejs.org) 

Then [fork](https://help.github.com/articles/fork-a-repo/) and [clone](https://git-scm.com/docs/git-clone) this repository on your machine

Then open a command prompt to switch to the directory containing the repository that you cloned in the previous step.

Now install Node dependencies, this may take a few minutes.
```
npm install
```

Then install frontend dependencies
```
bower install
```

Run gulp serve to preview and watch for changes
```
gulp serve
```
You can now access the gadget from http://localhost:9000.

Run gulp serve:test to run the tests in the browser
```
gulp serve:test
```
Run gulp to build your webapp for production
```
gulp
```
Run gulp serve:dist to preview the production build
```
gulp serve:dist
```

## Adding to [DevOps Dashboards](http://www.cccqcommunity.com/dashboard_beta.html))
To add this gadget to the dashboards
* Goto the Add Gadget section and specify the URL to the gadget.xml file served by this application, e.g.
http://localhost:9000/gadget.xml
* Create an OAuth friend in the dashboards Administration section to establish friendship between ClearQuest and Dashboards as this gadget uses OAuth as the authentication mechanism while communicating with ClearQuest.
* Add the gadget on a page in your dashboard
* For more details on how to follow the above steps, refer to the [Devops Dashboards doucmentation](http://www.cccqcommunity.com/dashboard_beta.html)
* If you change the host/port, make sure you edit the gadget.xml and App.js file accordingly.

To know about the CQ specific code that this gadget provides refer to [gadget-cq-basic wiki](https://github.com/dodash/gadget-cq-basic/wiki)

## References
* [Getting started with OpenSocial gadget development for DevOps Dashboards](https://github.com/dodash/gadget-cq-basic/wiki/Tutorial:-Getting-started-with-OpenSocial-gadget-development)
* [cq-utils API documentation](https://github.com/dodash/cq-utils)
* [CQ OSLC V2 API](https://jazz.net/wiki/bin/view/Main/CqOslcV2)
* [CQ OSLC V1 API](https://jazz.net/wiki/bin/view/Main/RcmRestCmApi)
* [HCL provided OpenSocial gadget catalog](https://github.com/dodash/gadget-catalog)
* [OpenSocial gadget Javascript API](http://opensocial.github.io/spec/2.5.1/Core-Gadget.xml#JavaScript-API-Reference)
* [Get Started Writing Gadgets](https://developers.google.com/gadgets/docs/gs)
