const http = require('http')        // Import core node module
const fs = require('fs')
const querystring = require('querystring')
const port = 3003
var ndserver = http.createServer((req, res) => {
    // printing requested url
    console.log("Requested URL  :  " + req.url)
    if(req.url == '/')
    {
        console.log("Sending employee form to client...")
        // Configuring response header
        res.writeHead(200, { 'Content-Type' : 'text/html' })
        // Accessing HTML file using file system
        fs.readFile('./index.html', (err, htmlfile) => {
            if(err)
                console.log(err)
            else
            {
                // Sending html response file
                res.write(htmlfile)
                console.log('Response Success')
                res.end()
            }
        })
    }
    else if( req.url == '/savedata' && req.method == 'POST')
    {
        console.log('Catching data from client')
        var client_data = ''
        // Event while hitting data from client
        req.on('data', (chunk) => {
            client_data += chunk
        })
        // Event After catching last data from client
        req.on('end', () => {
            qs = querystring.parse(client_data)
            var edata = '\n' +
                'Employee_name: ' + qs['ename'] + '\n' +
                'joining_data :' + qs['edate'] + '\n' + 
                'qualification :' + qs['eqfn'] + '\n' +
                'mail :' + qs['e_mail'] + '\n' +
                'role :' + qs['erole'] 
            console.log('Cathced Successfully... Saving Employee data')
            // Settinf File path
            var filePath = __dirname + '/data.txt'
            // Writing the file
            fs.appendFile(filePath, edata, function(err) {
                if (err) 
                    console.log(err)
                // Sending response
                res.writeHead(200, { 'Content-Type' : 'text/plain' } )
                console.log('Data saved succfully !!!')
                res.end()
            })
        })
    }
})
ndserver.listen(port, () => { console.log("Server Running at port ---> " + port) })
