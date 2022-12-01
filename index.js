const http = require('http')

const fs = require('fs')
const homePage = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const notFound = fs.readFileSync('notFound.html')

const server = http.createServer((req, res) => {
    // console.log(req.url)
    // res.end("Hello Node.js")

    if (req.url === '/about') {
        res.end(aboutPage)
    } else if (req.url === '/contact') {
        res.end(contactPage)
    } else if (req.url === '/')
        res.end(homePage)
    // else {
    //     res.writeHead(404)
    //     res.end(PageNotFound)
    // }
})
server.listen(3030)