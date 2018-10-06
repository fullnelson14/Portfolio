var gulp = require("gulp");
const pug = require("gulp-pug");

gulp.task("html", function moveHTML() {
  return gulp.src("./app/src/*.html").pipe(gulp.dest("./app/dist"));
});

gulp.task("pug", function buildHTML() {
  return gulp
    .src("./app/src/pug/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./app/dist"));
});

gulp.task("assets", function moveImagesFolder() {
  return gulp.src("./app/src/assets/**/*").pipe(gulp.dest(`./app/dist`));
});

gulp.task("default", ["pug", "assets"]);
