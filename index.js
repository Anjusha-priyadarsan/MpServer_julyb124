
// import json server
const jsonSerever=require('json-server')

// create serevr for mediaplayer application

const Mpserver=jsonSerever.create()

// create middileware

const middileware=jsonSerever.defaults()

// setup routes for json file in server

const route=jsonSerever.router('db.json')

// setting port for running server application

const PORT=3000||process.env.PORT

Mpserver.use(middileware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`mediaplayer server is running at the port ${PORT} and waiting for client request`);
    
})

