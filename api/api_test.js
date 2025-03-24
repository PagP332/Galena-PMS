import { database, test } from "./api_config.js"
import { collection, getDocs } from "firebase/firestore"

api.test()
const querySnapshot = await getDocs(collection(database, "data"))
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`)
})
