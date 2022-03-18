

exports.certifications = (req, res) => {
    res.json({
        harvar: {
            cs50: 'Computer Science Introduction Course',
            cs50mobi: 'Mobile Development with React Native',
        },
        dio: {
            bootcamps: {
                bootcamp1: 'HTML WEB Developer (Bootcamp)'
            },
            courses: {
                course1: 'Programing Logic'
            }
        },
        bradesco: {
            courses: {
                curso1: 'Object Oriented Programing (OOP)'
            }
        }
    })
}