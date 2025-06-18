{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age","course"],
            properties:{
                name:{
                    bsonType:"string",
                    description:"must be a string and is required"
                },
                age:{
                    bsonType:"int",
                    description:"must be a integer and is required"
                },
                course:{
                    bsonType:"string",
                    description:"must be a string and is required"
                }

        }
    }
}