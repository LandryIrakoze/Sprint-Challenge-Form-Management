import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import UserData from "../src/components/UserData";

describe("<UserData />", () => {
  it("renders without crashing", () => {
    render(<UserData />);
  })
  it("should render a recipe items provided by props", () => {
      const foodData = [
        {name: "Brisket", course: "Main", technique: "Sous-Vide", ingredients: Array(5)},
        {name: "Elaborate Potato Salad", course: "Side", technique: "Varied", ingredients: Array(4)},
        {name: "Collard Greens with Kimchi", course: "Side", technique: "Sauté", ingredients: Array(4)},
        {name: "Jalapeño Mac and Cheese", course: "Side", technique: "Béchamel", ingredients: Array(4)},
        {name: "Maque Choux", course: "Side", technique: "Deep Frying", ingredients: Array(4)},
        {name: "Hush Puppies", couse: "Side", technique: "Deep Frying", ingredients: Array(4)},
        {name: "Strawberry Soup", course: "Dessert", technique: "Maceration", ingredients: Array(4)},
      ]
  })
});