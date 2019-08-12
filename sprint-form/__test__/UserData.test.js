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
        {name: "Brisket", course: "Main", technique: "Sous-Vide"},
        {name: "Elaborate Potato Salad", course: "Side", technique: "Varied"},
        {name: "Collard Greens with Kimchi", course: "Side", technique: "Sauté"},
        {name: "Jalapeño Mac and Cheese", course: "Side", technique: "Béchamel"},
        {name: "Maque Choux", course: "Side", technique: "Deep Frying"},
        {name: "Hush Puppies", couse: "Side", technique: "Deep Frying"},
        {name: "Strawberry Soup", course: "Dessert", technique: "Maceration"},
      ];

      const comp = render(<UserData data={foodData} />)
      const dishes = comp.getAllByText('name');
      expect(dishes).toHaveLength(foodData.length);
  })
});