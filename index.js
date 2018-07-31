const app = require('express')();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const quotes = [
        '"I am standing when the ball comes, that\'s why I don\'t have to move. I can read the game" - Jan-Ove Waldner',
        '"Being the best is not good enough. Try harder. Just make sure having fun is a central component of striving for excellence." - Carl Horowitz',
        '"Championships are won at practice." - Unknown',
        '"EVERY BALL COUNTS" - Sir Matt',
        '"Table Tennis is like an atom. To the ignorant it is merely microscopic and insignificant in existance, but to the dedicated, it is intricate in design and the building block to everything we know." - Matt Hetherington'
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.send(randomQuote);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});
