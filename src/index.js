import React from "react";
import { createRoot } from "react-dom/client";

const fname = "Jan";
const lname = "Anon";

const bonusFood = "Pizza";

const image = "https://picsum.photos/400/400";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className="headerclass">
      {fname} {lname} - Favorite Food Items
    </h1>
    <ul className="foodlist">
      <li>Bacon</li>
      <li>Cheese</li>
      <li>Olives</li>
      <li>{bonusFood}</li>
    </ul>
    <div className="imagecontainer">
      <img
        className="food-image"
        alt="bacon image"
        src="https://www.allrecipes.com/thmb/ZyYXwx4FKm3Y13OJGpUjVwx8Ftg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3882376-bacon-for-the-family-or-a-crowd-sanzoe-4x3-1-8711ddbb6af242f184a79e5e72efc7e3.jpg"
      />
      <img
        className="food-image"
        alt="cheese image"
        src="https://static.onecms.io/wp-content/uploads/sites/43/2022/11/07/254478-homemade-mozzarella-cheese-ddmfs-4x3-1.jpg"
      />
      <img
        className="food-image"
        alt="olives image"
        src="https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/2023-02/olive-varieties%C2%A9iStock.jpg.webp?itok=Cusclg5o"
      />
      <img
        className="food-image"
        alt="pizza image"
        src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg"
      />
    </div>
    <p style={{ color: "red", fontSize: "20px" }}>
      Lucky number today is {Math.floor(Math.random() * 10)} !
    </p>
    <img className="random-image" src={image} alt="random image" />
  </div>
);
