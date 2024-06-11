import { createContext, useState, useContext } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

    function addFavorite(newFavorite) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
      // verificar se tem item repetido
      const repeatedFavorite = favorite.some(
        (item) => item === newFavorite
      );

      // nova lista recebe lista anterior
      let newList = [...favorite];

      // verificar se não tem repetido e adicionar o item na lista de favoritos
      if (!repeatedFavorite) {
        console.log("BBBBBBBBBBBBBBBBBB")
        newList.push(newFavorite);
        return setFavorite(newList);
      }

      // se for repetido vai ser tirado da lista
      console.log("CCCCCCCCCCCCCCCCCC")
      newList = favorite.filter((fav) => fav !== newFavorite);
      return setFavorite(newList);
    }
  
  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

//Hook personalizado
