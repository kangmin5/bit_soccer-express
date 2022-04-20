export default function GameModel(mongoose){
    mongoose.model('game',
        mongoose.Schema(
            {
                id: String
            }, { timestamp: true }
        )
    )
}