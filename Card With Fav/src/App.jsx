import "./App.css";
import Card from "./component/Card.jsx";
import Navbar from "./component/Navbar.jsx";
import Header from "./component/Header.jsx";
import Explore from "./component/Explore.jsx";
import Subscribe from "./component/Subscribe.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  const informationCard = [
    {
      id: 1,
      image: "src/assets/840de131974162b09d68033e23a850b5.jpg",
      price: 600000,
      description: "Nokia Essential Wireless Headphones 120CM BLACK",
      isFavorited: false,
    },
    {
      id: 2,
      image: "./src/assets/840de131974162b09d68033e23a850b5.jpg",
      price: 500000,
      description: "Iphone Essential Wireless Headphones 120CM BLACK",
      isFavorited: true,
    },
    {
      id: 3,
      image: "src/assets/840de131974162b09d68033e23a850b5.jpg",
      price: 400000,
      description: "Samsung Essential Wireless Headphones 120CM BLACK",
      isFavorited: false,
    },
  ];

  const exploreSection = {
    firstExploreText: "Our Top Deals",
    secondExploreText: "Best Selling Product",
  };

  return (
    <div className="container">
      <Navbar />
      <Header />
      <Explore text={exploreSection.firstExploreText} />
      <div className="card-section">
        {informationCard.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            cardPrice={card.price}
            cardDesc={card.description}
            cardId={card.id}
          />
        ))}
      </div>
      <Explore text={exploreSection.secondExploreText} />
      <div className="card-section">
        {informationCard.map((card) => (
          <Card
            key={card.id}
            isFavorited={card.isFavorited}
            image={card.image}
            cardPrice={card.price}
            cardDesc={card.description}
            cardId={card.id}
          />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
