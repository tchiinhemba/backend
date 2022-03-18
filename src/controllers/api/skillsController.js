

exports.skills = (req, res) => {
    res.json({
        frontend: {
            html: 'example',
            css: 'example',
            javascript: 'example',
            react: 'example',
            angular: 'example'
        },
        backend: {
            nodejs: 'example',
            mongo: 'example',
            c: 'example',
            sql: 'example'
        }
    })
}