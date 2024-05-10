
const multer = require("multer")
const path = require("path")

//image storage engin
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename: (req, file, cd) => {
        return cd(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage })

module.exports=upload;