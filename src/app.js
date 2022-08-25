let express = require('express')
let bodyParser = require('body-parser')

const app = exprpess()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened: true}))

require('./route.js')(app)
//ข้อ1
app.put('/app',function add(input,input){
    return input+input;
    }
)
//2
app.put('/app',function add(input){
    sum =1;
    for (input =1; input<=input;input++){
        sum *= input;
    
    }
    console.log("%input! = %input",sum)
    retrun =0   ;
}
)
let port = 8085

app.listen(port, function () {
    console.log('server running on ' + port)
})