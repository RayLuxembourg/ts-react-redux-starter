import { App } from "../../app"

export class ProductPriority {
  constructor(
    public category: App.ProductCategory,
    public tuck?: "IN" | "OUT"
  ) {
  }

  get priority() {
    const group1 = [
      "Bags",
      "Accessories",
      "Jewelry",
      "Hats",
      "Jackets",
      "Jackets & Coats",
      "Outfits",
      "Sweaters",
      "Dresses",
      "Rompers"
    ]
    const group2 = [
      "Tops",
      "Long Sleeves",
      "Short Sleeves",
      "Shirt",
      "Shirts",
      "Tank Tops",
      "Dress Shirts"
    ]
    const group3 = [
      "Bottoms",
      "Dress Pants",
      "Jeans",
      "Skirts",
      "Pants",
      "Shorts",
      "Shoes"
    ]
    let priority
    if (this.tuck === "IN") {
      priority = [...group1, ...group3, ...group2].reverse()
    } else {
      priority = [...group1, ...group2, ...group3].reverse()
    }
    return priority.indexOf(this.category)
  }
}

const whiteList = [
  "Bags",
  "Accessories",
  "Jewelry",
  "Hats",
  "Jackets",
  "Jackets & Coats"
]
const blackList = ["Tops", "Dressses", "Skirts", "Jeans"]

//dress removes everythng but handbags.
// jeans removes skirts
//skirts removes jeans
