require("./Config/database");
require("dotenv").config();
let express = require("express");
let bodyParser = require("body-parser");
const cors = require("cors");
let app = express();
app.use(
  cors({
    origin: "*",
  })
);
// Routes

let adminRoutes = require("./routes/admin/admin-routes");
let levelRoutes = require("./routes/level/level-routes");
let questionRoutes = require("./routes/Question/question-routes");
let headingRoutes = require("./routes/heading/heading-routes");
let mediumRoutes = require("./routes/medium/medium-routes");
let boardRoutes = require("./routes/Board/board-routes");
let gradeRoutes = require("./routes/Grade/grade-routes");
let topicRoutes = require("./routes/topic/topic-routes");
let courseRoutes = require("./routes/course/course-routes");
let subjectRoutes = require("./routes/subject/subject-routes");
let paperRoutes=require("./routes/paper/paper-routes")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 9999;
app.use(
  "/api",
  courseRoutes,
  subjectRoutes,
  adminRoutes,
  topicRoutes,
  mediumRoutes,
  boardRoutes,
  gradeRoutes,
  levelRoutes,
  questionRoutes,
  headingRoutes,
  paperRoutes
);
app.listen(port, function () {
  console.log("Running on port " + port);
});
module.exports = app;
