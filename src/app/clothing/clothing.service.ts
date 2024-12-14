import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { UserReview } from './userReview.model';

@Injectable()

export class ClothingService {

  constructor() {}

  private products: Product [] = [
    {
      product_id: 0,
      title: "Cotton Super Boxers",
      image: "assets/image/gucci_boxers.jpeg",
      gender: "man",
      category: "underwear",
      size: ["M", "XL"],
      manufacturer: "Gucci",
      product_date: new Date("2023-04-18T14:23:00Z"),
      price: 200,
      user_reviews: [
        {
          review_id: 1,
          user_id: 1,
          comment: "Best buy! :)",
          rating: 5
        },
        {
          review_id: 2,
          user_id: 2,
          comment: "Very comfortable.",
          rating: 4
        }
      ]
    },
    {
      product_id: 1,
      title: "Silk Nightwear",
      image: "assets/image/silk_nightwear.jpeg",
      gender: "woman",
      category: "nightsuit",
      size: ["S", "M"],
      manufacturer: "Adidas",
      product_date: new Date("2022-05-10T10:00:00Z"),
      price: 150,
      user_reviews: [
        {
          review_id: 3,
          user_id: 3,
          comment: "So comfortable!",
          rating: 4
        },
        {
          review_id: 4,
          user_id: 4,
          comment: "Great quality.",
          rating: 5
        }
      ]
    },
    {
      product_id: 2,
      title: "Sporty Track Suit",
      image: "assets/image/sporty_track_suit.jpeg",
      gender: "child",
      category: "track suit",
      size: ["XS", "S"],
      manufacturer: "Nike",
      product_date: new Date("2021-09-15T08:45:00Z"),
      price: 120,
      user_reviews: [
        {
          review_id: 5,
          user_id: 1,
          comment: "Perfect for my kid!",
          rating: 5
        }
      ]
    },
    {
      product_id: 3,
      title: "Casual Shorts",
      image: "assets/image/casual_shorts.jpeg",
      gender: "man",
      category: "shorts",
      size: ["M", "L"],
      manufacturer: "Underarmor",
      product_date: new Date("2023-06-20T12:30:00Z"),
      price: 90,
      user_reviews: [
        {
          review_id: 6,
          user_id: 2,
          comment: "Nice and comfy!",
          rating: 4
        }
      ]
    },
    {
      product_id: 4,
      title: "Elegant Skirt",
      image: "assets/image/elegant_skirt.jpeg",
      gender: "woman",
      category: "skirt",
      size: ["S", "M", "L"],
      manufacturer: "Sergio Tacchini",
      product_date: new Date("2022-11-05T09:15:00Z"),
      price: 180,
      user_reviews: [
        {
          review_id: 7,
          user_id: 3,
          comment: "Love the design!",
          rating: 5
        }
      ]
    },
    {
      product_id: 5,
      title: "Comfy Robe",
      image: "assets/image/comfy_robe.jpeg",
      gender: "woman",
      category: "robe",
      size: ["M", "L"],
      manufacturer: "Gucci",
      product_date: new Date("2023-01-12T15:00:00Z"),
      price: 220,
      user_reviews: [
        {
          review_id: 8,
          user_id: 4,
          comment: "Feels great!",
          rating: 4
        }
      ]
    },
    {
      product_id: 6,
      title: "Stylish Trousers",
      image: "assets/image/stylish_trousers.jpeg",
      gender: "man",
      category: "trousers",
      size: ["M", "L", "XL"],
      manufacturer: "Brioni",
      product_date: new Date("2021-07-25T11:00:00Z"),
      price: 250,
      user_reviews: [
        {
          review_id: 9,
          user_id: 1,
          comment: "High quality material.",
          rating: 5
        }
      ]
    },
    {
      product_id: 7,
      title: "Warm Jacket",
      image: "assets/image/warm_jacket.jpeg",
      gender: "man",
      category: "jacket",
      size: ["L", "XL"],
      manufacturer: "Nike",
      product_date: new Date("2022-12-15T14:45:00Z"),
      price: 300,
      user_reviews: [
        {
          review_id: 10,
          user_id: 2,
          comment: "Very bad quality, but so cute.",
          rating: 2
        }
      ]
    },
    {
      product_id: 8,
      title: "Denim Jeans",
      image: "assets/image/denim_jeans.jpeg",
      gender: "woman",
      category: "jeans",
      size: ["S", "M", "L"],
      manufacturer: "Nike",
      product_date: new Date("2021-04-10T10:30:00Z"),
      price: 180,
      user_reviews: [
        {
          review_id: 11,
          user_id: 3,
          comment: "Great fit and style!",
          rating: 4
        }
      ]
    },
    {
      product_id: 9,
      title: "Woolen Sweater",
      image: "assets/image/woolen_sweater.jpeg",
      gender: "woman",
      category: "sweater",
      size: ["M", "L"],
      manufacturer: "Tommy Hilfiger",
      product_date: new Date("2022-01-05T09:00:00Z"),
      price: 220,
      user_reviews: [
        {
          review_id: 12,
          user_id: 4,
          comment: "Very soft and warm.",
          rating: 5
        }
      ]
    },
    {
      product_id: 10,
      title: "Leather Jacket",
      image: "assets/image/leather_jacket.jpeg",
      gender: "man",
      category: "jacket",
      size: ["L", "XL"],
      manufacturer: "Zara",
      product_date: new Date("2023-03-18T11:45:00Z"),
      price: 320,
      user_reviews: [
        {
          review_id: 13,
          user_id: 1,
          comment: "Stylish and durable.",
          rating: 5
        }
      ]
    },
    {
      product_id: 11,
      title: "Running Shoes",
      image: "assets/image/running_shoes.jpeg",
      gender: "man",
      category: "shoes",
      size: ["XL", "M", "S"],
      manufacturer: "Adidas",
      product_date: new Date("2021-08-25T07:30:00Z"),
      price: 150,
      user_reviews: [
        {
          review_id: 14,
          user_id: 2,
          comment: "Perfect for running!",
          rating: 5
        }
      ]
    },
    {
      product_id: 12,
      title: "Cotton T-Shirt",
      image: "assets/image/cotton_tshirt.jpeg",
      gender: "woman",
      category: "t-shirt",
      size: ["S", "M", "L"],
      manufacturer: "Puma",
      product_date: new Date("2022-05-10T13:00:00Z"),
      price: 60,
      user_reviews: [
        {
          review_id: 15,
          user_id: 3,
          comment: "Very comfortable.",
          rating: 4
        }
      ]
    },
    {
      product_id: 13,
      title: "Formal Shirt",
      image: "assets/image/formal_shirt.jpeg",
      gender: "child",
      category: "shirt",
      size: ["M", "L", "XL"],
      manufacturer: "Hugo Boss",
      product_date: new Date("2023-06-01T10:15:00Z"),
      price: 200,
      user_reviews: [
        {
          review_id: 16,
          user_id: 4,
          comment: "Perfect for office wear.",
          rating: 5
        }
      ]
    },
    {
      product_id: 14,
      title: "Summer Dress",
      image: "assets/image/summer_dress.jpeg",
      gender: "woman",
      category: "dress",
      size: ["S", "M", "L"],
      manufacturer: "Chanel",
      product_date: new Date("2022-07-20T09:00:00Z"),
      price: 280,
      user_reviews: [
        {
          review_id: 17,
          user_id: 1,
          comment: "Light and breezy.",
          rating: 3
        }
      ]
    },
    {
      product_id: 15,
      title: "Winter Coat",
      image: "assets/image/winter_coat.jpeg",
      gender: "child",
      category: "coat",
      size: ["M", "L"],
      manufacturer: "Burberry",
      product_date: new Date("2021-11-10T11:30:00Z"),
      price: 450,
      user_reviews: [
        {
          review_id: 18,
          user_id: 2,
          comment: "Keeps me warm in the winter!",
          rating: 4
        }
      ]
    }
  ]
  

