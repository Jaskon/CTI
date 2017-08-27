var fs          = require('fs');
var bodyParser  = require('body-parser');
var express     = require('express');
var app         = new (express)();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, pass');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE');
    console.log(req.url, req.body);
    return next();
});


app.use(express.static(__dirname + './../src/assets'));



/* RAM DATABASE */

// Affiches
var affiches = [{
    title: 'Affiche title 1',
    link: 'link-1',
    text: '<img alt="" src="http://vignette2.wikia.nocookie.net/mlp-gameloft/images/d/d8/Fluttershy_vector.png/revision/latest?cb=20131128034059" style="float:left; height:144px; width:200px">Ullamco mollit minim aliquip aliqua velit ut exercitation enim et eu nulla aliqua culpa adipisicing pariatur enim exercitation minim ex dolor tempor consectetur consectetur excepteur irure sint id ea et mollit elit sint labore consectetur aute culpa exercitation officia excepteur aliquip quis nulla enim aute deserunt nisi ullamco dolor dolor sit aliquip exercitation nostrud occaecat voluptate aute nulla dolor non eiusmod mollit sit deserunt culpa proident occaecat incididunt laborum commodo nisi proident sint laboris aliqua enim voluptate veniam ullamco duis duis ad nulla dolore proident dolor eiusmod veniam in velit ut sunt fugiat dolore occaecat excepteur sunt aliqua ullamco ullamco dolore eu aute officia reprehenderit amet deserunt elit occaecat velit laborum ullamco nulla laboris cupidatat velit culpa nulla ex sed anim sed pariatur qui sed deserunt consequat reprehenderit qui in pariatur consectetur proident eu dolore minim est commodo non ut in velit labore aliqua enim proident anim adipisicing dolor qui nostrud ea nulla tempor enim irure ullamco excepteur incididunt exercitation enim consectetur aliqua do dolore in sint ex laborum veniam dolor eu est eiusmod in cillum labore duis ullamco ut sunt dolore voluptate minim consectetur occaecat irure ut elit dolore eiusmod fugiat aute tempor ullamco labore velit labore aute in ut in ut eu dolor consectetur.'
}, {
    title: 'Affiche title 2',
    link: 'link-2',
    text: '<span style="font-size:8pt">Ullamco mollit minim aliquip aliqua velit ut exercitation enim et eu nulla aliqua culpa adipisicing pariatur enim exercitation minim ex dolor tempor consectetur consectetur excepteur irure sint id ea et mollit elit sint labore consectetur aute culpa exercitation officia excepteur aliquip quis nulla enim aute deserunt nisi ullamco dolor dolor sit aliquip exercitation nostrud occaecat voluptate aute nulla dolor non eiusmod mollit sit deserunt culpa proident occaecat incididunt laborum commodo nisi proident sint laboris aliqua enim voluptate veniam ullamco duis duis ad nulla dolore proident dolor eiusmod veniam in velit ut sunt fugiat dolore occaecat excepteur sunt aliqua ullamco ullamco dolore eu aute officia reprehenderit amet deserunt elit occaecat velit laborum ullamco nulla laboris cupidatat velit culpa nulla ex sed anim sed pariatur qui sed deserunt consequat reprehenderit qui in pariatur consectetur proident eu dolore minim est commodo non ut in velit labore aliqua enim proident anim adipisicing dolor qui nostrud ea nulla tempor enim irure ullamco excepteur incididunt exercitation enim consectetur aliqua do dolore in sint ex laborum veniam dolor eu est eiusmod in cillum labore duis ullamco ut sunt dolore voluptate minim consectetur occaecat irure ut elit dolore eiusmod fugiat aute tempor ullamco labore velit labore aute in ut in ut eu dolor consectetur.</span>'
}];
affichesNumb = 3;

var affichesPreviews = [{
    title: 'Affiche title 1',
    img: 'http://vignette2.wikia.nocookie.net/mlp-gameloft/images/d/d8/Fluttershy_vector.png/revision/latest?cb=20131128034059',
    link: 'link-1',
    description: 'Sed cillum officia consectetur veniam aute est aliquip deserunt in aliqua consequat reprehenderit laborum ut sit ut officia excepteur ullamco minim officia minim eiusmod ut in consectetur mollit aliquip.',
}, {
    title: 'Affiche title 2',
    img: 'img1',
    link: 'link-2',
    description: 'Anim sunt ea mollit exercitation qui voluptate reprehenderit deserunt ex exercitation.',
}];

