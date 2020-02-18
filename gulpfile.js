const gulp = require("gulp");
var browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  reload = browserSync.reload,
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  del = require("del"),
  autoprefixer = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  paths = {
    gulpfile: ["./gulpfile.js"],
    pug: [".app/*.pug"],
    html: ["./app/**/*.html"],
    css: "./app/scss/*.scss",
    jsMain: "./app/js/script.js",
    jsLibs: [
      //"./node_modules/jquery/dist/jquery.js",
      //"./node_modules/slick-carousel/slick/slick.min.js",
      "./app/js/slick.min.js",
      "./node_modules/magnific-popup/dist/jquery.magnific-popup.js",
      "./app/js/wow.min.js"
    ]
  };

// Gulp task для поднятия локального сервера
gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
});

// Преобразование Pug в Html
gulp.task("pug", function() {
  return gulp
    .src("./app/*.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("./app"))
    .pipe(reload({ stream: true }));
});

// Обновляем страницу в браузере после изменений в галпфайле
gulp.task("gulpfile", function() {
  gulp.src(paths.gulpfile).pipe(reload());
});

// Обновляем страницу в браузере после изменений в галпфайле
gulp.task("html", function() {
  gulp.src(paths.html).pipe(reload());
});

// Конвертируем scss в css, после обновляем страницу
gulp.task("scss", function() {
  return (
    gulp
      .src(paths.css)
      .pipe(sass({ outputStyle: "expanded" }))
      //.pipe(sass({ outputStyle: "compressed" }))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["last 8 versions"]
        })
      )
      //.pipe(rename({suffix: ".min"}))
      .pipe(gulp.dest("./app/css"))
      .pipe(reload({ stream: true }))
  );
});

// Конвертируем файл script.js в main.js, помещаем в папку js, обновляем страницу
gulp.task("jsMain", async function() {
  return (
    gulp
      .src(paths.jsMain)
      .pipe(concat("main.js"))
      //.pipe(uglify())
      .pipe(gulp.dest("./app/js"))
      .pipe(reload({ stream: true }))
  );
});

// Конвертируем библиотеки js в общий js файл, переименовываем, сжимаем его, помещаем в папку js, обновляем страницу
gulp.task("jsLibs", async function() {
  return gulp
    .src(paths.jsLibs)
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./app/js"))
    .pipe(reload({ stream: true }));
});

// Следим за файлами и запускаем таск обновления файлов
gulp.task("watch", function() {
  gulp.watch("./app/*.pug", gulp.parallel("pug"));
  //gulp.watch(paths.html, gulp.parallel("html"));
  gulp.watch(paths.css, gulp.parallel("scss"));
  gulp.watch(paths.jsMain, gulp.parallel("jsMain"));
  gulp.watch(paths.gulpfile, gulp.parallel("gulpfile"));
});

// Таск по удалению папки продакшена dist
gulp.task("del", async function() {
  del.sync("dist");
});

// Таск по формированию папки в продакшен dist
gulp.task("export", async function() {
  let buildHtml = gulp.src("./app/**/*.html").pipe(gulp.dest("./dist"));

  let buildCss = gulp.src("./app/css/*.css").pipe(gulp.dest("./dist/css"));

  let buildJs = gulp
    .src(["./app/js/main.js", "./app/js/libs.min.js"])
    .pipe(gulp.dest("./dist/js"));

  let buildFonts = gulp
    .src("./app/fonts/**/*.*")
    .pipe(gulp.dest("./dist/fonts"));

  let buildImg = gulp.src("./app/img/**/*.*").pipe(gulp.dest("./dist/img"));
});

// Таск по предварительному конвертированию css и js
gulp.task("converting", gulp.parallel("scss", "jsLibs", "jsMain"));

// Таск по запуску сервера и слежению за файлами
gulp.task("watching", gulp.parallel("browser-sync", "watch"));

// Таск по совмещению del и export
gulp.task("build", gulp.series("del", "export"));

// Дефолтный таск (запуск сайта в браузере + слежение за изменениями в файлах)
gulp.task("default", gulp.series("converting", "build", "watching"));
