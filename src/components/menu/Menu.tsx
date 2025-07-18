// Menu page component with recipes and cart sidebar
import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../../CartContext";
import CartSidebar from "../../CartSidebar";

type RecipeType = {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
};

type MenuProps = {
  searchTerm: string;
};

export default function Menu({ searchTerm }: MenuProps) {
  // State for recipes data
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  // Access cart context
  const { addToCart } = useContext(CartContext)!;

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Fetch recipes from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        // Map API data to RecipeType
        const mapped = data.recipes.map((recipe: any) => ({
          id: recipe.id,
          name: recipe.name,
          image: recipe.image,
          rating: recipe.rating,
          reviewCount: recipe.reviewCount || Math.floor(Math.random() * 200),
          price: Math.floor(Math.random() * 200) + 50,
        }));
        setRecipes(mapped);
      });
  }, []);

  // Filter recipes by search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid mt-5">
      {/* Page heading */}
      <h2
        className="mb-4 text-center"
        style={{
          color: "wheat",
          fontFamily: "'Arial', sans-serif",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        Our Recipes
      </h2>
      <div className="row">
        {/* Recipe cards column */}
        <div className="col-md-9">
          <div className="row">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <div key={recipe.id} className="col-md-4 mb-4">
                  <div data-aos="fade-up" className="card h-100">
                    <img
                      src={recipe.image}
                      className="card-img-top"
                      alt={recipe.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{recipe.name}</h5>
                      <p className="card-text">
                        {recipe.rating} / 5 ({recipe.reviewCount} reviews)
                      </p>
                      <p className="card-text">
                        Price: ${recipe.price.toFixed(2)}
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          addToCart({
                            id: recipe.id,
                            title: recipe.name,
                            price: recipe.price,
                            image: undefined,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-4 text-muted">
                No recipes match your search.
              </p>
            )}
          </div>
        </div>

        {/* Cart sidebar column */}
        <div className="col-md-3">
          <CartSidebar />
        </div>
      </div>
    </div>
  );
}
