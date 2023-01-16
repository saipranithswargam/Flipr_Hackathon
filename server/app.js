require('dotenv').config()
const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const app=express();
const mongoose=require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const findOrCreate = require("mongoose-findorcreate");

const cors=require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTION,GET,POST,PUT,PATCH,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
const Tata = require("./schemas/tata")
const Reliance = require("./schemas/reliance")
const Eichermot = require("./schemas/eichermot")
const Cipla = require("./schemas/cipla")
const Bse = require("./schemas/bse")
const Nse = require("./schemas/nse")
const Ashok = require("./schemas/ashok")

const dataRouter = require("./routes/data");

app.use("/data", dataRouter);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  }));

app.use(passport.initialize());
app.use(passport.session())  

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => { console.log(err) });

const UserSchema = require("./schemas/user")


UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = new mongoose.model("User", UserSchema);
passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
}); 

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://flipr-hackathon.vercel.app/dashboard/usedgoogle",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id,username: profile.id}, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(new GitHubStrategy({
    clientID: process.env.GIT_CLIENT_ID,
    clientSecret: process.env.GIT_CLIENT_SECRET,
    callbackURL: "https://flipr-2e7c.onrender.com/auth/github/secret"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/logout",(req,res)=>{
  res.redirect("https://flipr-hackathon.vercel.app/")
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));
  app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: 'https://flipr-hackathon.vercel.app/login' }),
  function(req, res) {
    res.redirect('https://flipr-hackathon.vercel.app/dashboard/googleuser');
  });


app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/secret', 
  passport.authenticate('github', { failureRedirect: 'https://flipr-hackathon.vercel.app/login' }),
  function(req, res) {
    res.redirect('https://flipr-hackathon.vercel.app/dashboard/gituser');
  });



app.post("/register",(req,res)=>{
    User.register({username:req.body.username},req.body.password,(err,user)=>{

        if(err){
            console.log(err);
            res.send("The Given User already exists try to login please")
        }
        else
        passport.authenticate("local")(req,res,function(){
            res.redirect("https://flipr-hackathon.vercel.app/dashboard/usedUser");
        })

    })
   
    
})

app.post("/login",(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });
    
      req.login(user, function(err){
        if (err) {
          console.log(err);
          res.send("Error occured please try again !")
        } else {
          passport.authenticate("local")(req, res, function(){
            res.redirect("https://flipr-hackathon.vercel.app/dashboard/emailUser");
          });
        }
      });

});
app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/working",(req,res)=>{
    res.send("Working API");
});
app.get("/secret",(req,res)=>{
    // res.send("Working");.
    res.send({"value":true});
})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get("/login",(req,res)=>{
  res.render("register")
})

app.listen(process.env.PORT||3000,()=>{
    console.log("running on port 3000");
})