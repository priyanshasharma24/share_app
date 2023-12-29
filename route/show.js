const express = require("express");
const router = express.Router();
const File = require('../module/file')

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            return res.render('download', { error: 'Link Has been Expired' });
        }

        return res.render('download', {
            uuid: file.uuid,
            fileName: file.filename,
            fileSize: file.size,
            downloadLink: `${process.env.BASE_URL}/files/download/${file.uuid}`,
            error: null // Pass 'null' or any default value if error doesn't exist
        });
    } catch (error) {
        return res.render('download', { error: 'Something went wrong' });
    }
});


module.exports = router