var express = require('express');
var router = express.Router();

//Get Page Model
var Page = require('../models/page');

/*
* Get all pages
*/
router.get('/', function(req, res) {
    Page.find({}, function(err, pages) {
        if (err) console.log(err);
        res.json(pages);
    })
})

/*
* Get a page
*/
router.get('/:slug', function(req, res) {
    var slug = req.params.slug;

    Page.findOne({slug : slug}, function(err, page) {
        if (err) console.log(err);
        res.json(page);
    })
})

router.get('/edit-page/:id', function(req, res) {
    var id = req.params.id;

    Page.findById(id, function(err, page) {
        if (err) console.log(err);
        res.json(page);
    })
})

/*
* POST edit page
*/
router.post('/edit-page/:id', function (req, res) {

    var id = req.params.id;

    var title = req.body.title;
    var slug = req.body.title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;

    Page.findOne({ slug: slug, _id: { '$ne': id } }, function (e, p) {
        if (e) console.log(e);
        if (p) {
            res.json("pageExists");
        } else {
            Page.findById(id, function (err, page) {
                if (err) console.log(err);

                page.title = title;
                page.slug = slug;
                page.content = content;

                page.save(function (err) {
                    if (err) {
                        console.log(err);
                        res.json("problem");
                    } else {
                        res.json("ok");
                    }
                });
            });
        }
    });
});

//Exports
module.exports = router;