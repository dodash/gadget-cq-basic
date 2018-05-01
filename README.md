# A basic OpenSocial Gadget that uses ClearQuest (CQ) OSLC API
## Intro
This is a project meant to be used as a starting point for creating an opensocial gadget that can interact with ClearQuest using OSLC API.

This project was bootstrapped with [Web app generator](https://github.com/yeoman/generator-webapp).

## Steps 
First install the Node dependencies, this may take a few minutes.
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
You can now access the gadget from http://localhost:9000

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

## Adding to an Open Social Container (like [DevOps Dashboards](http://www.cccqcommunity.com/dashboard_beta.html))
To add this gadget to an open social container, specify the URL to the gadget.xml file served by this application, e.g.
http://localhost:9000/gadget.xml
If you change the host/port, make sure you edit the gadget.xml and App.js file accordingly.

## References
* [cq-utils API documentation](https://github.com/dodash/cq-utils)
* [CQ OSLC V2 API](https://jazz.net/wiki/bin/view/Main/CqOslcV2)
* [CQ OSLC V1 API](https://jazz.net/wiki/bin/view/Main/RcmRestCmApi)
* [HCL provided OpenSocial gadget catalog](https://github.com/dodash/gadget-catalog)
