//epizode_1
authUser(user: any){
const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   return  this.http.post(
    'http://localhost:3000/account/auth',
    user,
    httpOptions)
};

//epizode_2
this.flashMessage.show(data.msg,{
    cssClass: 'alert-danger',
    timeout: 4000
  }
  //epizode-3
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save(callback);
    })
});
bcrypt.compare(pathFromUser, userDBPath, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
});
//epizode_4
app.configure(function() {
  app.use(express.static('public'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
});
//in express4
var session = require("express-session"),
    bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


 


