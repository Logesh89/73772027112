import React,{useState} from 'react';
import axios from 'axios';

 const Numbers = () => {
    const [ setNumber]=useState([]);
    const fetchNumbers=()=>{
        const urls=[
        'http://104.211.219.98/numbers/primes',
        'http://104.211.219.98/numbers/fibo',
        'http://104.211.219.98/numbers/odd',
        'http://104.211.219.98/numbers/rand'];

        const promises=urls.map(url=>axios.get(url));

        try{
            const responses = Promise.all(promises);
            const newNumbers=responses.map(response=>(response.data.numbers));
            setNumber(newNumbers);
        }catch(error){
            console.error(error);
        }
    };
  return (
    <div>
      <><button onClick={fetchNumbers}>Fetch Numbers</button><ul>
      </ul></>
    </div>
  );
  };


export default Numbers;