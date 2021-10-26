import React, { useEffect } from 'react';

import { addDoc, collection, doc, setDoc } from '@firebase/firestore';
import db from './firebase/firebaseConfig';

function UploadDataFirestore() {
  useEffect(() => {
    const products = [
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          'Aang was told he was the next Avatar at only 12 years old. While trying to flee, Aang was encased in ice and survived to be broken out after a century to restore balance to the world. Collect Pop! Aang and Momo to restore balance to your collection of Avatar: The Last Airbender. Vinyl figure is approximately 5.75-inches tall.',
        discount_percentage: 0,
        exclusive: true,
        ide: 0,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB.png?v=1611868819',
            alt: 'Front image of Aang with Momo - Avatar: The Last Airbender pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB-1.png?v=1611868819',
            alt: 'Box image of Aang with Momo - Avatar: The Last Airbender pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '4628567720002',
        slug: 'anime-avatar-last-airbender-aang-momo-pop',
        stock: 5,
        title: 'Pop! Aang with Momo - Avatar: The Last Airbender | Funko',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          "Gon's father left him in the care of a childhood friend, and now it is Gon's goal to become a hunter and seek out his father. Assemble your <i>Hunter X Hunter</i> collection with Pop! Gon Freecss. Collectible stands approximately 3.75-inches tall.",
        discount_percentage: 0,
        exclusive: false,
        ide: 1,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/41062_HunterxHunter_GonFreecs_POP_GLAM-WEB.png?v=1592287761',
            alt: 'Front image of Gon Freecss Jajank -  Hunter x Hunter pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/41062_HunterxHunter_GonFreecs_POP_GLAM-1-WEB.png?v=1622830788',
            alt: 'Box image of Gon Freecss Jajank -  Hunter x Hunter pop',
          },
        ],
        original_price: 80,
        price: 50,
        published: true,
        rating: 0,
        sku: '4602619625538',
        slug: 'gon-freecss-hunter-x-hunter',
        stock: 10,
        title: 'Gon Freecss -  Hunter x Hunter',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          'Deku and the heroes-in-training at U.A. High School are determined to rescue Eri. Offer safe haven to Pop! Deku with Eri by adding them to your <i>My Hero Academia</i> collection and complete the set. Vinyl figure is approximately 4.75-inches tall.',
        discount_percentage: 0,
        exclusive: true,
        ide: 2,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/51933_MHA_DekuInfiniteGW_POP_GLAM-1-WEB.png?v=1631057966',
            alt: 'Front image of Infinite Deku with Eri - My Hero Academia pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/51933_MHA_DekuInfiniteGW_POP_GLAM-1-1-WEB.png?v=1631057966',
            alt: 'Box image of Infinite Deku with Eri - My Hero Academia pop',
          },
        ],
        original_price: 180,
        price: 150,
        published: true,
        rating: 0,
        sku: '6953379397821',
        slug: 'anime-my-hero-academia-infinite-deku-eri-pop',
        stock: 5,
        title: 'Infinite Deku with Eri - My Hero Academia',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          'Nagato sought to bring peace to a violent world, but ended up slipping down a dark path of trying to establish peace by force and taking on the name Pain. Add Pop! Pain to your <i>Naruto: Shippuden</i> collection so that Naruto can show him a better way to bring peace to the land. Vinyl figure is approximately 5-inches tall.',
        discount_percentage: 0,
        exclusive: true,
        ide: 3,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/49807_Naruto_Pain_POP_GLAM-WEB.png?v=1611105228',
            alt: 'Front image of Pain - Naruto: Shippuden pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/49807_Naruto_Pain_POP_GLAM-1-WEB.png?v=1614618940',
            alt: 'Box image of Pain - Naruto: Shippuden pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '6176883245245',
        slug: 'anime-naruto-pain-pop',
        stock: 10,
        title: 'Pain - Naruto: Shippuden',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          'When the Olympian gods try to overtake Earth, Athena reincarnates and her five warriors emerge to harness mystic energy to fight alongside their goddess. Whether it was the manga or the 1986 anime TV adaptation that caught your attention, the <i>Saint Seiya Knights of the Zodiac</i> are coming together to defend your collection. Assemble the Saints with Pop! Dragon Shiryu. Collectible stands approximately 4.5-inches tall.',
        discount_percentage: 0,
        exclusive: false,
        ide: 4,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/47689_SaintSeiya_Shiryu_GLAM-WEB.png?v=1606243513',
            alt: 'Front image of Dragon Shiryu - Saint Seiya pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/47689_SaintSeiya_Shiryu_GLAM-1-WEB.png?v=1606243513',
            alt: 'Box image of Dragon Shiryu - Saint Seiya pop',
          },
        ],
        original_price: 80,
        price: 50,
        published: true,
        rating: 0,
        sku: '6095526494397',
        slug: 'anime-saint-seiya-dragon-shiryu-pop',
        stock: 5,
        title: 'Dragon Shiryu - Saint Seiya',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/UG9ZWEb97aQVUgiTPXmR',
        categoryKey: 1,
        description:
          "An unexpected figure sits upon the Iron Throne. Commemorate the series' iconic poster for your <i>Game of Thrones</i> collection with this Pop! Deluxe of the Ned Stark on the Iron Throne. Vinyl figure is approximately 6.5-inches tall.",
        discount_percentage: 0,
        exclusive: true,
        ide: 5,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/56791_POP_Deluxe-GOT-NedStarkonThrone_GLAM-1-WEB.png?v=1625682887',
            alt: 'Front image of Ned Stark on Throne - Game of Thrones pop deluxe',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/56791_POP_Deluxe-GOT-NedStarkonThrone_GLAM-1-1-WEB.png?v=1625682751',
            alt: 'Box image of Ned Stark on Throne - Game of Thrones pop deluxe',
          },
        ],
        original_price: 180,
        price: 150,
        published: true,
        rating: 0,
        sku: '6630868517053',
        slug: 'tv-game-of-thrones-ned-stark-on-throne-pop-deluxe',
        stock: 5,
        title: 'Ned Stark on Throne - Game of Thrones',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/UG9ZWEb97aQVUgiTPXmR',
        categoryKey: 1,
        description:
          "<i>Back to the Future</i> celebrates it's 35th anniversary, Doc Brown and Marty McFly come together for the festivities as a collection of Pop! Vinyls. Bring back one of the best parts of the past with Pop! Marty McFly in his futuristic outfit. Collectible is approximately 4-inches tall.",
        discount_percentage: 0,
        exclusive: false,
        ide: 6,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/48707_BTTF_MartyFutureOutfit_POP_GLAM-Web.png?v=1593642194',
            alt: 'Front image of Marty in Future Outfit - Back to the Future pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/48707_BTFF_MartyFutureOutfit_POP_GLAM-1-Web.png?v=1593642194',
            alt: 'Box image of Marty in Future Outfit - Back to the Future pop',
          },
        ],
        original_price: 80,
        price: 50,
        published: true,
        rating: 0,
        sku: '4621512998978',
        slug: 'marty-in-future-outfit-back-to-the-future',
        stock: 10,
        title: 'Marty in Future Outfit - Back to the Future',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/UG9ZWEb97aQVUgiTPXmR',
        categoryKey: 1,
        description:
          '<p>When superheroes are bought and owned by Vought International corporation, who will keep the heroes in check? The Boys are vigilantes with superpowers fighting to expose the corruption and falsehoods of the Vought Int. Seven "heroes". Bring home Pop! Starlight to be a hero, or perhaps a villain, in your collection of <i>The Boys</i>. There\'s a 1 in 6 chance you\'ll find the glow in the dark chase variant. Vinyl figure is approximately 4.15-inches tall. <i>Please note: Chase variants are shipped at random. Receiving a chase with purchase is not guaranteed.</i></p>',
        discount_percentage: 0,
        exclusive: false,
        ide: 7,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/48187a_TheBoys_Starlight_POP_GLAM-WEB.png?v=1612196640',
            alt: 'Front image of Starlight - The Boys pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/48187a_TheBoys_Starlight_POP_GLAM-1-WEB.png?v=1612196640',
            alt: 'Box image of Starlight - The Boys pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '6198141616317',
        slug: 'tv-the-boys-starlight-with-glow-chase-pop',
        stock: 5,
        title: 'Starlight - The Boys',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/UG9ZWEb97aQVUgiTPXmR',
        categoryKey: 1,
        description:
          '<p>Add a dash of pop culture to your holiday décor with a Funko Pop! Ornament Mandalorian and The Child. Collect and display the bounty and the hunter for your own seasonal setup or gift this collectible ornament to someone who loves <i>Star Wars</i>™: <i>The Mandalorian</i>™! Funko Pop! Ornaments make great Secret Santa gifts too, since there’s a variety of pop culture themed character ornaments to choose from which appeal to a wide variety of pop culture interests.</p>\n<ul>\n<li><i>Warning: fragile! Keep out of the reach of young children.</i></li>\n<li>Crafted from resin</li>\n<li>Approximate dimensions: 1.9”W x 3.03”H x 1.65”D</li>\n<li>Wipe clean</li>\n<li>Not recommended for outdoor us</li>\n</ul>',
        discount_percentage: 0,
        exclusive: true,
        ide: 8,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/Ornaments_SW_Mando_GLAM-WEB.png?v=1632348918',
            alt: 'Front image of The Mandalorian & The Child holiday ornament',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/Ornaments_SW_Mando_GLAM-WEB.png?v=1632348918',
            alt: 'Front image of The Mandalorian & The Child holiday ornament',
          },
        ],
        original_price: 180,
        price: 150,
        published: true,
        rating: 0,
        sku: '6929896046781',
        slug: 'the-mandalorian-and-child-holiday-ornament',
        stock: 10,
        title: 'The Mandalorian & The Child',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/UG9ZWEb97aQVUgiTPXmR',
        categoryKey: 1,
        description:
          'Keep it in the family with the Pop! Vanya vinyl figure from <i>Umbrella Academ</i><em>y! </em>Vinyl figure is approximately 3.75-inches tall.',
        discount_percentage: 0,
        exclusive: false,
        ide: 9,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/55072_UmbrellaAcadamy_Vanya_POP_GLAM-WEB.png?v=1611622756',
            alt: 'Front image of Vanya - The Umbrella Academy pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/55072_UmbrellaAcadamy_Vanya_POP_GLAM-1-WEB.png?v=1617219017',
            alt: 'Box image of Vanya - The Umbrella Academy pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '6186264461501',
        slug: 'action-adventure-umbrella-academy-vanya-pop',
        stock: 5,
        title: 'Vanya - The Umbrella Academy',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/IgcwDaD8szJuH3P8XIF4',
        categoryKey: 2,
        description:
          'Pop! Aragorn has drawn Andúril and is ready to protect the Fellowship of the Ring as they journey to Mount Doom to destroy the One Ring. Recruit Pop! Aragorn to complete your collection of <i>The Lord of the Rings</i>. Vinyl figure is approximately 4-inches tall.',
        discount_percentage: 0,
        exclusive: true,
        ide: 10,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/13565_LOTR_Aragorn_POP_GLAM-WEB.png?v=1625240765',
            alt: 'Front image of Aragorn - Lord of the Rings pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/13565_LOTR_Aragorn_POP_GLAM-1-WEB.png?v=1625240765',
            alt: 'Box image of Aragorn - Lord of the Rings pop',
          },
        ],
        original_price: null,
        price: 200,
        published: true,
        rating: 0,
        sku: '6814050484413',
        slug: 'action-adventure-lord-of-the-rings-aragorn-pop',
        stock: 10,
        title: 'Aragorn - Lord of the Rings',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/IgcwDaD8szJuH3P8XIF4',
        categoryKey: 2,
        description:
          '<p>Batman will have to rise to the occasion to bring this 10-inch tall Pop! Joker to justice in your DC collection.</p>',
        discount_percentage: 0,
        exclusive: true,
        ide: 11,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/47827_DC_Dark_Knight_Joker_10in_POP_GLAM-WEB.png?v=1592286831',
            alt: "Front image of 10'' The Joker - The Dark Knight Trilogy pop jumbo",
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/47827_DC_Dark_Knight_Joker_10in_POP_GLAM-1-WEB.png?v=1592286831',
            alt: "Box image of 10'' The Joker - The Dark Knight Trilogy pop jumbo",
          },
        ],
        original_price: null,
        price: 180,
        published: true,
        rating: 0,
        sku: '4602603995202',
        slug: 'the-joker-the-dark-knight-trilogy',
        stock: 5,
        title: "10'' The Joker - The Dark Knight Trilogy",
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/IgcwDaD8szJuH3P8XIF4',
        categoryKey: 2,
        description:
          "<p>You won't need time travel to relive the gripping Endgame battle. Collect this Marvel Endgame Pop! Thanos. Collectible stands approximately 3.75-inches tall.</p>",
        discount_percentage: 0,
        exclusive: false,
        ide: 12,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4202_8d6a7dcebce8195_36672_Avengers_Thanos_POP_WEB.png?v=1592287675',
            alt: 'Front image of Thanos - Avengers Endgame',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_8d6a7dcebd5a89c_36672_Avengers_Thanos_POP_WEB-1.png?v=1592287675',
            alt: 'Box image of Thanos - Avengers Endgame',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '4602617987138',
        slug: 'thanos-avengers-endgame',
        stock: 10,
        title: 'Thanos - Avengers Endgame',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/IgcwDaD8szJuH3P8XIF4',
        categoryKey: 2,
        description:
          'Celebrate the most stellar fandom of them all with the <i>Star Wars</i>™ <i>The Last Jedi</i>™ Pop! Chewbacca with Porg.  Vinyl bobblehead is approximately 5-inches tall.',
        discount_percentage: 0,
        exclusive: false,
        ide: 13,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/14748_SWEP8_Chewbacca_POP_GLAM-WEB_1.png?v=1629995441',
            alt: 'Front image of Chewbacca with Porg - Star Wars pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/14748_SWEP8_Chewbacca_POP_GLAM-1-WEB.png?v=1629992619',
            alt: 'Box image of Chewbacca with Porg - Star Wars pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '6929027498173',
        slug: 'star-wars-the-last-jedi-chewbacca-porg-pop',
        stock: 5,
        title: 'Chewbacca with Porg - Star Wars',
      },
      {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/IgcwDaD8szJuH3P8XIF4',
        categoryKey: 2,
        description:
          'With the golden snitch in one hand and his broomstick in the other, Harry Potter stands triumphant from yet another amazing Quidditch™ game! Collect Pop! Harry Potter in his Quidditch robes for your <i>Harry Potter</i> collection to commemorate his big wins. Collectible stands approximately 3.75-inches tall.',
        discount_percentage: 0,
        exclusive: false,
        ide: 14,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/5902_HarryPotter_Quidditch_Harry_POP_GLAM-WEB.png?v=1592286054',
            alt: 'Front image of Quidditch Harry - Harry Potter pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/5902_HP_Quidditch_Harry_POP_GLAM-WH-1-WEB.png?v=1629826937',
            alt: 'Box image of Quidditch Harry - Harry Potter pop',
          },
        ],
        original_price: 80,
        price: 50,
        published: true,
        rating: 0,
        sku: '4602582138946',
        slug: 'quidditch-harry-harry-potter',
        stock: 10,
        title: 'Quidditch Harry - Harry Potter',
      },
    ];

    const uploadData = () => {
      let cant = 0;

      products.forEach(async (product) => {
        const docRef = await addDoc(collection(db, 'products'), product);
        cant++;
        console.log('Document written with ID: ', docRef.id);
        console.log(`Se agregó: ${cant} datos`);
      });
    };

    const withReference = async () => {
      const newCityRef = doc(collection(db, 'demoCollection'));
      await setDoc(newCityRef, {
        available: true,
        brand: 'Funko POP!',
        categoryId: 'categories/TjuCXCS9fRHeZf1B176g',
        categoryKey: 0,
        description:
          'Aang was told he was the next Avatar at only 12 years old. While trying to flee, Aang was encased in ice and survived to be broken out after a century to restore balance to the world. Collect Pop! Aang and Momo to restore balance to your collection of Avatar: The Last Airbender. Vinyl figure is approximately 5.75-inches tall.',
        discount_percentage: 0,
        exclusive: true,
        ide: 0,
        images: [
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB.png?v=1611868819',
            alt: 'Front image of Aang with Momo - Avatar: The Last Airbender pop',
          },
          {
            src: 'https://cdn.shopify.com/s/files/1/1052/2158/products/1436_4203_36463_Avatar_AangWithMomo_POP_WEB-1.png?v=1611868819',
            alt: 'Box image of Aang with Momo - Avatar: The Last Airbender pop',
          },
        ],
        original_price: 120,
        price: 100,
        published: true,
        rating: 0,
        sku: '4628567720002',
        slug: 'anime-avatar-last-airbender-aang-momo-pop',
        stock: 5,
        title: 'Pop! Aang with Momo - Avatar: The Last Airbender | Funko',
      });
    };

    uploadData();
    withReference();
  }, []);

  return (
    <div>
      <h1>subir data</h1>
    </div>
  );
}

export default UploadDataFirestore;
