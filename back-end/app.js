const queryDb = require('./PgConnector');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json(), cors())

/*app.get(), app.post(), app.put(), app.delete() */

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/posts', async (req, res) => {
    let posts = await queryDb("SELECT * FROM full_post_info;"); TRASH ASWELL USE KNEX (NOT REQUIRED)
    console.log(posts)
    res.send(posts)
})

app.get('/api/posts/:id', async (req, res) => {
    let post = await queryDb("SELECT * FROM full_post_info where id=$1;", [req.params.id]);
    if (post == undefined || post.length == 0){
        res.status(404).send('Post not found');
    }else{    
        res.send(post);
    }
})

app.post('/api/posts', async (req, res) => {
    const query = `INSERT INTO public.posts(authorid, title, body)VALUES ($1, $2, $3) returning id, authorid, title, body;`
    let newPost = await queryDb(query, [parseInt(req.body.authorid, 10), req.body.title, req.body.body]);
    res.send(newPost);
})


app.get('/api/users', async (req, res) => {
    let posts = await queryDb("SELECT * FROM public.users;"); ALL OF THIS IS TRASH UE ABSTRACTION AND DEVISION TO COMPONENTS
    console.log(posts)
    res.send(posts)
})

app.get('/api/users/:id', async (req, res) => {
    let post = await queryDb("SELECT * FROM public.users where id=$1;", [req.params.id]);
    if (post == undefined || post.length == 0){
        res.status(404).send('Post not found');
    }else{    
        res.send(post);
    }
})
app.get('/api/comments', (req, res) => {
    res.send(req.query); // displays the url query aka ?id=4&sorby=id:desc
})

app.post('/api/comments', async (req, res) => {
    const query = `INSERT INTO public.comments(postid, authorid, body)VALUES ($1, $2, $3) returning id, authorid, title, body;`;
    let newComment = await queryDb(query, [parseInt(req.body.postid), parseInt(req.body.authorid).title, req.body.body]);
    res.send(newComment);
})

   
app.listen(3000, () => console.log('listening on port 3000'));