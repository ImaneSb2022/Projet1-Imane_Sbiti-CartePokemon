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
            CarteImageSrc="./public/images/Bulbizarre.png" 
            CarteImageAlt="Bulbasaur"
            CarteImageLoading="Lazy"
            CarteTitre="Bulbasaur"
            SousTitre1="Habiletés :"
            CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
            SousTitre2="Type :"
            Info1="Grass"
            Info2="poison"
          />

        <Carte 
            FontOrange
            CarteImageSrc="./public/images/Bulbizarre.png" 
            CarteImageAlt="Bulbasaur"
            CarteImageLoading="Lazy"
            CarteTitre="Bulbasaur"
            SousTitre1="Habiletés :"
            CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
            SousTitre2="Type :"
            Info1="Grass"
            Info2="poison"
        />
        <Carte 
            FontVert 
            CarteImageSrc="./public/images/Bulbizarre.png" 
            CarteImageAlt="Bulbasaur"
            CarteImageLoading="Lazy"
            CarteTitre="Bulbasaur"
            SousTitre1="Habiletés :"
            CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
            SousTitre2="Type :"
            Info1="Grass"
            Info2="poison"
        />

    </section>

    <section className='container'>
      
      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Bulbizarre.png" 
          CarteImageAlt="Bulbasaur"
          CarteImageLoading="Lazy"
          CarteTitre="Bulbasaur"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
          SousTitre2="Type :"
          Info1="Grass"
          Info2="poison"
        />

      <Carte 
          FontOrange
          CarteImageSrc="./public/images/Bulbizarre.png" 
          CarteImageAlt="Bulbasaur"
          CarteImageLoading="Lazy"
          CarteTitre="Bulbasaur"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
          SousTitre2="Type :"
          Info1="Grass"
          Info2="poison"
      />

      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Bulbizarre.png" 
          CarteImageAlt="Bulbasaur"
          CarteImageLoading="Lazy"
          CarteTitre="Bulbasaur"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
          SousTitre2="Type :"
          Info1="Grass"
          Info2="poison"
        />

      <Carte 
          FontOrange
          CarteImageSrc="./public/images/Bulbizarre.png" 
          CarteImageAlt="Bulbasaur"
          CarteImageLoading="Lazy"
          CarteTitre="Bulbasaur"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
          SousTitre2="Type :"
          Info1="Grass"
          Info2="poison"
      />
      <Carte 
          FontVert 
          CarteImageSrc="./public/images/Bulbizarre.png" 
          CarteImageAlt="Bulbasaur"
          CarteImageLoading="Lazy"
          CarteTitre="Bulbasaur"
          SousTitre1="Habiletés :"
          CarteDescription="Avec Charmander et Squirtle , Bulbasaur est l'un des trois Pokémon de départ de Kanto disponibles au début de Pokémon Red, Green , Blue , FireRed et LeafGreen ."
          SousTitre2="Type :"
          Info1="Grass"
          Info2="poison"
      />

  </section>


    </>
  )
}

export default App
