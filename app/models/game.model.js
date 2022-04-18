module.exports = mongoose => mongoose.model('game',
    mongoose.Schema(
        {
            id: String
        }, { timestamp: true }
    )
)