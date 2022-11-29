import firebase from '../firebase/config';

const ViewCount = () => {
  firebase
    .database()
    .ref('viewerCount')
    .transaction((data) => {
      if (data) {
        if (data.count) {
          data.count++;
        }
      }
      return data;
    })
    .catch((err) => console.log(err));
};

export default ViewCount;
