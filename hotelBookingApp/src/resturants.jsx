import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

/*This component shows detail of .*/
export const resturants = () => {
  return (
    <div >

<h1 className="m-4 text-center">CantM restaurant </h1>
    <Container className="colby mb-5">
      
      <Row>
        <Col md={9} className="m-4">
          <h2>Monday</h2>
          <p>
            <li>Breakfast: Scrambled eggs with toast and avocado.</li>
            <li>Lunch: Grilled chicken Caesar salad.</li>
            <li>Dinner: Grilled salmon with lemon butter sauce.</li>
            <li>Snacks: Fresh fruit salad.</li>
            <li>Dessert: Chocolate lava cake with vanilla ice cream.</li>
          </p>
        </Col>
        <Col md={9} className="m-4">
          <h2>Tuesday</h2>
          <p>
            <li>Breakfast: Greek yogurt parfait with granola and fresh berries.</li>
            <li>Lunch: Quinoa and vegetable stir-fry.</li>
            <li>Dinner: Beef tenderloin steak with mashed potatoes.</li>
            <li>Snacks: Hummus and vegetable sticks.</li>
            <li>Dessert: Freshly baked apple pie with a scoop of cinnamon ice cream.</li>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="m-4">
          <h2>Wednesday</h2>
          <p>
            <li>Breakfast: Classic bacon and egg breakfast sandwich.</li>
            <li>Lunch: Caprese sandwich with mozzarella, tomato, and basil.</li>
            <li>Dinner: Vegetarian lasagna with garlic bread.</li>
            <li>Snacks: Mixed nuts and dried fruits.</li>
            <li>Dessert: Cheesecake with a raspberry coulis.</li>
          </p>
        </Col>
        <Col md={9} className="m-4">
          <h2>Thursday</h2>
          <p>
            <li>Breakfast: Oatmeal with honey and sliced bananas.</li>
            <li>Lunch: Spaghetti carbonara with garlic bread.</li>
            <li>Dinner: Shrimp scampi with linguine.</li>
            <li>Snacks: Popcorn with nutritional yeast.</li>
            <li>Dessert: Fruit sorbet in a waffle cone.</li>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="m-4">
          <h2>Friday</h2>
          <p>
            <li>Breakfast: Veggie omelet with a side of whole-grain toast.</li>
            <li>Lunch: Spinach and feta stuffed chicken breast.</li>
            <li>Dinner: Tofu and vegetable stir-fry in teriyaki sauce.</li>
            <li>Snacks: Cheese and whole-grain crackers.</li>
            <li>Dessert: Tiramisu.</li>
          </p>
        </Col>
        <Col md={9} className="m-4">
          <h2>Saturday</h2>
          <p>
            <li>Breakfast: Breakfast burrito with scrambled eggs, cheese, and salsa.</li>
            <li>Lunch: Thai green curry with jasmine rice.</li>
            <li>Dinner: BBQ pulled pork sandwich with coleslaw.</li>
            <li>Snacks: Sliced cucumber with tzatziki sauce.</li>
            <li>Dessert: Crème brûlée.</li>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={9} className="m-4">
          <h2>Sunday</h2>
          <p>
            <li>Breakfast: Smoked salmon and cream cheese bagel.</li>
            <li>Lunch: Margherita pizza with a thin crust.</li>
            <li>Dinner: Mushroom risotto with Parmesan cheese.</li>
            <li>Snacks: Guacamole with tortilla chips.</li>
            <li>Dessert: Chocolate-covered strawberries.</li>
          </p>
        </Col>
      </Row>


      </Container>
    </div>
  );
};
