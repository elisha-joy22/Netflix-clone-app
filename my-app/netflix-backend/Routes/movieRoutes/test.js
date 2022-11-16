db.NeflixClone.aggregate([
    {$match:{$or:[{genre:"Courtroom Movies"},
                    {genre:"Crime Movies"},
                    {genre:"Dramas"},
                    {genre:"Malayalam-Language Movies"}
                ]}
    },
    {$sort:{"metaData.year":1}},
    {$project:{_id:1,title_image:1,genre:1}},
    {$limit:12}
]).pretty()

db.NeflixClone.updateOne({_id:ObjectId("6346fdb6522228da27eddaf4")},{$set:{template_image:"https://occ-0-3973-3663.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZu8mn4Odzs9md16NCDEvlAetSuc1FH6Agogd4vx3XwaI-RhEQu2DKebvyBFMldEFmS1oLVwcpI7tHz7lMmDEIVY8O0Plz_JKFJqjQdw8DkXvUvZP_2E99tSH87S5yXMhNaA.jpg?r=008"}})
db.NeflixClone.findOne({_id:ObjectId("6346fdb6522228da27eddaf4")})