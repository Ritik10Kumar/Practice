//will use this when i need to run multiple instance of my code

const cluster = require('cluster');
const http = require('http');
const os = require('os');

// If we're the master process
if (cluster.isMaster) {
    // Fork workers for each CPU core
    const numCPUs = os.cpus().length;
    console.log(`Master process is running on PID: ${process.pid}`);

    // always use master process to overcome redundancy data
    setInterval(() =>{
        console.log("this is test console",`${process.pid}`) // this only console in master process not in other process , it  will not impact other process
    },1000)

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();  // Fork a worker for each CPU core
    }

    // Handle worker exit
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Worker processes have HTTP servers
    http.createServer((req, res) => {
        console.log(`Worker ${process.pid} received request at ${new Date().toISOString()}`);
        const delay = Math.floor(Math.random() * 2000) + 500; // 500ms to 2500ms
        
        setTimeout(() => {
            res.writeHead(200);
            res.end(`Hello from worker ${process.pid} after ${delay}ms delay`);
        }, delay);


    }).listen(8000);
    
    console.log(`Worker process is running on PID: ${process.pid}`);
    
}

// hit this curl to use pid  curl http://localhost:8000   , otherwise cluster will run without any load


