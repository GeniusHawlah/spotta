const amenities = [
  "School",
  "Hospital",
  "Shopping Malls",
  "Airport",
  "Park",
  "Gym",
  "Restaurant",
  "Cinema",
  "Bank",
  "Market",
  "Library",
  "Pharmacy",
  "Coffee Shop",
  "Playground",
  "Gas Station",
];

export const ADDRESSES = [
  {
    id: 1,
    address: "10, Olumo Street, Surulere, Lagos",

    reviews: [
      {
        id: 1,
        like: 732,
        dislike: 495,
        comments: 178,
        time: "04/08/2023 10:15:32",
        author: "Ayobami O.",
        rating: 5,
        content:
          "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      },
      {
        id: 2,
        like: 267,
        dislike: 691,
        comments: 829,
        time: "08/15/2023 09:20:45",
        author: "Chiamaka E.",
        rating: 4,
        content:
          "The neighborhood is vibrant with many small businesses. However, the traffic congestion is a major issue. The schools in the area are decent but lack adequate facilities.",
      },
      {
        id: 3,
        like: 86,
        dislike: 480,
        comments: 333,
        time: "10/27/2023 14:35:18",
        author: "Obinna U.",
        rating: 3,
        content:
          "The area has a rich cultural heritage with various festivals celebrated throughout the year. However, the lack of proper waste management leads to environmental pollution. The local markets offer a wide variety of fresh produce.",
      },
      {
        id: 4,
        like: 631,
        dislike: 182,
        comments: 599,
        time: "04/19/2024 16:50:21",
        author: "Aisha I.",
        rating: 2,
        content:
          "The street is lined with small businesses and local eateries. However, the noise pollution from nearby factories can be bothersome. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        like: 954,
        dislike: 327,
        comments: 74,
        time: "12/03/2023 08:55:37",
        author: "Ngozi C.",
        rating: 1,
        content:
          "The neighborhood has a strong sense of community with regular social events organized by residents. However, the lack of proper street lighting poses a security risk during the night. The area is well-connected with public transportation options.",
      },
    ],
    amenities: amenities,
  },
  {
    id: 2,
    address: "25, Adeola Odeku Street, Victoria Island, Lagos",

    reviews: [
      {
        id: 1,
        like: 438,
        dislike: 207,
        comments: 92,
        time: "04/08/2023 10:15:32",
        author: "Chidinma A.",
        rating: 5,
        content:
          "The location is prime with easy access to various amenities. However, the noise pollution can be unbearable at times. The security in the area is top-notch.",
      },
      {
        id: 2,
        like: 719,
        dislike: 152,
        comments: 378,
        time: "06/15/2023 09:20:45",
        author: "Emeka B.",
        rating: 4,
        content:
          "The street is lined with high-end restaurants and luxury boutiques. However, the cost of living is quite high. The public transportation options are limited.",
      },
      {
        id: 3,
        like: 625,
        dislike: 379,
        comments: 543,
        time: "11/27/2023 14:35:18",
        author: "Fatima C.",
        rating: 3,
        content:
          "The area is popular among expatriates due to its proximity to international schools and diplomatic missions. However, the traffic congestion during peak hours can be frustrating. The street is lined with upscale residential buildings.",
      },
      {
        id: 4,
        like: 124,
        dislike: 893,
        comments: 215,
        time: "08/19/2024 16:50:21",
        author: "Gbenga D.",
        rating: 2,
        content:
          "The street is known for its vibrant nightlife with several bars and clubs. However, the noise pollution can be a concern for residents living nearby. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        like: 573,
        dislike: 426,
        comments: 741,
        time: "03/12/2023 08:55:37",
        author: "Hassan E.",
        rating: 1,
        content:
          "The neighborhood has a diverse community with people from different backgrounds. The street is bustling with activity throughout the day. However, the lack of green spaces is a downside.",
      },
    ],
    amenities: amenities,
  },

  {
    id: 3,
    address: "25, Adeola Odeku Street, Victoria Island, Lagos",

    reviews: [
      {
        id: 1,
        like: 183,
        dislike: 576,
        comments: 348,
        time: "07/12/2023 14:28:53",
        author: "Ifeoluwa F.",
        rating: 3,
        content:
          "The location is prime with easy access to various amenities. However, the noise pollution can be unbearable at times. The security in the area is top-notch.",
      },
      {
        id: 2,
        like: 524,
        dislike: 287,
        comments: 691,
        time: "09/25/2023 12:45:18",
        author: "Chidubem G.",
        rating: 4,
        content:
          "The street is lined with high-end restaurants and luxury boutiques. However, the cost of living is quite high. The public transportation options are limited.",
      },
      {
        id: 3,
        like: 769,
        dislike: 423,
        comments: 215,
        time: "05/18/2023 09:30:42",
        author: "Chinonso H.",
        rating: 2,
        content:
          "The area is popular among expatriates due to its proximity to international schools and diplomatic missions. However, the traffic congestion during peak hours can be frustrating. The street is lined with upscale residential buildings.",
      },
      {
        id: 4,
        like: 315,
        dislike: 692,
        comments: 837,
        time: "11/03/2024 08:20:37",
        author: "Amaka I.",
        rating: 5,
        content:
          "The street is known for its vibrant nightlife with several bars and clubs. However, the noise pollution can be a concern for residents living nearby. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        like: 468,
        dislike: 154,
        comments: 589,
        time: "02/28/2024 17:10:59",
        author: "Abimbola J.",
        rating: 1,
        content:
          "The neighborhood has a diverse community with people from different backgrounds. The street is bustling with activity throughout the day. However, the lack of green spaces is a downside.",
      },
    ],

    amenities: amenities,
  },

  {
    id: 4,
    address: "7A, Freedom Avenue, Abuja, Nigeria",

    reviews: [
      {
        id: 1,
        like: 742,
        dislike: 328,
        comments: 587,
        time: "10/08/2023 11:45:21",
        author: "Chioma K.",
        rating: 4,
        content:
          "The neighborhood benefits from stable electricity, although occasional power outages can occur. Roads are generally well-paved, but drainage issues persist during heavy rains. Residents actively participate in keeping the area clean. Numerous grocery stores and supermarkets cater to the community's needs.",
      },
      {
        id: 2,
        like: 217,
        dislike: 915,
        comments: 438,
        time: "07/17/2023 14:30:45",
        author: "Emmanuel L.",
        rating: 3,
        content:
          "Abuja boasts a thriving business scene, with a variety of enterprises contributing to its vibrant economy. However, traffic congestion can be a challenge during peak hours. Schools in the vicinity offer quality education, although there's room for improvement in facilities.",
      },
      {
        id: 3,
        like: 584,
        dislike: 176,
        comments: 293,
        time: "11/05/2023 09:20:37",
        author: "Fatima M.",
        rating: 5,
        content:
          "The area celebrates its cultural diversity through various festivals and events, adding vibrancy to the community. Efforts in waste management contribute to maintaining a clean environment. Local markets provide fresh produce and a glimpse into the city's culinary diversity.",
      },
      {
        id: 4,
        like: 389,
        dislike: 524,
        comments: 872,
        time: "04/20/2024 08:55:37",
        author: "Gbenga N.",
        rating: 2,
        content:
          "Freedom Avenue hosts a plethora of local businesses and dining establishments. Despite the bustling activity, noise pollution from nearby commercial areas can be a concern. However, green spaces for recreational activities are scarce in the vicinity.",
      },
      {
        id: 5,
        like: 856,
        dislike: 107,
        comments: 751,
        time: "01/12/2024 16:40:29",
        author: "Hassan O.",
        rating: 1,
        content:
          "Community engagement is strong on Freedom Avenue, with residents organizing regular social gatherings. Adequate street lighting enhances security, ensuring a safe environment at night. The area benefits from accessible public transportation options.",
      },
    ],

    amenities: amenities,
  },

  {
    id: 5,
    address: "3, Prosperity Avenue, Enugu, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 592,
        dislike: 214,
        comments: 378,
        time: "08/05/2023 13:20:45",
        author: "Chinedu P.",
        rating: 3,
        content:
          "Enugu enjoys uninterrupted electricity supply, contributing to a comfortable living environment. The roads are well-paved, minimizing traffic congestion. Residents take pride in maintaining a clean neighborhood. Access to markets and shopping centers adds to the convenience of daily life.",
      },
      {
        id: 2,
        like: 475,
        dislike: 689,
        comments: 521,
        time: "10/18/2023 09:40:21",
        author: "Chinwe Q.",
        rating: 4,
        content:
          "The city thrives with diverse businesses, offering ample opportunities for economic growth. Traffic congestion is minimal, facilitating smooth commuting experiences. Educational institutions in the area are commendable, providing quality education to residents.",
      },
      {
        id: 3,
        like: 836,
        dislike: 327,
        comments: 194,
        time: "06/25/2023 16:55:37",
        author: "Emeka R.",
        rating: 5,
        content:
          "Prosperity Avenue reflects the city's rich cultural heritage through various festivities held throughout the year. Waste management practices are effective, ensuring a tidy environment. Local markets offer fresh produce and a variety of goods for residents.",
      },
      {
        id: 4,
        like: 296,
        dislike: 752,
        comments: 663,
        time: "12/10/2024 11:15:32",
        author: "Funmilayo S.",
        rating: 2,
        content:
          "The street buzzes with activity, hosting numerous businesses and eateries. While commercial vibrancy adds to the charm, noise pollution can be a concern. However, the lack of recreational green spaces is a notable drawback for residents.",
      },
      {
        id: 5,
        like: 621,
        dislike: 138,
        comments: 895,
        time: "02/03/2024 08:30:18",
        author: "Gbenga T.",
        rating: 1,
        content:
          "Community engagement thrives on Prosperity Avenue, with residents coming together for social events regularly. Adequate street lighting enhances safety, creating a secure environment even at night. Public transportation options are easily accessible, facilitating seamless mobility.",
      },
    ],
  },

  {
    id: 7,
    address: "18, Serenity Street, Benin City, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 214,
        dislike: 672,
        comments: 524,
        time: "09/20/2023 15:10:29",
        author: "Chika U.",
        rating: 2,
        content:
          "Benin City enjoys stable electricity, providing residents with a comfortable living environment. The roads are well-constructed and maintained, ensuring smooth traffic flow. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers cater to the diverse needs of residents.",
      },
      {
        id: 2,
        like: 783,
        dislike: 379,
        comments: 216,
        time: "11/08/2023 12:45:18",
        author: "Ebuka V.",
        rating: 4,
        content:
          "The city boasts a thriving business scene, offering various opportunities for economic growth. Although traffic congestion can occur in certain areas, the overall transportation network is efficient. Educational institutions in Benin City provide quality education, although there may be room for improvement in facilities.",
      },
      {
        id: 3,
        like: 458,
        dislike: 895,
        comments: 741,
        time: "03/25/2023 10:30:42",
        author: "Chioma W.",
        rating: 1,
        content:
          "Serenity Street epitomizes tranquility, with its serene ambiance and well-maintained surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other goods through the vibrant local markets.",
      },
      {
        id: 4,
        like: 327,
        dislike: 216,
        comments: 579,
        time: "05/15/2024 09:20:45",
        author: "David X.",
        rating: 3,
        content:
          "The street is bustling with activity, hosting a multitude of businesses and eateries. While this adds to the vibrancy of the area, noise pollution can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure activities.",
      },
      {
        id: 5,
        like: 691,
        dislike: 124,
        comments: 839,
        time: "08/12/2024 14:35:18",
        author: "Esther Y.",
        rating: 5,
        content:
          "Community cohesion thrives on Serenity Street, with residents actively participating in social gatherings and events. Adequate street lighting enhances safety, ensuring a secure environment day and night. Public transportation options are readily available, facilitating convenient mobility.",
      },
    ],
  },

  {
    id: 8,
    address: "5, Harmony Lane, Ibadan, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 315,
        dislike: 728,
        comments: 495,
        time: "12/10/2023 09:30:42",
        author: "Obi E.",
        rating: 4,
        content:
          "Ibadan benefits from reliable electricity supply, ensuring residents enjoy a comfortable lifestyle. The roads are well-paved and maintained, although traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant living environment. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 678,
        dislike: 215,
        comments: 837,
        time: "07/20/2023 08:55:37",
        author: "Amara F.",
        rating: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Ibadan. While traffic congestion can be a challenge, especially in central areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 421,
        dislike: 539,
        comments: 624,
        time: "04/05/2023 16:40:29",
        author: "Kola G.",
        rating: 5,
        content:
          "Harmony Lane exudes tranquility, with its peaceful surroundings and well-kept environment. Effective waste management practices ensure cleanliness and hygiene. Residents have access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        like: 892,
        dislike: 173,
        comments: 736,
        time: "09/15/2024 11:20:45",
        author: "Ngozi H.",
        rating: 1,
        content:
          "The lane is bustling with activity, hosting numerous businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 657,
        dislike: 362,
        comments: 481,
        time: "03/28/2024 14:35:18",
        author: "Chidi I.",
        rating: 3,
        content:
          "Community bonds are strong on Harmony Lane, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 9,
    address: "22, Peaceful Avenue, Owerri, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 478,
        dislike: 192,
        comments: 653,
        time: "06/10/2023 10:30:42",
        author: "Adewale A.",
        rating: 3,
        content:
          "Owerri enjoys stable electricity supply, ensuring residents have a comfortable living environment. The roads are well-maintained, although traffic congestion can occur during peak hours. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of residents.",
      },
      {
        id: 2,
        like: 695,
        dislike: 237,
        comments: 518,
        time: "11/18/2023 09:20:45",
        author: "Babatunde B.",
        rating: 4,
        content:
          "The city boasts a vibrant economy, with numerous businesses thriving in Owerri. While traffic congestion is a concern in certain areas, the overall transportation network is efficient. Educational institutions in Owerri provide quality education, although there may be room for improvement in facilities.",
      },
      {
        id: 3,
        like: 342,
        dislike: 874,
        comments: 719,
        time: "03/05/2023 14:35:18",
        author: "Chinedu C.",
        rating: 2,
        content:
          "Peaceful Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other goods through the bustling local markets.",
      },
      {
        id: 4,
        like: 519,
        dislike: 382,
        comments: 946,
        time: "08/20/2024 12:45:18",
        author: "Damilola D.",
        rating: 5,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 827,
        dislike: 164,
        comments: 573,
        time: "01/12/2024 16:50:21",
        author: "Eniola E.",
        rating: 1,
        content:
          "Community cohesion thrives on Peaceful Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating convenient mobility.",
      },
    ],
  },

  {
    id: 10,
    address: "8, Tranquil Street, Calabar, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 625,
        dislike: 431,
        comments: 817,
        time: "05/25/2023 11:20:45",
        author: "Ayodele A.",
        rating: 4,
        content:
          "Calabar benefits from reliable electricity supply, ensuring a comfortable living environment for residents. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 348,
        dislike: 719,
        comments: 536,
        time: "10/08/2023 09:35:18",
        author: "Chika B.",
        rating: 3,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Calabar. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 792,
        dislike: 216,
        comments: 975,
        time: "03/15/2023 14:50:29",
        author: "Emeka C.",
        rating: 5,
        content:
          "Tranquil Street lives up to its name, with its peaceful surroundings and well-kept environment. Effective waste management practices ensure cleanliness and hygiene. Residents have access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        like: 493,
        dislike: 157,
        comments: 624,
        time: "08/30/2024 10:40:21",
        author: "Funke D.",
        rating: 2,
        content:
          "The street is bustling with activity, hosting numerous businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 861,
        dislike: 239,
        comments: 748,
        time: "01/18/2024 16:30:42",
        author: "Gbolahan E.",
        rating: 1,
        content:
          "Community bonds are strong on Tranquil Street, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 11,
    address: "12, Serene Crescent, Warri, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 731,
        dislike: 482,
        comments: 596,
        time: "07/12/2023 09:45:18",
        author: "Adebayo A.",
        rating: 2,
        content:
          "Warri benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        like: 285,
        dislike: 649,
        comments: 874,
        time: "10/30/2023 14:20:29",
        author: "Boluwatife B.",
        rating: 4,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Warri. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Warri offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 517,
        dislike: 193,
        comments: 365,
        time: "03/18/2023 11:35:42",
        author: "Chidinma C.",
        rating: 3,
        content:
          "Serene Crescent lives up to its name, offering tranquility amidst bustling city life. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        like: 692,
        dislike: 341,
        comments: 728,
        time: "09/05/2024 08:55:37",
        author: "Damilare D.",
        rating: 5,
        content:
          "The crescent is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 374,
        dislike: 825,
        comments: 419,
        time: "01/28/2024 12:10:29",
        author: "Emmanuel E.",
        rating: 1,
        content:
          "Community bonds are strong on Serene Crescent, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 12,
    address: "4, Peace Avenue, Uyo, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 421,
        dislike: 798,
        comments: 536,
        time: "05/18/2023 08:45:18",
        author: "Adewale A.",
        rating: 4,
        content:
          "Uyo enjoys reliable electricity supply, providing residents with a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 679,
        dislike: 215,
        comments: 893,
        time: "10/02/2023 11:30:29",
        author: "Bolaji B.",
        rating: 3,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Uyo. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 364,
        dislike: 572,
        comments: 719,
        time: "03/25/2023 14:50:42",
        author: "Chinonso C.",
        rating: 5,
        content:
          "Peace Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        like: 528,
        dislike: 147,
        comments: 682,
        time: "09/10/2024 09:20:45",
        author: "Damilola D.",
        rating: 2,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 762,
        dislike: 321,
        comments: 496,
        time: "01/30/2024 12:10:18",
        author: "Emeka E.",
        rating: 1,
        content:
          "Community bonds are strong on Peace Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 13,
    address: "4, Peace Avenue, Uyo, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 568,
        dislike: 237,
        comments: 412,
        time: "05/20/2023 09:15:32",
        author: "Abiodun A.",
        rating: 3,
        content:
          "Uyo enjoys reliable electricity supply, providing residents with a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 324,
        dislike: 785,
        comments: 596,
        time: "10/05/2023 13:45:18",
        author: "Babatunde B.",
        rating: 4,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Uyo. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 715,
        dislike: 421,
        comments: 682,
        time: "03/28/2023 10:30:42",
        author: "Chidinma C.",
        rating: 2,
        content:
          "Peace Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        like: 489,
        dislike: 196,
        comments: 347,
        time: "09/15/2024 08:20:29",
        author: "Damilola D.",
        rating: 5,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 642,
        dislike: 381,
        comments: 539,
        time: "02/02/2024 11:50:45",
        author: "Emmanuel E.",
        rating: 1,
        content:
          "Community bonds are strong on Peace Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 14,
    address: "30, Harmony Avenue, Jos, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 726,
        dislike: 184,
        comments: 397,
        time: "05/22/2023 10:20:32",
        author: "Adanna A.",
        rating: 4,
        content:
          "Jos enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 385,
        dislike: 631,
        comments: 249,
        time: "10/08/2023 12:55:18",
        author: "Bamidele B.",
        rating: 3,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Jos. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 578,
        dislike: 295,
        comments: 412,
        time: "04/02/2023 09:30:42",
        author: "Chioma C.",
        rating: 5,
        content:
          "Harmony Avenue lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        like: 436,
        dislike: 179,
        comments: 328,
        time: "09/20/2024 07:45:29",
        author: "Dauda D.",
        rating: 2,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 683,
        dislike: 412,
        comments: 567,
        time: "02/05/2024 11:15:45",
        author: "Eniola E.",
        rating: 1,
        content:
          "Community bonds are strong on Harmony Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 15,
    address: "17, Serenity Road, Aba, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 891,
        dislike: 237,
        comments: 456,
        time: "05/25/2023 08:30:42",
        author: "Adeoluwa A.",
        rating: 3,
        content:
          "Aba benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        like: 524,
        dislike: 173,
        comments: 298,
        time: "10/12/2023 10:45:18",
        author: "Boluwatife B.",
        rating: 4,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Aba. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Aba offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 676,
        dislike: 312,
        comments: 524,
        time: "04/05/2023 11:20:29",
        author: "Chiamaka C.",
        rating: 2,
        content:
          "Serenity Road lives up to its name, offering peace and quiet amidst the urban hustle. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        like: 415,
        dislike: 189,
        comments: 367,
        time: "09/25/2024 09:15:32",
        author: "Damilare D.",
        rating: 5,
        content:
          "The road is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 732,
        dislike: 428,
        comments: 593,
        time: "02/08/2024 12:00:18",
        author: "Emmanuel E.",
        rating: 1,
        content:
          "Community bonds are strong on Serenity Road, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 16,
    address: "9, Tranquil Avenue, Akure, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        like: 572,
        dislike: 198,
        comments: 341,
        time: "06/12/2023 09:45:18",
        author: "Adebayo A.",
        rating: 4,
        content:
          "Akure benefits from reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        like: 436,
        dislike: 142,
        comments: 256,
        time: "11/02/2023 11:20:29",
        author: "Bukola B.",
        rating: 3,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Akure. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        like: 689,
        dislike: 351,
        comments: 485,
        time: "04/15/2023 10:30:42",
        author: "Chinonso C.",
        rating: 5,
        content:
          "Tranquil Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        like: 394,
        dislike: 167,
        comments: 302,
        time: "10/01/2024 08:15:32",
        author: "Damilola D.",
        rating: 2,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        like: 631,
        dislike: 387,
        comments: 512,
        time: "03/05/2024 12:00:18",
        author: "Emeka E.",
        rating: 1,
        content:
          "Community bonds are strong on Tranquil Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  {
    id: 17,
    address: "7, Harmony Close, Ilorin, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        author: "Olufemi O.",
        like: 231,
        dislike: 92,
        comments: 175,
        time: "04/08/2023 10:15:32",
        rating: 4,
        content:
          "Ilorin enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        author: "Obinna O.",
        like: 418,
        dislike: 105,
        comments: 253,
        time: "05/08/2023 09:20:45",
        rating: 5,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Ilorin. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        author: "Chinyere C.",
        like: 689,
        dislike: 351,
        comments: 485,
        time: "06/08/2023 14:30:15",
        rating: 3,
        content:
          "Harmony Close lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        author: "Ayodele A.",
        like: 394,
        dislike: 167,
        comments: 302,
        time: "07/08/2023 11:45:28",
        rating: 2,
        content:
          "The close is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        author: "Omolara O.",
        like: 631,
        dislike: 387,
        comments: 512,
        time: "08/08/2023 16:55:10",
        rating: 4,
        content:
          "Community bonds are strong on Harmony Close, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },
  {
    id: 18,
    address: "25, Serenity Lane, Abeokuta, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        author: "Ayodeji A.",
        like: 531,
        dislike: 284,
        comments: 397,
        time: "03/08/2023 08:45:20",
        rating: 4,
        content:
          "Abeokuta benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        author: "Babatunde B.",
        like: 789,
        dislike: 472,
        comments: 615,
        time: "04/08/2023 09:30:15",
        rating: 5,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Abeokuta. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Abeokuta offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        author: "Chiamaka C.",
        like: 365,
        dislike: 147,
        comments: 239,
        time: "05/08/2023 10:20:30",
        rating: 3,
        content:
          "Serenity Lane lives up to its name, offering peace and quiet amidst the urban hustle. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        author: "Damilola D.",
        like: 213,
        dislike: 96,
        comments: 152,
        time: "06/08/2023 11:40:25",
        rating: 2,
        content:
          "The lane is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        author: "Emeka E.",
        like: 478,
        dislike: 215,
        comments: 368,
        time: "07/08/2023 12:55:10",
        rating: 4,
        content:
          "Community bonds are strong on Serenity Lane, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },
  {
    id: 19,
    address: "14, Tranquility Street, Bauchi, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        author: "Adeola A.",
        like: 623,
        dislike: 187,
        comments: 415,
        time: "04/16/2023 09:10:35",
        rating: 4,
        content:
          "Bauchi benefits from reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        author: "Bolaji B.",
        like: 412,
        dislike: 98,
        comments: 286,
        time: "04/17/2023 10:20:45",
        rating: 5,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Bauchi. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        author: "Chinwe C.",
        like: 752,
        dislike: 234,
        comments: 524,
        time: "04/18/2023 11:30:55",
        rating: 3,
        content:
          "Tranquility Street lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        author: "Dapo D.",
        like: 564,
        dislike: 143,
        comments: 378,
        time: "04/19/2023 12:40:05",
        rating: 2,
        content:
          "The street is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        author: "Emeka E.",
        like: 381,
        dislike: 75,
        comments: 258,
        time: "04/20/2023 13:50:15",
        rating: 4,
        content:
          "Community bonds are strong on Tranquility Street, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },
  {
    id: 20,
    address: "11, Peaceful Close, Lokoja, Nigeria",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        author: "Adeolu A.",
        like: 572,
        dislike: 126,
        comments: 312,
        time: "04/21/2023 14:00:25",
        rating: 4,
        content:
          "Lokoja enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        author: "Bukola B.",
        like: 315,
        dislike: 84,
        comments: 207,
        time: "04/22/2023 15:10:35",
        rating: 5,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Lokoja. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        author: "Chinwendu C.",
        like: 462,
        dislike: 92,
        comments: 293,
        time: "04/23/2023 16:20:45",
        rating: 3,
        content:
          "Peaceful Close lives up to its name, offering tranquility amidst the bustling city life. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        author: "Damilola D.",
        like: 278,
        dislike: 65,
        comments: 175,
        time: "04/24/2023 17:30:55",
        rating: 2,
        content:
          "The close is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        author: "Emeka E.",
        like: 187,
        dislike: 43,
        comments: 124,
        time: "04/25/2023 18:40:05",
        rating: 4,
        content:
          "Community bonds are strong on Peaceful Close, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  // To test for invalid address
  {
    id: 21,
    address: "",
    amenities: amenities,

    reviews: [
      {
        id: 1,
        author: "Adeolu A.",
        like: 572,
        dislike: 126,
        comments: 312,
        time: "04/21/2023 14:00:25",
        rating: 4,
        content:
          "Lokoja enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        author: "Bukola B.",
        like: 315,
        dislike: 84,
        comments: 207,
        time: "04/22/2023 15:10:35",
        rating: 5,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Lokoja. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        author: "Chinwendu C.",
        like: 462,
        dislike: 92,
        comments: 293,
        time: "04/23/2023 16:20:45",
        rating: 3,
        content:
          "Peaceful Close lives up to its name, offering tranquility amidst the bustling city life. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        author: "Damilola D.",
        like: 278,
        dislike: 65,
        comments: 175,
        time: "04/24/2023 17:30:55",
        rating: 2,
        content:
          "The close is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        author: "Emeka E.",
        like: 187,
        dislike: 43,
        comments: 124,
        time: "04/25/2023 18:40:05",
        rating: 4,
        content:
          "Community bonds are strong on Peaceful Close, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
  },

  // To test for empty reviews
  {
    id: 22,
    address: "17, Empty Review Close, Nowhere, Nigeria",
    amenities: amenities,

    reviews: [],
  },
];
