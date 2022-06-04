// get environment variables dynamically and create environment.ts file
const fs = require("fs");

// https://cxxyao2.github.io/angular-deploy-github-and-heroku.html
const targetPath = "./src/environments/environment.ts";
const envConfigFile = `export const environment = {
  production: '${process.env.PRODUCTION}',
  API_KEY: '${process.env.API_KEY}',
  TAILWIND_MODE: 'build',
  NODE_ENV: 'production'
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/AngularAppTest'));

app.get('/*', function(req,res) {  
  res.sendFile(path.join(__dirname+'/dist/AngularAppTest/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);