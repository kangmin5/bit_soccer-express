module.exports = mongoose => mongoose.model('team',
    mongoose.Schema(
        {
            teamid: String,
            home: String,
            teamname: String,
            orgyyyy: String,
            stadiumname: String,
            address: String,
            tel: String
            },{timestamp: true}
    )
)