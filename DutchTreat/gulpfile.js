var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

var deps = {
  "jquery": {
    "scripts/*": ""
  },
  "jquery-validation": {
    "scripts/*": ""
  },
  "jquery-validation-unobtrusive": {
    "scripts/*": ""
  },
  "bootstrap": {
    "scripts/*": ""
  }
};

gulp.task('default', function() {
  var streams = [];

  for (var prop in deps) {
    console.log("Prepping Scripts for: " + prop);
    for (var itemProp in deps[prop]) {
      streams.push(gulp.src("node_modules/" + prop + "/" + itemProp)
        .pipe(gulp.dest("wwwroot/vendor/" + prop + "/" + deps[prop][itemProp])));
    }
  }

  gulp.task("minify", function() {
    return gulp.src("wwwroot/scripts/**/*.js")
      .pipe(uglify())
      .pipe(concat("dutchtreat.min.js"))
      .pipe(gulp.dest("wwwroot/dist"));
  })

  gulp.task('default', ["minify"]);

  return merge(streams);
});