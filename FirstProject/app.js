const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    let user ={
        name: 'Sugam Karmakar',
        age: 28,
        email: 'sugam.karmakar338@gmail.com',
        address: '138/1 H.M Road B.T College, New Barrackpur',
        phone: '+91-7044197767',
        occupation: 'Software Developer',
        hobbies: ['Footbal', 'Gym', 'Coding'],
        programming: 'Node JS',
        city: 'Kolkata'
    };
    res.write(JSON.stringify(user));
    res.end();
}).listen(1000);