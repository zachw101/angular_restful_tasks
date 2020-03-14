// shorthand
// const User = require('mongoose').model('User');
// longform
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
// const data = require('./data.json');
// console.log(data);

module.exports = {

    // req params is unused, we can replace it with an _ to signify it is unused
    // when .then is executed it is passed the returned data
    show(req, res) {
        console.log('in show function')
        Task.find()
            .then(allTasks => res.json({
                tasks: allTasks,
                msg: 'finding tasks...'
            }))
            .catch(err => {
                res.json({ error: err });
            });
        },


        idShow(req, res) {
            console.log('in id show');
            console.log(req.params);

            Task.findById(req.params.taskId)
                .then(task => {
                    res.json({ task: task });
                })
                .catch(err => {
                    res.json({ error: err });
                });
            },


        create(req, res) {
            console.log('in create' + req.body);

            Task.create(req.body)
                .then(newTask => {
                    res.json({ newTask: newTask });
                    console.log("creating new task");
                    console.log(newTask);
                })
                .catch((err) => {
                    console.log("something went wrong");
                    console.log(err);
                    res.json(data.errors);
                    // res.render('index', { Tasks: [] })
                });
        },

        update(req, res) {
            Task.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    runValidators: true,
                    // will return the new updated obj rather than
                    // the object before the update
                    new: true
                }
            )
                .then(newTask => {
                    res.json({ task: newTask });
                })
                .catch(err => {
                    res.json({ error: err });
                });
        },



        // quotes(req, res) {
        //     Task.find({}).sort({ created_at: -1 })
        //         .then(data => res.render("quotes", { Tasks: data }))
        //         .catch(err => res.json(err));
        // },


        destroy(req, res) {
            console.log('in destroy' + req.params.id);
            Task.findByIdAndDelete(req.params.id)
                .then(deletedTask => {
                    res.json({ deleted: deletedTask });
                })
                .catch(err => {
                    res.json({ error: err });
                });
        },



    }










