const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    return db.select().from('users').where({ id })
        .then(user => {
            if (user.length) {
                res.json(user[0])
            } else {
                res.status(400).json("Not found")
            }
        })
        .catch(err => res.status(400).json('Error catching user'));
}

module.exports = {
    handleProfileGet
}