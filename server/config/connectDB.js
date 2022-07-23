import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose
      .connect('mongodb+srv://admin:admin@cluster0.gx4hitt.mongodb.net/project-management_db?retryWrites=true&w=majority')
      .then(() =>
        console.log(
          `Connected to MongoDB ${mongoose.connection.host}`.bgGreen.yellow
            .underline
        )
      )
  } catch (err) {
    console.log(`${err}`.bgRed.yellow.underline)
  }
}
