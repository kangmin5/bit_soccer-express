module.exports = mongoose => mongoose.model('board',
    mongoose.Schema(
        {
            passenger_id: String,
            name: String,
            team_id: String,
            subject: String
            },{timestamps:true}
        )
)