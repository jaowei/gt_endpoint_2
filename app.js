const express = require('express');

const app = express();
const port = 3002;

app.get('/two', async (req, res) => {
    try {
        message = req.body.message

        if (message == 'no') {
            next = 'http://localhost:3004';
        } else {
            next = 'http://localhost:3003' + '/?itemName=' + message;
        };

        res_msg = {
            'message': 'How much is this item?',
            'next': next
        }
        res.status(201).send(res_msg)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    console.log('server is up on', port);
})