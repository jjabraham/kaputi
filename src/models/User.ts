import * as mongoose from "mongoose";


const schema = new mongoose.schema({firstname: "string"});

const User = mongoose.model("User", schema);

export default User;