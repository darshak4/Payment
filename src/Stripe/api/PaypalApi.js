let baseUrl = 'https://api-m.sandbox.paypal.com';
import base64 from 'react-native-base64';
let clientid =
  'Adj9u7qFMzMALA71UCVP3Vw89fBsqv1jSHTjMTRW2X3VyLtbJs1XZbMZk0To-krNEDNLpf3sYspM7ty5';
let seceretKey =
  'ECnmGWjXNILr5D3gTr-rlQs41MU6mFTltYmG94TWfL7mgdQkjOn4Dle5G0AqvN382gXCLNSesmKFz-8U';

const generateToken = () => {
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append(
    'Authorization',
    'Basic' + base64.encode(`${clientid}:${seceretKey}`),
  );

  var rquestOptions = {
    method: 'post',
    headers: headers,
    body: 'grant_type=client_credentials',
  };

  return new Promise((resolve, reject) => {
    fetch(baseUrl + '/v1/oauth2/token', rquestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('result Dta', result);
        resolve(result);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
};

export default generateToken;
