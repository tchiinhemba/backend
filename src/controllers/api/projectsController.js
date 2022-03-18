
const result = require('../../services/github');


exports.projects = (req, res) => {
    res.json(result)
}