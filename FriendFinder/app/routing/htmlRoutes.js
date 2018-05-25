
// include the path package to get the correct file path for the html
var path = require("path");
// ROUTING
module.exports = function (app) {
    // HTML GET Requests
    //get the survey page on these requests
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
