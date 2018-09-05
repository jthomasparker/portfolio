const path = require('path');
const currentLayout = './public/_current/index.html';


module.exports = function(app){
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, currentLayout))
    })

}