  // Vraca sve produkte
  getProducts() {
    return this.products;
  }

  //Vraca sve velicine - getSizeSet()
  getSizeSet(): string[]{
  const allSizes = this.products.flatMap(product => product.size);
  return [...new Set(allSizes)];
  }

  //Vraca set svih jedinstvenih titlova - getUniqueTitles()
  getUniqueTitles(): string[] {
    const titles = this.products.map(product => product.title);
    return [...new Set(titles)];
  }

  //Vraca set svih kategorija - getCategories()
  getCategories(): string[] {
    const categories = this.products.map(product => product.category);
    return [...new Set(categories)];
  }

  // Vraca set proizvodjaca - getManufacturers()
  getManufacturers(): string[] {
    const manufacturers = this.products.map(product => product.manufacturer);
    return [...new Set(manufacturers)];
  }

  // Vraca sve proizvode na osnovu pola - getGenderProduct()
  getGenderProduct(gender: string) {
    return this.products.filter(product => product.gender === gender);
  }

  // Vraca proizvod na osnovu njegovog id -a - getProductById()
  getProductById(id: number) {
    return this.products.filter(product => product.product_id === id);
  }


  // Pronalazi najvecu cenu
  public findHighestPrice(): number {
    return this.products.reduce((max, product) => product.price > max ? product.price : max, 0);
  }

  // Kreira i dodaje utisak u UserReviews[] - addUserReview()
  addUserReview(product_id: number, user_id: number, comment: string, rate: number): void {
    
    const product = this.products.find(p => p.product_id === product_id);
  
    if (!product) {
      console.error('Product with this ID didn`t find.');
      return;
    }
  
    // Kreira review_id + 1
    const maxReviewId = product.user_reviews?.reduce((max, review) => review.review_id > max ? review.review_id : max, -1) ?? -1;
    const newReviewId = maxReviewId + 1;
  
    // Kreira novi UserReview objekat
    const newUserReview: UserReview = {
      review_id: newReviewId,
      user_id: user_id, 
      comment: comment,
      rating: rate
    };
  
    // Dodaje novi UserReview u niz user_reviews
    if (product.user_reviews) {
      product.user_reviews.push(newUserReview);
    } else {
      product.user_reviews = [newUserReview];
    }
  }
  

  // Vraca sve komentare vezane za jedan proizvod - getComments() - nije neophodno implementirati(Moze samo da se prodje kroz niz u ViewLayer -u)
  getComments() {}

 // Izracunava prosecnu ocenu proizvoda - calculateAverageRating()
 calculateAverageRating(user_reviews: UserReview[] | undefined): number {

  // Proverava da li niz postoji i da li ima elemenata
  if (!user_reviews || user_reviews.length === 0) {
    return 5;
  }

  const totalRating = user_reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / user_reviews.length;

  return parseFloat(averageRating.toFixed(2));
}


}
