const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const thumbsupply = require('thumbsupply');

app.use(cors());

const videos = [
    {
        id: 0,
        poster: '/video/0/poster',
        //duration: '3 mins',
        name: 'Title 1',
        category: 'cat 1'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '4 mins',
        name: 'Title 2',
        category: 'cat 2'
    },
    {
        id: 0,
        poster: '/video/0/poster',
        //duration: '2 mins',
        name: 'Title 3',
        category: 'cat 3'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },

    {
        id: 2,
        poster: '/video/2/poster',
        //duration: '2 mins',
        name: 'Title 4',
        category: 'cat 4'
    },
];

// app.get('/video', (req, res) => {
//     res.sendFile('assets/sample.mp4', { root: __dirname });
// });

app.get('/videos', (req, res) => res.json(videos));

app.get('/video/:id/data', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(videos[id]);
});

app.get('/video/:id', (req, res) => {
    const path = `assets/${req.params.id}.mp4`;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1]
            ? parseInt(parts[1], 10)
            : fileSize-1;
        const chunksize = (end-start) + 1;
        const file = fs.createReadStream(path, {start, end});
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
});

app.get('/video/:id/poster', (req, res) => {
    thumbsupply.generateThumbnail(`assets/${req.params.id}.mp4`)
    .then(thumb => res.sendFile(thumb));
});

app.listen(4000, () => {
    console.log('Listening on port 4000!')
});