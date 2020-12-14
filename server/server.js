const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const port = 3004                           // In which it runs
app.use(express.urlencoded())
// Sends index.html file to the browser
app.get('/', (req, res) => {
    console.log("Redered Index.html file")
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/getdata', (req, res) => {
    fs.readFile('./data.txt', (err, file) => {
        if(err)
            throw err
        else
        {
            res.status(200).send(file)
        }
    })
})
app.post('/savedata', (req, res) => {
    // Accessing data inside req.body
    var edata = {
	    Employee_name: req.body.ename,
        joining_data: req.body.edate,
        qualification : req.body.eqfn,
        mail : req.body.e_mail,
        role : req.body.erole
    }
    // Settinf File path
	var filePath = __dirname + '/data.txt'
    // Writing the file
	fs.appendFile(filePath, JSON.stringify(edata), function(err) {
        if (err) 
            console.log(err)
        // Sending response
		res.status(200).json({
			message: "File successfully written"
		})
    })
})
app.put('/updatedata', (req, res) => {
    console.log('Data id will be updated ');
    res.status(200).json({ msg : 'Data Updated successfully' })
})
app.delete('/deletedata', (req, res) => {
    console.log('Data id will be deleted from db !!!')
    res.status(200).json({ Msg : 'Data Deleted Succesdfully' })
})
app.listen(port, () => { console.log("Server is running at ---" + port) })