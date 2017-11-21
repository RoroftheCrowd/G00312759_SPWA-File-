var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')));
//The following app.get functions are used to display the text connected to the images on the index.html page. Each one has information on the plot,title and publication history
app.get('/', function(req, res) {
	console.log("file io");
    res.sendFile(path.join(__dirname + '/index.html'));
	
	
});

//app.get for The Shining
 app.get('/shine', function (req, res) {
res.send('<h1>The Shining</h1><img src="http://thebooksmugglers.com/wp-content/uploads/2013/09/9781444720723.jpg" height="350" width="220"><h4>Plot Summary:</h4>Jack Torrance, his wife Wendy, and their young son Danny move into the Overlook Hotel, where Jack has been hired as the winter caretaker. Cut off from civilization for months, Jack hopes to battle alcoholism and uncontrolled rage while writing a play.<p> <h4>Publication History:</h4>Published in 1977, it is Kings third published novel and first hardback bestseller: the success of the book firmly established King as a preeminent author in the horror genre. The setting and characters are influenced by Kings personal experiences, including both his visit to The Stanley Hotel in 1974 and his recovery from alcoholism. ');
 })
 
 //app.get for Salem's Lot
 app.get('/salem', function (req, res) {
res.send('<h1>Salems Lot</h1><img src="https://larryfire.files.wordpress.com/2015/01/salemslot-gift300dpi.jpg" height="350" width="220"><h4>Plot Summary:</h4>Salems Lot is a 1975 horror fiction novel written by the American author Stephen King.<p> It was his second published novel. The story involves a writer named Ben Mears who returns to the town of Jerusalems Lot (or Salems Lot for short) in Maine, where he had lived from the age of five through nine, only to discover that the residents are becoming vampires.<p> <h4>Publication History:</h4>While teaching a high school Fantasy and Science Fiction course at Hampden Academy, King was inspired by Dracula, one of the books covered in the class. "One night over supper I wondered aloud what would happen if Dracula came back in the twentieth century, to America. He would probably be run over by a Yellow Cab on Park Avenue and killed, my wife said. (In the Introduction to the 2004 audiobook recording that Stephen King read himself, he says it was he who said "Probably he would land in New York and be killed by a Taxi Cab, like Margaret Mitchell in Atlanta", and it was his wife who suggested a rural setting for the book.' );
 })
 
 //app.get for Carrie
 app.get('/carrie', function (req, res) {
res.send('<h1>Carrie</h1><img src="https://i.pinimg.com/736x/2a/24/76/2a2476abb408b64c5595bf776f01f9a8--carrie-book-carrie-movie.jpg" height="350" width="220"><h4>Plot Summary:</h4>Set primarily in the then-future year of 1979, it revolves around the eponymous Carrie White, a misfit and bullied high school girl who uses her newly discovered telekinetic powers to exact revenge on those who torment her. While in this process, she causes one of the worst local disasters in American history.<p> <h4>Publication History:</h4> Carrie was actually Kings fourth novel, but it was the first one to be published. It was written while he was living in a trailer, on a portable typewriter (on which he also wrote Misery) that belonged to his wife Tabitha. It began as a short story intended for Cavalier magazine, but King tossed the first three pages of his work in the garbage.');
 })
 
 //app.get for Misery
  app.get('/misery', function (req, res) {
res.send('<h1>Misery</h1><img src="https://images-na.ssl-images-amazon.com/images/I/51TD-f07NpL._SX324_BO1,204,203,200_.jpg" height="350" width="220"><h4>Plot Summary:</h4> After a serious car crash, novelist Paul Sheldon is rescued by former nurse Annie Wilkes , who claims to be his biggest fan. Annie brings him to her remote cabin to recover, where her obsession takes a dark turn when she discovers Sheldon is killing off her favorite character from his novels. As Sheldon devises plans for escape, Annie grows increasingly controlling, even violent, as she forces the author to shape his writing to suit her twisted fantasies.<p> <h4>Publication History:</h4> When King was writing Misery in 1985 he planned the book to be released under the pseudonym Richard Bachman but the identity of the pseudonym was discovered before the release of the book. ');
 })
 
//app.get for Christine
app.get('/christine', function (req, res) {
res.send('<h1>Christine</h1><img src="http://lostamerica.com/wp-content/uploads/2011/12/Christine_StephenKIng.jpg" height="350" width="220"><h4>Plot Summary:</h4>Unpopular nerd Arnie Cunningham buys a 1958 Plymouth Fury, which he names Christine. Arnie develops an unhealthy obsession with the car, to the alarm of his jock friend, Dennis Guilder. After bully Buddy Repperton defaces Christine, the auto restores itself to perfect condition and begins killing off Buddy and his friends. Determined to stop the deaths, Dennis and Arnies girlfriend, Leigh Cabot , decide to destroy Christine.<p> <h4>Publication History:</h4> In April 2013, PS Publishing released Christine in a limited 30th Anniversary Edition.');
 })
 
 //app.get for 11/22/63
app.get('/eleven', function (req, res) {
res.send('<h1>11/22/63</h1><img src="https://vignette3.wikia.nocookie.net/11-22-63/images/1/17/Novel.jpg/revision/latest?cb=20150524124943" height="350" width="220"><h4>Plot Summary:</h4> Jake Epping, a recently divorced English teacher from Maine, is presented with the chance to travel back in time to Dallas, Texas, in 1960 by his longtime friend Al Templeton. He is convinced into going and attempts to prevent the assassination of JFK in November 1963. However, he becomes attached to the life he makes in the past and this could be his missions undoing.<p> <h4>Publication History:</h4> According to King, the idea for the novel first came to him in 1971, before the release of his first novel, Carrie (1974). He was going to title it Split Track. However, he felt a historical novel required more research than he was willing to do at the time and greater literary talent than he possessed. Like his novel Under the Dome (2009), he abandoned the project, returning to the story later in life.');
 })

 
 
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.listen(8080);
//When node is initiated the website will be visible on the browser by typing "http://localhost:8081/" in the URL bar .
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})