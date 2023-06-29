import Carte from './assets/components/Carte-Box/Carte';
import Titre from './assets/components/Carte-Titre/CarteTitre';
/*import Container from './assets/components/Container/Container';*/
import './App.css';

function App() {
  

  return (
    <>
    <Titre className='titre_decoration'>Cartes de Pokémon</Titre>

    <section className="container">
      
        <Carte 
            FontVert 
            CarteImageSrc="./public/images/Bulbizarre.png" 
            CarteImageAlt="Bulbasaur"
            CarteImageLoading="Lazy"
            CarteTitre="Bulbasaur"
            SousTitre1="Habiletés :"
            CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
            SousTitre2="Type :"
            Info1="Herbe"
            Info2="poison"
          />

        <Carte 
            FontOrange
            CarteImageSrc="./public/images/Ivysaur.png" 
            CarteImageAlt="Ivysaur"
            CarteImageLoading="Lazy"
            CarteTitre="Ivysaur"
            SousTitre1="Habiletés :"
            CarteDescription="Il évolue de Bulbasaur à partir du niveau 16 et évolue en Venusaur à partir du niveau 32."
            SousTitre2="Type :"
            Info1="Herbe"
            Info2="poison"
        />

        <Carte 
            FontVert 
            CarteImageSrc="./public/images/Venusaur.png" 
            CarteImageAlt="Venusaur"
            CarteImageLoading="Lazy"
            CarteTitre="Venusaur"
            SousTitre1="Habiletés :"
            CarteDescription="Venusaur est la mascotte du jeu Pokémon Green et son remake Pokémon LeafGreen, apparaissant sur la pochette des deux jeux."
            SousTitre2="Type :"
            Info1="Grass"
            Info2="poison"
          />

        <Carte 
            FontOrange
            CarteImageSrc="./public/images/Charmander.png" 
            CarteImageAlt="Charmander"
            CarteImageLoading="Lazy"
            CarteTitre="Charmander"
            SousTitre1="Habiletés :"
            CarteDescription="Avec Bulbasaur et Squirtle, Charmander est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green, Blue, FireRed et LeafGreen. ."
            SousTitre2="Type :"
            Info1="Feu"
        />
        <Carte 
            FontVert 
            CarteImageSrc="./public/images/Charmeleon.png" 
            CarteImageAlt="Charmeleon"
            CarteImageLoading="Lazy"
            CarteTitre="Charmeleon"
            SousTitre1="Habiletés :"
            CarteDescription="Il évolue de Charmander à partir du niveau 16 et évolue vers Charizard à partir du niveau 36."
            SousTitre2="Type :"
            Info1="Feu"
        />

    </section>

    <section className='container'>
      
      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Charizard.png" 
          CarteImageAlt="Charizard"
          CarteImageLoading="Lazy"
          CarteTitre="Charizard"
          SousTitre1="Habiletés :"
          CarteDescription="Charizard est la mascotte du jeu Pokémon Red et son remake Pokémon FireRed, apparaissant sur la pochette des deux jeux."
          SousTitre2="Type :"
          Info1="Feu"
          Info2="Flying"
        />

      <Carte 
          FontOrange
          CarteImageSrc="./public/images/Squirtle.png" 
          CarteImageAlt="Squirtle"
          CarteImageLoading="Lazy"
          CarteTitre="Squirtle"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Bulbasaur et Charmander, Squirtle est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green, Blue, FireRed et LeafGreen."
          SousTitre2="Type :"
          Info1="Eau"
      />

      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Wartortle.png" 
          CarteImageAlt="Wartortle"
          CarteImageLoading="Lazy"
          CarteTitre="Wartortle"
          SousTitre1="Habiletés :"
          CarteDescription="Il évolue de Squirtle à partir du niveau 16 et évolue vers Blastoise à partir du niveau 36."
          SousTitre2="Type :"
          Info1="Eau"
        />

      <Carte 
          FontOrange
          CarteImageSrc="./public/images/Blastoise.png" 
          CarteImageAlt="Blastoise"
          CarteImageLoading="Lazy"
          CarteTitre="Blastoise"
          SousTitre1="Habiletés :"
          CarteDescription="Blastoise est la mascotte du jeu des versions japonaises et internationales de Pokémon Blue, apparaissant sur le boxart des deux jeux."
          SousTitre2="Type :"
          Info1="Eau"
      />
      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Caterpie.png" 
          CarteImageAlt="Caterpie"
          CarteImageLoading="Lazy"
          CarteTitre="Caterpie"
          SousTitre1="Habiletés :"
          CarteDescription="Il évolue en Metapod à partir du niveau 7, qui évolue en Butterfree à partir du niveau 10."
          SousTitre2="Type :"
          Info1="Bug"
      />

  </section>


    </>
  )
}

export default App
