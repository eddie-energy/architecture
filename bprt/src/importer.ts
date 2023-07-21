import {importBPRTIssuesIntoGitHub} from "./index";


const filePath = process.argv[2];

if (filePath) {
  importBPRTIssuesIntoGitHub(filePath)
    .then(() => console.log("Done importing issues!"));
} else {
  console.log("Please provide a file path as a command-line argument.");
}