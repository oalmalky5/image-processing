import express from 'express'
const app = express()
const PORT = 3000 || process.env.PORT
import router from './routes/index'

app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})