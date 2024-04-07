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
    like: 673,
    dislike: 242,
    reviews: [
      {
        id: 1,
        content:
          "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
      },
      {
        id: 2,
        content:
          "The neighborhood is vibrant with many small businesses. However, the traffic congestion is a major issue. The schools in the area are decent but lack adequate facilities.",
      },
      {
        id: 3,
        content:
          "The area has a rich cultural heritage with various festivals celebrated throughout the year. However, the lack of proper waste management leads to environmental pollution. The local markets offer a wide variety of fresh produce.",
      },
      {
        id: 4,
        content:
          "The street is lined with small businesses and local eateries. However, the noise pollution from nearby factories can be bothersome. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        content:
          "The neighborhood has a strong sense of community with regular social events organized by residents. However, the lack of proper street lighting poses a security risk during the night. The area is well-connected with public transportation options.",
      },
    ],
    amenities: amenities,
    comment: 53,
  },
  {
    id: 2,
    address: "25, Adeola Odeku Street, Victoria Island, Lagos",
    like: 354,
    dislike: 782,
    reviews: [
      {
        id: 1,
        content:
          "The location is prime with easy access to various amenities. However, the noise pollution can be unbearable at times. The security in the area is top-notch.",
      },
      {
        id: 2,
        content:
          "The street is lined with high-end restaurants and luxury boutiques. However, the cost of living is quite high. The public transportation options are limited.",
      },
      {
        id: 3,
        content:
          "The area is popular among expatriates due to its proximity to international schools and diplomatic missions. However, the traffic congestion during peak hours can be frustrating. The street is lined with upscale residential buildings.",
      },
      {
        id: 4,
        content:
          "The street is known for its vibrant nightlife with several bars and clubs. However, the noise pollution can be a concern for residents living nearby. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        content:
          "The neighborhood has a diverse community with people from different backgrounds. The street is bustling with activity throughout the day. However, the lack of green spaces is a downside.",
      },
    ],
    amenities: amenities,
    comments: 78,
  },

  {
    id: 3,
    address: "25, Adeola Odeku Street, Victoria Island, Lagos",
    like: 354,
    dislike: 782,
    reviews: [
      {
        id: 1,
        content:
          "The location is prime with easy access to various amenities. However, the noise pollution can be unbearable at times. The security in the area is top-notch.",
      },
      {
        id: 2,
        content:
          "The street is lined with high-end restaurants and luxury boutiques. However, the cost of living is quite high. The public transportation options are limited.",
      },
      {
        id: 3,
        content:
          "The area is popular among expatriates due to its proximity to international schools and diplomatic missions. However, the traffic congestion during peak hours can be frustrating. The street is lined with upscale residential buildings.",
      },
      {
        id: 4,
        content:
          "The street is known for its vibrant nightlife with several bars and clubs. However, the noise pollution can be a concern for residents living nearby. The area lacks green spaces for recreational activities.",
      },
      {
        id: 5,
        content:
          "The neighborhood has a diverse community with people from different backgrounds. The street is bustling with activity throughout the day. However, the lack of green spaces is a downside.",
      },
    ],
    amenities: amenities,
    comments: 78,
  },

  {
    id: 4,
    address: "7A, Freedom Avenue, Abuja, Nigeria",
    like: 921,
    dislike: 78,
    reviews: [
      {
        id: 1,
        content:
          "The neighborhood benefits from stable electricity, although occasional power outages can occur. Roads are generally well-paved, but drainage issues persist during heavy rains. Residents actively participate in keeping the area clean. Numerous grocery stores and supermarkets cater to the community's needs.",
      },
      {
        id: 2,
        content:
          "Abuja boasts a thriving business scene, with a variety of enterprises contributing to its vibrant economy. However, traffic congestion can be a challenge during peak hours. Schools in the vicinity offer quality education, although there's room for improvement in facilities.",
      },
      {
        id: 3,
        content:
          "The area celebrates its cultural diversity through various festivals and events, adding vibrancy to the community. Efforts in waste management contribute to maintaining a clean environment. Local markets provide fresh produce and a glimpse into the city's culinary diversity.",
      },
      {
        id: 4,
        content:
          "Freedom Avenue hosts a plethora of local businesses and dining establishments. Despite the bustling activity, noise pollution from nearby commercial areas can be a concern. However, green spaces for recreational activities are scarce in the vicinity.",
      },
      {
        id: 5,
        content:
          "Community engagement is strong on Freedom Avenue, with residents organizing regular social gatherings. Adequate street lighting enhances security, ensuring a safe environment at night. The area benefits from accessible public transportation options.",
      },
    ],
    amenities: amenities,
    comment: 109,
  },

  {
    id: 5,
    address: "3, Prosperity Avenue, Enugu, Nigeria",
    amenities: amenities,
    like: 742,
    dislike: 98,
    reviews: [
      {
        id: 1,
        content:
          "Enugu enjoys uninterrupted electricity supply, contributing to a comfortable living environment. The roads are well-paved, minimizing traffic congestion. Residents take pride in maintaining a clean neighborhood. Access to markets and shopping centers adds to the convenience of daily life.",
      },
      {
        id: 2,
        content:
          "The city thrives with diverse businesses, offering ample opportunities for economic growth. Traffic congestion is minimal, facilitating smooth commuting experiences. Educational institutions in the area are commendable, providing quality education to residents.",
      },
      {
        id: 3,
        content:
          "Prosperity Avenue reflects the city's rich cultural heritage through various festivities held throughout the year. Waste management practices are effective, ensuring a tidy environment. Local markets offer fresh produce and a variety of goods for residents.",
      },
      {
        id: 4,
        content:
          "The street buzzes with activity, hosting numerous businesses and eateries. While commercial vibrancy adds to the charm, noise pollution can be a concern. However, the lack of recreational green spaces is a notable drawback for residents.",
      },
      {
        id: 5,
        content:
          "Community engagement thrives on Prosperity Avenue, with residents coming together for social events regularly. Adequate street lighting enhances safety, creating a secure environment even at night. Public transportation options are easily accessible, facilitating seamless mobility.",
      },
    ],
    comment: 88,
  },

  {
    id: 7,
    address: "18, Serenity Street, Benin City, Nigeria",
    amenities: amenities,
    like: 788,
    dislike: 56,
    reviews: [
      {
        id: 1,
        content:
          "Benin City enjoys stable electricity, providing residents with a comfortable living environment. The roads are well-constructed and maintained, ensuring smooth traffic flow. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers cater to the diverse needs of residents.",
      },
      {
        id: 2,
        content:
          "The city boasts a thriving business scene, offering various opportunities for economic growth. Although traffic congestion can occur in certain areas, the overall transportation network is efficient. Educational institutions in Benin City provide quality education, although there may be room for improvement in facilities.",
      },
      {
        id: 3,
        content:
          "Serenity Street epitomizes tranquility, with its serene ambiance and well-maintained surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other goods through the vibrant local markets.",
      },
      {
        id: 4,
        content:
          "The street is bustling with activity, hosting a multitude of businesses and eateries. While this adds to the vibrancy of the area, noise pollution can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure activities.",
      },
      {
        id: 5,
        content:
          "Community cohesion thrives on Serenity Street, with residents actively participating in social gatherings and events. Adequate street lighting enhances safety, ensuring a secure environment day and night. Public transportation options are readily available, facilitating convenient mobility.",
      },
    ],
    comment: 92,
  },

  {
    id: 8,
    address: "5, Harmony Lane, Ibadan, Nigeria",
    amenities: amenities,
    like: 652,
    dislike: 112,
    reviews: [
      {
        id: 1,
        content:
          "Ibadan benefits from reliable electricity supply, ensuring residents enjoy a comfortable lifestyle. The roads are well-paved and maintained, although traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant living environment. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Ibadan. While traffic congestion can be a challenge, especially in central areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Harmony Lane exudes tranquility, with its peaceful surroundings and well-kept environment. Effective waste management practices ensure cleanliness and hygiene. Residents have access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        content:
          "The lane is bustling with activity, hosting numerous businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Harmony Lane, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 79,
  },

  {
    id: 9,
    address: "22, Peaceful Avenue, Owerri, Nigeria",
    amenities: amenities,
    like: 721,
    dislike: 86,
    reviews: [
      {
        id: 1,
        content:
          "Owerri enjoys stable electricity supply, ensuring residents have a comfortable living environment. The roads are well-maintained, although traffic congestion can occur during peak hours. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of residents.",
      },
      {
        id: 2,
        content:
          "The city boasts a vibrant economy, with numerous businesses thriving in Owerri. While traffic congestion is a concern in certain areas, the overall transportation network is efficient. Educational institutions in Owerri provide quality education, although there may be room for improvement in facilities.",
      },
      {
        id: 3,
        content:
          "Peaceful Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other goods through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community cohesion thrives on Peaceful Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating convenient mobility.",
      },
    ],
    comment: 94,
  },

  {
    id: 10,
    address: "8, Tranquil Street, Calabar, Nigeria",
    amenities: amenities,
    like: 698,
    dislike: 77,
    reviews: [
      {
        id: 1,
        content:
          "Calabar benefits from reliable electricity supply, ensuring a comfortable living environment for residents. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Calabar. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Tranquil Street lives up to its name, with its peaceful surroundings and well-kept environment. Effective waste management practices ensure cleanliness and hygiene. Residents have access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        content:
          "The street is bustling with activity, hosting numerous businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Tranquil Street, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 81,
  },

  {
    id: 11,
    address: "12, Serene Crescent, Warri, Nigeria",
    amenities: amenities,
    like: 564,
    dislike: 109,
    reviews: [
      {
        id: 1,
        content:
          "Warri benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Warri. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Warri offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Serene Crescent lives up to its name, offering tranquility amidst bustling city life. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the vibrant local markets.",
      },
      {
        id: 4,
        content:
          "The crescent is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Serene Crescent, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 73,
  },

  {
    id: 12,
    address: "4, Peace Avenue, Uyo, Nigeria",
    amenities: amenities,
    like: 803,
    dislike: 45,
    reviews: [
      {
        id: 1,
        content:
          "Uyo enjoys reliable electricity supply, providing residents with a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Uyo. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Peace Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Peace Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 96,
  },

  {
    id: 13,
    address: "4, Peace Avenue, Uyo, Nigeria",
    amenities: amenities,
    like: 803,
    dislike: 45,
    reviews: [
      {
        id: 1,
        content:
          "Uyo enjoys reliable electricity supply, providing residents with a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Numerous markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Uyo. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Peace Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Peace Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 96,
  },

  {
    id: 14,
    address: "30, Harmony Avenue, Jos, Nigeria",
    amenities: amenities,
    like: 512,
    dislike: 94,
    reviews: [
      {
        id: 1,
        content:
          "Jos enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Jos. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Harmony Avenue lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Harmony Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 67,
  },

  {
    id: 15,
    address: "17, Serenity Road, Aba, Nigeria",
    amenities: amenities,
    like: 624,
    dislike: 101,
    reviews: [
      {
        id: 1,
        content:
          "Aba benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Aba. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Aba offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Serenity Road lives up to its name, offering peace and quiet amidst the urban hustle. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The road is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Serenity Road, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 79,
  },

  {
    id: 16,
    address: "9, Tranquil Avenue, Akure, Nigeria",
    amenities: amenities,
    like: 705,
    dislike: 88,
    reviews: [
      {
        id: 1,
        content:
          "Akure benefits from reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Akure. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Tranquil Avenue lives up to its name, with its serene ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The avenue is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Tranquil Avenue, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 82,
  },

  {
    id: 17,
    address: "7, Harmony Close, Ilorin, Nigeria",
    amenities: amenities,
    like: 732,
    dislike: 69,
    reviews: [
      {
        id: 1,
        content:
          "Ilorin enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Ilorin. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Harmony Close lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The close is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Harmony Close, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 86,
  },
  {
    id: 18,
    address: "25, Serenity Lane, Abeokuta, Nigeria",
    amenities: amenities,
    like: 621,
    dislike: 83,
    reviews: [
      {
        id: 1,
        content:
          "Abeokuta benefits from consistent electricity supply, ensuring a comfortable living environment for residents. The roads are well-maintained, though traffic congestion can occur during peak hours. The community takes pride in cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers cater to the diverse needs of the population.",
      },
      {
        id: 2,
        content:
          "The city boasts a thriving business scene, with numerous opportunities for economic growth in Abeokuta. While traffic congestion is a concern in some areas, efforts are made to improve transportation infrastructure. Educational institutions in Abeokuta offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Serenity Lane lives up to its name, offering peace and quiet amidst the urban hustle. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The lane is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Serenity Lane, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 76,
  },
  {
    id: 19,
    address: "14, Tranquility Street, Bauchi, Nigeria",
    amenities: amenities,
    like: 543,
    dislike: 92,
    reviews: [
      {
        id: 1,
        content:
          "Bauchi benefits from reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Bauchi. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Tranquility Street lives up to its name, with its peaceful ambiance and well-kept surroundings. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The street is bustling with activity, hosting a variety of businesses and eateries. While this adds to the liveliness of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Tranquility Street, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 69,
  },
  {
    id: 20,
    address: "11, Peaceful Close, Lokoja, Nigeria",
    amenities: amenities,
    like: 689,
    dislike: 79,
    reviews: [
      {
        id: 1,
        content:
          "Lokoja enjoys reliable electricity supply, ensuring residents have a comfortable living environment. The roads are well-paved and maintained, minimizing traffic congestion. The community places a strong emphasis on cleanliness, contributing to a pleasant atmosphere. Various markets and shopping centers provide convenience for daily needs.",
      },
      {
        id: 2,
        content:
          "The city boasts a diverse economic landscape, with various businesses thriving in Lokoja. While traffic congestion can occur in certain areas, efforts are made to improve transportation infrastructure. Educational institutions in the city offer quality education, although some may require better facilities.",
      },
      {
        id: 3,
        content:
          "Peaceful Close lives up to its name, offering tranquility amidst the bustling city life. Effective waste management practices ensure cleanliness and hygiene. Residents have easy access to fresh produce and other essentials through the bustling local markets.",
      },
      {
        id: 4,
        content:
          "The close is bustling with activity, hosting various businesses and eateries. While this adds to the vibrancy of the area, noise pollution from commercial activities can be a concern. However, the lack of recreational spaces is a notable drawback for residents seeking outdoor leisure.",
      },
      {
        id: 5,
        content:
          "Community bonds are strong on Peaceful Close, with residents actively participating in social events and gatherings. Adequate street lighting enhances safety, ensuring a secure environment both day and night. Public transportation options are readily available, facilitating easy mobility within the city.",
      },
    ],
    comment: 82,
  },
];
