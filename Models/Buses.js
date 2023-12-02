import { model, Schema } from "mongoose";

const busshcema=new Schema({
    busno:{
        type:"Number",
        required:true,
        unique:true
        
    },
    seats:{
        type:"Number"
    },
    busname:{
        type:"String"
    }
},{
    timestamps:true
})
const Bus =model('Bus',busshcema)
export default Bus;