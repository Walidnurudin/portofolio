import app from '../../config';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';

const db = getFirestore(app);
export default async function addData(data) {
  let result = null;
  let error = null;
  let isloading = false;

  try {
    // isloading set
    result = await setDoc(doc(collection(db, 'messages')), data, {
      merge: true
    });
  } catch (e) {
    error = e;
  }

  // isloading set

  return { result, error };
}
