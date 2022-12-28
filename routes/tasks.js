const express = require('express')
const router = express.Router();
const {getALLTasks,
    createtask,
    gettask,
    updatetask,
    deletetask} = require('../controllers/tasks')

router.route('/').get(getALLTasks).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask);


module.exports = router