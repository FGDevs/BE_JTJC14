const multer = require('multer')
const fs = require('fs')

module.exports={
    uploader(destination, fileNamePrefix){ // --> standar parameter
        // destination --> path where images will be stored
        // filenameprefix: --> define the name of file that will be uploaded
        let defaultPath = './public'

        const storage = multer.diskStorage({
            destination: (request, file, callback) => {
                console.log('destination')
                const dir = defaultPath + destination // --> to refer folder where image will be stored in Public directory
                if (fs.existsSync(dir)){ // --> to check wether the target directory exist or not
                    console.log(dir, "exist")
                    callback(null, dir)
                } else {
                    fs.mkdir(dir,{recursive:true}, error=>callback(error,dir)) // --> create the directory
                    console.log(dir, "make")
                }
            },
            filename: (request, file, callback) => {
                let originalname = file.originalname
                let ext = originalname.split('.')
                let filename = fileNamePrefix + Date.now() + '.' + ext[ext.length - 1]
                callback(null,filename)
            }
        })
        
        const imageFilter = (request, file, callback) => {
            console.log('imagefilter')
            const ext = /\.(jpg|jpeg|png|gif|pdf|doc|docx|xls|xlsx)$/
            console.log(file.originalname.split('.')[1])
            console.log(file.originalname)
            console.log(file.originalname.match(ext))
            if(!file.originalname.match(ext)) {
                return callback(new Error(`Only upload file that match with choosen extension`), false)
            }
            callback(null, true)
        }
    
        return multer({
            storage: storage,
            fileFilter: imageFilter,
            // limits:{
            //     fieldSize: 1 * 1024 * 1024 // --> = 1 Mb
            // }
        })
    }
}