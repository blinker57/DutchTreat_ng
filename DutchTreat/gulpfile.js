var gulp = require("gulp");

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

  return merge(streams);
});