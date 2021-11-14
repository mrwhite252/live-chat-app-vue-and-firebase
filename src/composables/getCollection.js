import { ref } from "@vue/reactivity";
import { projectFirestore } from "../firebase/config";

const getCollection = (collection) => {
  const documents = ref(null);

  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // to deal with real-time data, so have to send to the server and get the timestamp and then return to the front end
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      document.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );

  return { documents, error };
};

export default getCollection;
