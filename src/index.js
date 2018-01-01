const app = require('./app');

const PORT = process.env.PORT || 3001;
console.log('MONGODB_URI', process.env.MONGODB_URI);
app.listen(PORT, (err) => {
    if (err) {
        console.error('Whoops!! something went wrong', err);
        return;
    }
    console.info(`Listening on port: ${PORT}`);
});