// Projects
var projects = [{
    title: 'Project 1',
    link: 'link-1',
    text: 'Project 1 full description'
}, {
    title: 'Project 2',
    link: 'link-3',
    text: 'Project 2 full description'
}];

var projectsPreviews = [{
    title: 'Project 1',
    link: 'link-1',
    img: 'img1',
    description: 'Project 1 short description'
}, {
    title: 'Project 2',
    link: 'link-3',
    img: 'img2',
    description: 'Project 2 short description'
}];




/* ROUTES */

// Affiches
app.get('/api/affiches', function(req, res, next) {
    res.json({
        message: '[Server message] Got affiches',
        data: affichesPreviews
    });
});


app.get('/api/affiche/:id', function(req, res, next) {
    var i;
    for (i = 0; i < affiches.length; i++)
        if (affiches[i].link === req.params.id)
            break;

    res.json({
        message: '[Server message] Got affiche ' + req.params.id,
        data: {
            title: affiches[i].title,
            text: affiches[i].text,
            img: affichesPreviews[i].img,
            description: affichesPreviews[i].description,
        }
    });
});

// Projects
app.get('/api/projects', function(req, res, next) {
    res.json({
        message: '[Server message] Got projects',
        data: projectsPreviews
    });
});


app.get('/api/project/:id', function(req, res, next) {
    var i;
    for (i = 0; i < projects.length; i++)
        if (projects[i].link === req.params.id)
            break;

    res.json({
        message: '[Server message] Got project ' + req.params.id,
        data: projects[i]
    });
});


app.post('/api/admin/login', function(req, res, next) {
    //req.body.username;
    //req.body.password;

    //res.json({
        //state: 'success' | 'wrong-pass' | 'wrong-login'
        //message: '[Server message] Logged in as ...' | 'Wrong password' | 'Wrong username'
    //});
});

app.post('/api/admin/change-password', function(req, res, next) {
    //req.headers.pass;
    //req.body.oldPass;
    //req.body.newPass;

    //res.json({
        //state: 'success' | 'wrong-pass' | 'no-new-pass'
        //message: '[Server message] Password changed' | 'Wrong password' | 'No new password'
    //});
});

// Adding new affiche
app.post('/api/admin/affiche', function(req, res, next) {
    //req.headers.pass;
    //req.body.title;
    //req.body.text;

    //res.json({
        //state: 'success' | 'no-permissions'
        //message: '[Server message] Affiche added' | 'No title' | 'No text' | 'No permissions'
    //})

    affiches.push({
        title: req.body.title,
        text: req.body.text,
        link: 'link-' + affichesNumb
    });
    affichesPreviews.push({
        title: req.body.title,
        img: req.body.img,
        link: 'link-' + affichesNumb++,
        description: req.body.description
    });

    res.json({
        state: 'success',
        message: '[Server message] Affiche added'
    });
});

// Changing existing affiche
app.put('/api/admin/affiche/:id', function(req, res, next) {
    var i;
    for (i = 0; i < affiches.length; i++)
        if (affiches[i].link === req.params.id)
            break;

    affiches[i].title = req.body.title;
    affiches[i].text = req.body.text;
    affichesPreviews[i].title = req.body.title;
    affichesPreviews[i].img = req.body.img;
    affichesPreviews[i].description = req.body.description;

    res.json({
        state: 'success',
        message: '[Server message] Affiche changed'
    });
});

// Deleting
app.delete('/api/admin/affiche/:id', function(req, res, next) {
    var i;
    for (i = 0; i < affiches.length; i++)
        if (affiches[i].link === req.params.id)
            break;

    affiches.splice(i, 1);
    affichesPreviews.splice(i, 1);

    res.json({
        state: 'success',
        message: '[Server message] Affiche deleted'
    });
});



app.listen(8080, function() {
    console.log('Server is running on port 8080');
});
