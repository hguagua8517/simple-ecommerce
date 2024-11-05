import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './config/dbConnection.js';
import productRoutes from './routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.get('/', (req, res )=> {});

//probando la conexion con la base de datos de mongo db
//console.log(process.env.Mongo_URI);

//middleware
app.use(express.json()); //para poder usar el req.body y acepte datos en formato json.

//routes
app.use('/api/products', productRoutes);

//puerto
app.listen(PORT,() => {
    dbConnection();
    console.log(`Server started on http://localhost:${PORT}`);
});



export default app;
