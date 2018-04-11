var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

gulp.task("default", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(
    ["node_modules/boostrap/scss/boostrap.scss", "src/scss/*.scss"],
    [sass]
  );
});

gulp.task("default", ["js", server]);
