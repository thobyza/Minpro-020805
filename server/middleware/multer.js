const multer = require('multer')

module.exports = {
    multerUpload: () => {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, './public')
            },

            filename: (req, file, cb) => {
                cb(null,
                    'PIMG' + '-' + Date.now() + '-' + Math.round((Math.random() * 1000000)) + '.' +
                    file.mimetype.split('/')[1]
                )
            }
        })

        const fileFilter = (req, file, cb) => {
            // extension filter
            const extFilter = ['jpg', 'jpeg', 'png']
            // check extension file
            const checkExt = extFilter.includes(file.mimetype.split('/')[1].toLowerCase())

            if (checkExt) {
                cb(null, true)
            } else {
                cb(new Error('File format not supported'))
            }
        }

        return multer({ storage, fileFilter })
    }
}