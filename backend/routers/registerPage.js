const express = require("express");
const router = express.Router();
const { join } = require("path")
const User = require(join(__dirname, "..", "model", "userModel.js"));


router.post("/", async (req, res) => {
    try {
        const { name, phone, education, birthDate } = req.body;
        if (!name || !phone || !Array.isArray(education) || education.length === 0 || !birthDate) {
            return res.json({
                case: false,
                message: "Please fill in all information."
            })
        }

        //telefon numarası kontrolü                
        const phoneRGX = new RegExp(/^(?:\+90|0)?5\d{9}$/, "g");
        if (!phoneRGX.test(phone)) {
            return res.json({
                case: false,
                message: "You have entered an incorrect phone number."
            })
        }

        //18 yas kontrolü
        const userBirthDate = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - userBirthDate.getFullYear();
        const monthDiff = today.getMonth() - userBirthDate.getMonth();
        const dayDiff = today.getDate() - userBirthDate.getDate();

        if (age < 18 || (age === 18 && (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)))) {
            return res.json({
                case: false,
                message: "You must be at least 18 years old."
            });
        }


        const userControl = await User.find({
            "name": name,
            "phone": phone,
            "education": education,
            "birthDate": birthDate
        }).exec()


        if (userControl.length != 0) {
            return res.json({
                case: false,
                message: "ayni egitime birden fazla kez kaydolamazsiniz"
            })
        }

        const user = new User({
            "name": name,
            "phone": phone,
            "education": education,
            "birthDate": userBirthDate
        })
        user.save()
            .then((data) => {
                let ID = data._id
                ID = String(ID)
                req.session.userID = ID
                return res.json({
                    case: true,
                    message: "kullanıcı kaydı başarılı bir şekilde yapıldı"
                })
            }).catch((err) => {
                console.log(err)
                return res.json({
                    case: false,
                    message: "bir hata olustu"
                })
            })
    } catch (error) {
        console.log(error)
        return res.json({
            case: false,
            message: "beklenilmeyen bir hata oluştu"
        })
    }
})




module.exports = router