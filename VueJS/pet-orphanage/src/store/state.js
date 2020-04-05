import cats from '../data/cats'
import dogs from '../data/dogs'

//this object is the default state of our application and its the data that we will be able to 
//pull in to any compenent that we wwant
export default{
    cats, 
    dogs ,
    pets:[...cats,...dogs]  //this ... dots is used so that the array is flat and all the cats and dogs pile up in a single array
}