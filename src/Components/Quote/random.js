import axios from 'axios';

const Url='https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote'

const options = {
    params: {
      token: 'ipworld.info'
    },
    headers: {
      'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
};

export const allRandom=async()=>{

    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.error(error);
    }

}


