//this function getch a list of hotels.
export function getHotelShopData() {
  return hotelShopData;
}

//this funciton fetch a single hotel by its ID 
export function getHotel(hotelID) {
  return hotelShopData.find(hotel => hotel.hotelID == hotelID);
}

//This array of object contains the hotel. Each hotel is an object with properties
const hotelShopData = [
  {
    hotelID: 1,
    title: "Zambales, Philippines.",
    hotelName: "Acea Subic Bay",
    desc: "A top-notch hotel boasts an array of luxurious amenities and services, ensuring a memorable stay. Elegant rooms with modern comforts, pristine bathrooms, and scenic views create a relaxing atmosphere. A fine-dining restaurant offers delectable cuisine, while a fitness center and spa cater to wellness needs. Concierge services, airport transfers, and 24/7 room service enhance convenience. State-of-the-art conference facilities are ideal for business travelers, and leisure guests can unwind in pools or lounges. Impeccable housekeeping and friendly staff provide exceptional hospitality. With attention to every detail, such hotels offer an unforgettable experience for discerning travelers seeking comfort and indulgence.",
    image1: "https://pix8.agoda.net/hotelImages/140/1400713/1400713_17061412270053674708.jpg?ca=6&ce=1&s=1024x768",
    image:"https://gttp.imgix.net/397092/x/0/acea-subic-beach-resort-1.jpg?auto=compress%2Cformat&ch=Width%2CDPR&dpr=1&ixlib=php-3.3.0&w=883",
    image2:"https://www.kayak.com/rimg/himg/92/5f/3c/agoda-2847174-89806267-885559.jpg?width=720&height=576&crop=true",
    image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2GdikFIsFIZ-Cl9qPj00ivm27AzXD51XsQ&usqp=CAU",
    image4:"https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/71/95/7195058.jpeg",
    specifications: "Kids Friendly, Metro Access, Private Bathroom ",
    adress:"San Bernardino Road, Subic Bay Freeport Zone, 2200 Zambales, Philippines.",
    price: "€ 85",
    category: "news",
    isChild: true,
    isMetro: false,
    isDesk: true,
    

  },
  {
    hotelID: 2,
    title: "St.Moritz, Switzerland ",
    hotelName: "Badrutt's Palace Hotel",
    desc: "A top-notch hotel boasts an array of luxurious amenities and services, ensuring a memorable stay. Elegant rooms with modern comforts, pristine bathrooms, and scenic views create a relaxing atmosphere. A fine-dining restaurant offers delectable cuisine, while a fitness center and spa cater to wellness needs. Concierge services, airport transfers, and 24/7 room service enhance convenience. State-of-the-art conference facilities are ideal for business travelers, and leisure guests can unwind in pools or lounges. Impeccable housekeeping and friendly staff provide exceptional hospitality. With attention to every detail, such hotels offer an unforgettable experience for discerning travelers seeking comfort and indulgence.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/83/a2/78/badrutt-s-palace-hotel.jpg?w=1400&h=-1&s=1",
    image1:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d7/76/79/suite-deluxe-bedroom.jpg?w=1400&h=-1&s=1",
    image2:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d7/70/40/le-grand-hall.jpg?w=1400&h=-1&s=1",
    image3:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d7/76/1f/exterior.jpg?w=1400&h=-1&s=1",
    image4:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5c/5a/f9/matsuhisa.jpg?w=1600&h=-1&s=1",
    specifications: "Kids Friendly, Metro Access, Private Bathroom ",
    adress:"Serlas, Via 27, St. Moritz 7500 Switzerland",
    price: "€ 100",
    category: "news",
    isChild: true,
    isMetro: true,
    isDesk: false,
  },
  {
    hotelID: 3,
    title: "Sicily, Italy",
    hotelName: "Le Villette - Taormina",
    desc: "A top-notch hotel boasts an array of luxurious amenities and services, ensuring a memorable stay. Elegant rooms with modern comforts, pristine bathrooms, and scenic views create a relaxing atmosphere. A fine-dining restaurant offers delectable cuisine, while a fitness center and spa cater to wellness needs. Concierge services, airport transfers, and 24/7 room service enhance convenience. State-of-the-art conference facilities are ideal for business travelers, and leisure guests can unwind in pools or lounges. Impeccable housekeeping and friendly staff provide exceptional hospitality. With attention to every detail, such hotels offer an unforgettable experience for discerning travelers seeking comfort and indulgence.",
    image1: "https://media-cdn.tripadvisor.com/media/photo-w/19/50/fc/4b/agave-private-terrace.jpg",
    image:"https://media-cdn.tripadvisor.com/media/photo-o/25/64/65/dd/aloe-private-jacuzzi.jpg",
    image2:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/98/45/dc/le-villette-taormina.jpg?w=1400&h=-1&s=1",
    image3:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/98/45/fb/le-villette-taormina.jpg?w=1400&h=-1&s=1",
    image4:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/e6/66/db/aloe-apartment.jpg?w=1400&h=-1&s=1",
    specifications: "Kids Friendly, Metro Access, Private Bathroom ",
    adress:"C Via Guardiola Vecchia 36, 98039, Taormina, Sicily Italy",
    price: "€ 95",
    category: "news",
    isChild: false,
    isMetro: true,
    isDesk: true,

  },
  {
    hotelID: 4,
    title: "Germany, Bonn",
    hotelName: "Marriot Hotel",
    desc: "A top-notch hotel boasts an array of luxurious amenities and services, ensuring a memorable stay. Elegant rooms with modern comforts, pristine bathrooms, and scenic views create a relaxing atmosphere. A fine-dining restaurant offers delectable cuisine, while a fitness center and spa cater to wellness needs. Concierge services, airport transfers, and 24/7 room service enhance convenience. State-of-the-art conference facilities are ideal for business travelers, and leisure guests can unwind in pools or lounges. Impeccable housekeeping and friendly staff provide exceptional hospitality. With attention to every detail, such hotels offer an unforgettable experience for discerning travelers seeking comfort and indulgence.",
    image: "https://lh5.googleusercontent.com/p/AF1QipPaJX-jkcSnYsumLuJ4ODQvhzMf33Zy5DpxCKP_=w253-h168-k-no",
    image2:"https://lh5.googleusercontent.com/p/AF1QipMG2c3a6Ecq4E6R2x7cO5oS6lUpvWm3SlkOBR3Z=w253-h189-k-no",
    image1:"https://lh5.googleusercontent.com/p/AF1QipOrbeVHpNq16w5hWemDaePZZ3OaKYfrz3vOvhKd=w253-h168-k-no",
    image4:"https://lh5.googleusercontent.com/p/AF1QipPBUQlOE3glNv4kPs7sklGnd_cOEkybpHnV3ZSH=w253-h168-k-no",
    image3:"https://lh5.googleusercontent.com/p/AF1QipNe7i_BT7nDdFspV3KP1ANsgo3T1_UZ4mfMSx4n=w253-h168-k-no",
    specifications: "Kids Friendly, Metro Access, Private Bathroom ",
    adress:"Platz d. Vereinten Nationen 4, 53113 Bonn, Germany",
    price: "€ 70",
    category: "news",
    isChild: true,
    isMetro: false,
    isDesk: true,

  },
  {
    hotelID: 5,
    title: "Melbourne, Australia",
    hotelName: "Hotel Windsor",
    desc: "A top-notch hotel boasts an array of luxurious amenities and services, ensuring a memorable stay. Elegant rooms with modern comforts, pristine bathrooms, and scenic views create a relaxing atmosphere. A fine-dining restaurant offers delectable cuisine, while a fitness center and spa cater to wellness needs. Concierge services, airport transfers, and 24/7 room service enhance convenience. State-of-the-art conference facilities are ideal for business travelers, and leisure guests can unwind in pools or lounges. Impeccable housekeeping and friendly staff provide exceptional hospitality. With attention to every detail, such hotels offer an unforgettable experience for discerning travelers seeking comfort and indulgence.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Melbourne_%28AU%29%2C_Hotel_Windsor_--_2019_--_1578.jpg/800px-Melbourne_%28AU%29%2C_Hotel_Windsor_--_2019_--_1578.jpg?20191209120100",
    image1:"https://lh6.googleusercontent.com/proxy/QAmTWtzeXJyaAEV7dNzETr8S-NX535yGzKEkgfRzwCsmRoRl9cA4zQX_DuGkJ_jzzMasn2h5HIacUH34vILM1uojVUcXW4aLkC0Nk_hV24qq_CJYqCex6v68FTl5xv0WGyPwdfeoGFAU05IOVuTRhWMQ4o67gMw=w253-h168-k-no",
    image2:"https://lh5.googleusercontent.com/p/AF1QipPgI-0YpojnR3aBLpirNQW6XbNQWpUEWd0ryOXo=w253-h189-k-no",
    image3:"https://lh5.googleusercontent.com/p/AF1QipOskCGaUsVwybwPIc9OKckBWHNyguK6pkRKRwh_=w253-h189-k-no",
    image4:"https://lh5.googleusercontent.com/p/AF1QipOcc8d-LP5pK_vFkWiYJ-ACrIMBlMK34EVDwvHp=w253-h189-k-no",
    specifications: "Kids Friendly, Metro Access, Private Bathroom ",
    adress:"111 Spring St, Melbourne VIC 3000, Australia",
    price: "€ 65",
    category: "news",
    isChild: true,
    isMetro: true,
    isDesk: false,


  }
]
