As discussed we will follow NoSQL format

Module: Authentication
SubModule: Sign In
Relationship:
    users (username: Foreign Key)
Fields:
    username: String
    password: String

Descriptions:
    username: Use for checking if the user account is available
    password: Use for validation if the credential is valid

NOTE: Information for this module is derived from user information (Registration)

---------------------------------------------------------------------------------------------------------------

Module: Registration
SubModule: Sign up
Relationship:
    users (_id: Primary Key, username: Foreign Key)
Fields:
    _id: String - Use for checking specific user
    username: String (Unique) - Use for authentication to validate the credentials
    password: String - Use for authentication to validate the credentials
    name: String - Use for displaying the name of the user (it might be useful for Analytics)
    age: Int - Use for displaying the age of the user (it might be useful for Analytics)
    birthDay: String - Use for displaying the birthday of the user (it might be useful for Analytics)

Descriptions:
    _id:
    username:
    password:
    name:
    age:
    birthDay:

---------------------------------------------------------------------------------------------------------------

Module: Transaction Process
SubModule: Quiz
Relationship:
    records (_id: Primary Key, userId: Foreign Key)
Fields:
    _id: String - Use for checking specific quiz
    day: String { - Use for checking specific day
        userId: String { - Use for checking specific user
            quiz: Object { - Details of quiz created/submitted by the user
                question: String - Description of the quiz item
                answer: Object { - Answer information of the user
                    choice: String - Actual result
                    key: String - Expected result
                    result: Boolean - Determine if the answer is correct
                }
            }
        }
    }

Descriptions:
    _id:
    day:
    userId:
    quiz:
    question:
    answer:
    choice:
    key:
    result:

----------------------------------------------------------------------------------------------------------------

Module: Report Management
SubModule: Leader Board
Relationship:
    records (day: Foreign Key)
Fields:
    day: String

Descriptions:
    day: Use for checking specific quiz

NOTE: Information for this module is derived from records information (Quiz)