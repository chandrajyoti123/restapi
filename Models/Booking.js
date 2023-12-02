import { model, Schema } from "mongoose";
const bookingschema=new Schema({
    passe_name:{
        type:"String",
       

    },
    passe_age:{
        type:"Number",
        required:true
    },
    from:{
        type:"String",
        required:true
    },
    to:{
        type:"String",
        required:true
    }
},{
    timestamps:true
})
const Booking=model('Booking',bookingschema)
export default Booking;