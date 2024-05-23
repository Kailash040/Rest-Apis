import { config } from './config/config';
import app from './src/app'

const startserver= ()=>{
const port = config.port || 3000;
app.listen(port,()=>{
    console.log("listing")
})
}
startserver()