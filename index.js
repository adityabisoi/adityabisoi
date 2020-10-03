const ejs = require('ejs')
const fs = require('fs')
const axios = require('axios')

axios.get('https://api.github.com/users/adityabisoi/followers')
    .then((data) => printData(data.data))

function printData(followerData) {
    fs.readFile(__dirname + '/template.ejs', (err, data) => {
        if (err) throw err
        const writeData = ejs.render(data.toString(), {
            followers: followerData
        })
        fs.writeFileSync('README.md', writeData);
    })
}