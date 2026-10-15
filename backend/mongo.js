const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const db_password = process.argv[2]
const db_username = "fullstack-part3"

const url = `mongodb+srv://${db_username}:${db_password}@cluster0.g4djkc7.mongodb.net/?appName=Cluster0`

// const url = `mongodb+srv://${db_username}:${db_password}@cluster0.g4djkc7.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

// mongodb+srv://<db_username>:<db_password>@cluster0.g4djkc7.mongodb.net/?appName=Cluster0

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

// // const note = new Note({
// //   content: 'HTML is easy',
// //   important: true,
// // })

// const note = new Note({})

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })