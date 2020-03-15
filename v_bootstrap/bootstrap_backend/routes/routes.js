// ROUTES FILE TO SET UP LINK TO DATABASE...

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'This message is coming from the routes file'
        });
    });
}


//ONCE THE ROUTER IS BUILT (ABOVE), WE EXPORT IT SO IT CAN BE USED IN THE APPLICATION

module.exports = router;