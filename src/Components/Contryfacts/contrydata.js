import axios from 'axios';

const Url='https://country-facts.p.rapidapi.com/all'

const options = {
  headers: {
    'X-RapidAPI-Key': '87f0c01e35msh8962c83c8aef89ap1e9713jsnbf3fe9f2f818',
    'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
  }
};

export const defaultCountries=async()=>{
    try {
        const response = await axios.get(Url,options);
        return response
    } catch (error) {
        console.log(error);
    }
}