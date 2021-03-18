import mongoose from 'mongoose';

const uri: string = 'mongodb://127.0.0.1:27017/local';

mongoose.connect(uri, (err: any) => {
    if(err){
        console.log(err.message);
    }else{
        console.log("Successfully Connected!");
    }
});

export interface IPerson extends mongoose.Document {
    name: string,
    surname: string,
    birthday: Date,
    address: string,
    phoneNumber: number,
    country: string
}

export const PersonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    birthday: {type: Date, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    country: {type: String, required: true}
});

const Person = mongoose.model<IPerson>("Person", PersonSchema);
export default Person;