const path = require('path');
const Datastore = require('nedb');
const express = require('express');

const router = express.Router();
const comments = new Datastore({
    filename: path.resolve(process.cwd(), 'db/comments.db'),
    autoload: true
});


router.get('/', (req, res) => {
    comments.find({}, (err, docs) => {
        if(!err && docs !== null){
            res.status(200);
            res.json(docs);
        }

        res.status(400);
    })
});

router.get('/:id', (req, res) => {
    comments.findOne({"id": parseInt(req.params.id)}, (err, doc) => {
        if(!err && doc !== null){
            res.status(200);
            res.json(doc);
            return
        }
        res.status(404);
        res.json({
            msg: `Error! Record with id: ${parseInt(req.params.id)} is not found!`
        })
    })
});

router.post('/', (req, res) => {
    comments.insert(req.body, (err, doc) =>{
        if (!err && doc !== null){
            res.status(200);
            res.json({
                msg: `The record is saved`
            });
            return;
        }

        res.status(404);
        res.json({
            msg: `Error! Something is wrong!`
        });
    })
});


router.put('/:id', (req, res) => {
    comments.update({id: parseInt(req.params.id)}, req.body, () => {
        res.status(200);
        res.json({
            msg: `Record is updated!`
        });
    })
});

router.patch('/:id', (req, res) => {
    comments.update({id: parseInt(req.params.id)}, req.body, () => {
        res.status(200);
        res.json({
            msg: `Record is updated!`
        });
    })
});

router.delete('/:id', (req, res) => {
    comments.remove({id: parseInt(req.params.id)}, (err, doc) => {
        if (!err && doc !== null){
            res.status(200);
            res.json({
                msg: `The record with id: ${req.params.id} is removed successfully`
            });
            return;
        }

        res.status(404);
        res.json({
            msg: `Error! The record with id: ${req.params.id} is not found!`
        });

    })
});
module.exports = router;
