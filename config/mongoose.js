<<<<<<< HEAD
const mongoose=require('mongoose');

=======
//require library
const mongoose = require('mongoose');

//connect to database
async function main() {
    const db = await mongoose.connect('mongodb+srv://tejasbagade1512:tejas123@devdatabase.u2cpw0f.mongodb.net/TaskManagement?retryWrites=true&w=majority')
    module.exports = db;
}

main()
.then(() => console.log('MongoDB Connected...')) //if connected
.catch(err => console.log(err)); //if error
>>>>>>> cf1eec8679bbbb43f2f4dfa0f6ee9b08b08001a1
