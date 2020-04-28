
app.get('/links', (req, res) => {

    var videoLinks = require("./database/videoLinks.json")

    return res.send({ videoLinks });

});

// Export the router

module.exports = router;