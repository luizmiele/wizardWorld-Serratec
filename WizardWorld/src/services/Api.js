import axios from "axios";

const apiWW = axios.create({
	baseURL: 'https://wizard-world-api.herokuapp.com'
});

// export function getElixirList() {
// 	const url = '/Elixirs';

// 	return apiWW.get(url);
// };

export async function getElixirList() {
    try {
      const results = await axios.get("https://wizard-world-api.herokuapp.com/Elixirs");
      return results;
    } catch (error) {
      return console.log(error);
      }
   };

   export async function getSpells() {
    try {
      const results = await axios.get(
        "https://wizard-world-api.herokuapp.com/Spells"
        );
       return results;
    } catch (error) {
      return console.log(error);
    }
  };

    export async function getIngredients() {
        try {
            const results = await axios.get("https://wizard-world-api.herokuapp.com/Ingredients");
        } catch (error) {
            console.log(error);
            }
        return results
     };
