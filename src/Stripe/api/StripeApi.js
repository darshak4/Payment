import axios from 'axios';

const creatPaymentIntent = data => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://192.168.29.128:3000/payment-sheet`, data)
      .then(res => {
        console.log('-------');
        resolve(res);
      })
      .catch(error => {
        console.log('=====');
        reject(error);
      });
  });
};

export default creatPaymentIntent;

// const creatPaymentIntent = async data => {
//   const res = await fetch('http://localhost:4000/payment-sheet', {
//     method: 'post',
//     body: JSON.stringify(data),
//   });
//   const resJson = await res.json();
//   return resJson;
// };
// export default creatPaymentIntent;
