# Basic ClearQuest gadget  [![Build Status](https://travis-ci.org/dodash/gadget-cq-basic.svg?branch=master)](https://travis-ci.org/dodash/gadget-cq-basic) [![Coverage Status](https://coveralls.io/repos/github/dodash/gadget-cq-basic/badge.svg?branch=master)](https://coveralls.io/github/dodash/gadget-cq-basic?branch=master)
# A basic OpenSocial Gadget that uses ClearQuest (CQ) OSLC API

## Intro
This is a project meant to be used as a starting point for creating an opensocial gadget that can interact with ClearQuest using OSLC API.

This project was bootstrapped with [Web app generator](https://github.com/yeoman/generator-webapp).

Before following the below steps, please refer to [Getting started with OpenSocial gadget development](https://github.com/dodash/dodash.github.io/blob/master/README.md) to make sure you are ready to follow the below steps.

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

It contains the bolierplate code that you are most likely going to need to write any gadget for ClearQuest. 
Whenever a user accesses any CQ gadget for the first time, he will need to login to CQ and then select the CQ user db that he wants to work with. Also since it involves sending requests to CQ over network and then waiting for the response, we also need to show a loading message to indicate that the gadget is waiting for loading something. This gadget provides these basic functionalities out of the box so that you can directly start writing the core functionality. Below is the description about these out of the box functionalities provided by this gadget:
1. **OAuth based authentication with CQ**: This gadget contains the necessary code that is required to let you login to CQ using OAuth. However, before you can login to CQ, you need to establish OAuth friendship of the DevOps Dashboards with CQ and to do that you need to add an OAuth friend entry for your CQ deployment in the Administration section of the DevOps Dashboards. Refer to section 7. OAuth Friends in [DevOps Dashboards](http://www.cccqcommunity.com/uploads/1/0/2/7/102707030/2.hcl_dashboard_administration.pdf) regarding the details on how to add an OAuth friend.
The code that handles the login part is present in
* gadget-cq-basic\app\scripts\cqutil.js: _**makeRequest**_ method
* gadget-cq-basic\app\index.html: **_loginMessage_** div

2. UI for selecting CQ user db:  Renders a list of the available CQ servers (schema repositories) that have OAuth friendship with Dashboards as well as the list of user dbs for the selected schema repository.
The code that handles it is located in:
* gadget-cq-basic\app\index.html: **servers-container and databases-container** div elements
* gadget-cq-basic\app\scripts\cqutil.js: _**fetchOAuthFriends, loadDatabases, handleLoadDatabases, handleOAuthFromServer**_ methods

Refer to [cq-utils API documentation](https://github.com/dodash/gadget-cq-basic/blob/master/API.md) for a set of utility methods that help consume the ClearQuest OSLC API

## References
* [Getting started with OpenSocial gadget development for DevOps Dashboards](https://github.com/dodash/dodash.github.io/blob/master/README.md)
* [cq-utils API documentation](https://github.com/dodash/gadget-cq-basic/blob/master/API.md)
* [CQ OSLC V2 API](https://jazz.net/wiki/bin/view/Main/CqOslcV2)
* [CQ OSLC V1 API](https://jazz.net/wiki/bin/view/Main/RcmRestCmApi)
* [HCL provided OpenSocial gadget catalog](https://github.com/dodash/gadget-catalog)
* [OpenSocial gadget Javascript API](http://opensocial.github.io/spec/2.5.1/Core-Gadget.xml#JavaScript-API-Reference)
* [Get Started Writing Gadgets](https://developers.google.com/gadgets/docs/gs)
