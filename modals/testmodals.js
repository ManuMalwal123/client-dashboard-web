import { Schema , model ,models} from "mongoose";

// const testHeader  = new Schema({
//     _id : {
//         type : String
//     },
//     Top : {
//         type : Object
//     },
// }, {
//     _id: false
// })

// const testCarausel  = new Schema({
//     _id : {
//         type : String
//     },
//     Carausel : {
//         type : Object
//     },
// }, {
//     _id: false
// });

const Header = new Schema({
    _id: {
        type: String
    },
    key: {
        type: String
    },
    value: {
        type: Object
    }
},{
    _id : false
})

// console.log(testSchema)

// const List = models.Home || model('Home' , testHeader)

// export default List

const CarauselList = models.Home || model('Home' , Header)

export {CarauselList } 