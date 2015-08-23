#!/usr/bin/env node

var npm = require("npm");
var shell = require("shelljs");

/*-------------------------------------
Minifying file code
-------------------------------------*/

//Get name of main file file
if (process.argv.indexOf("-minify") != -1) { //does our flag exist?
  var min_file;
  min_file = process.argv[process.argv.indexOf("-minify") + 1]; //grab the next item
  var out_file = process.argv[process.argv.indexOf("-o") + 1]; //grab the next item
 
  shell.exec("browserify " + min_file + " -o " + out_file);
  
}


if (process.argv.indexOf("--git") != -1) { //does our flag exist?

  var repo_name = process.argv[process.argv.indexOf("-repo") + 1]; //grab the next item
  var username = process.argv[process.argv.indexOf("-username") + 1]; //grab the next item
  
  shell.exec("curl --data '{\"name\":\"" + repo_name + "\"}' -X POST -u " + username + " https://api.github.com/user/repos");
  shell.exec("git remote add origin https://github.com/"+username+"/"+repo_name+".git")
  shell.exec('git push -u origin master')
}



/*-------------------------------------
End of minify code
-------------------------------------*/