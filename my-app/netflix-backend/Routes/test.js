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