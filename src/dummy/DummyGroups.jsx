import Img1 from './Images/1.jpg';
import Img2 from './Images/2.jpg';
import Img3 from './Images/3.jpg';
import Img4 from './Images/4.jpg';
import Img5 from './Images/5.jpg';
import Img6 from './Images/6.jpg';
import Img7 from './Images/7.jpg';
import Img8 from './Images/8.jpg';
import Img9 from './Images/9.jpg';
import Img10 from './Images/10.jpg';
import Img11 from './Images/11.jpg';
import Img12 from './Images/12.jpg';
import Img13 from './Images/13.jpg';
import Img14 from './Images/14.jpg';
import Img15 from './Images/15.jpg';
import Img16 from './Images/16.jpg';

const DummyGroups = [
  {
    _id: '1',
    name: 'Echidna',
    bio: 'Group of feet-lovers',
    pic: Img1,
    members: ['Shivam', 'Vishal', 'Kunj', 'Barbox', 'Zeemon'],
    rooms: [
      'general',
      'announcements',
      'meetup',
      'random',
      'music',
      'gaming',
      'memes',
      'programming',
      'art',
      'movies',
      'books',
    ],
  },
  {
    _id: '2',
    name: 'VAC',
    bio: 'Gathering place of Otakus of Vadodara',
    pic: Img2,
    members: ['Shivam', 'Vishal', 'Kunj'],
    rooms: [
      'general-anime',
      'new-releases',
      'popular-series',
      'manga-discussion',
      'anime-recommendations',
      'fan-art',
      'cosplay',
      'anime-music',
      'voice-acting',
      'conventions',
      'anime-theory',
      'memes',
      'spoilers',
    ],
  },
  {
    _id: '3',
    name: 'Dharavi',
    bio: 'Dharavi ki pobilk',
    pic: Img3,
    members: ['Shivam', 'Vishal', 'Kunj', 'Barbox'],
    rooms: [
      'general',
      'announcements',
      'random',
      'music',
      'gaming',
      'memes',
      'programming',
      'art',
      'movies',
      'books',
      'science',
      'food',
      'sports',
      'fashion',
      'travel',
      'technology',
      'news',
      'politics',
      'pets',
      'photography',
    ],
  },
  {
    _id: '4',
    name: 'Degen',
    bio: 'Group of degens',
    pic: Img4,
    members: [
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
    ],
    rooms: [
      'anime',
      'manga',
      'cosplay',
      'fan-fiction',
      'voice-acting',
      'recommendations',
      'theory-discussion',
      'memes',
      'new-releases',
      'popular-series',
      'spoilers',
    ],
  },
  {
    _id: '5',
    name: 'F.A.M.I.L.Y',
    bio: 'Family cosplay',
    pic: Img5,
    members: [
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
    ],
    rooms: [
      'video-games',
      'news',
      'tech',
      'science',
      'music',
      'movies',
      'tv-shows',
      'books',
      'art',
      'photography',
      'memes',
      'general-chat',
      'bot-commands',
    ],
  },
  {
    _id: '6',
    name: 'Strangers',
    bio: 'Cringe GC',
    pic: Img6,
    members: ['Shivam', 'Vishal'],
    rooms: [
      'fitness',
      'nutrition',
      'motivation',
      'yoga',
      'meditation',
      'sports',
      'running',
      'swimming',
      'weightlifting',
      'healthy-recipes',
    ],
  },
  {
    _id: '7',
    name: 'Cum 24/7',
    bio: 'Daily Group Masturbation',
    pic: Img7,
    members: ['Shivam'],
    rooms: [
      'crypto',
      'stocks',
      'trading',
      'investing',
      'economics',
      'business-news',
      'entrepreneurship',
      'marketing',
      'startups',
      'finance',
    ],
  },
  {
    _id: '8',
    name: 'Ram Mandir',
    bio: 'All praise Lord Ram',
    pic: Img8,
    members: ['Shivam', 'Vishal', 'Kunj', 'Barbox', 'Zeemon'],
    rooms: [
      'general',
      'announcements',
      'random',
      'music',
      'gaming',
      'memes',
      'programming',
      'art',
      'movies',
      'books',
      'science',
    ],
  },
  {
    _id: '9',
    name: 'Rem Mandir',
    bio: 'Rem > Ram',
    pic: Img9,
    members: ['Shivam', 'Vishal', 'Kunj'],
    rooms: [
      'travel',
      'food',
      'culture',
      'language',
      'history',
      'architecture',
      'art',
      'music',
      'photography',
      'adventure',
      'recommendations',
    ],
  },
  {
    _id: '10',
    name: 'Jugaad',
    bio: 'Another Cringe GC',
    pic: Img10,
    members: ['Shivam', 'Vishal', 'Kunj', 'Barbox'],
    rooms: [
      'politics',
      'news',
      'debate',
      'international-relations',
      'economics',
      'social-justice',
      'environment',
      'philosophy',
      'religion',
      'history',
      'memes',
    ],
  },
  {
    _id: '11',
    name: 'Kanye Cult',
    bio: 'Kanye is our GOD!!',
    pic: Img11,
    members: [
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
    ],
    rooms: [
      'pets',
      'animal-rescue',
      'pet-photos',
      'training-tips',
      'veterinary-medicine',
      'pet-care',
      'animal-rights',
      'animal-behavior',
      'exotic-animals',
      'birdwatching',
    ],
  },
  {
    _id: '12',
    name: 'Nuclear Test GC',
    bio: 'Nuclear bombs discussion',
    pic: Img12,
    members: [
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
      'Shivam',
      'Vishal',
      'Kunj',
      'Barbox',
      'Zeemon',
    ],
    rooms: [
      'Trinity site',
      'Mushroom cloud',
      'Radiation',
      'Fallout',
      'Ground zero',
      'Test ban treaty',
      'Manhattan Project',
      'Enola Gay',
      'Bikini Atoll',
      'Nuclear winter',
      'Tsar Bomba',
      'Hiroshima and Nagasaki',
      'Nuclear non-proliferation treaty',
      'Nuclear deterrence',
      'Comprehensive Nuclear-Test-Ban Treaty',
      'Nevada Test Site',
      'Radioactive isotopes',
      'Nuclear fallout shelters',
      'Trinity test site',
      'Uranium enrichment',
    ],
  },
  {
    _id: '13',
    name: 'Bruh',
    bio: 'Bruh',
    pic: Img13,
    members: ['Shivam', 'Vishal'],
    rooms: [
      'gardening',
      'sustainability',
      'permaculture',
      'organic-farming',
      'hydroponics',
      'composting',
      'horticulture',
      'plant-care',
      'botany',
      'landscape-design',
    ],
  },
  {
    _id: '14',
    name: 'I ran out of names',
    bio: 'Random bio',
    pic: Img14,
    members: ['Shivam'],
    rooms: [
      'horror',
      'fantasy',
      'science-fiction',
      'romance',
      'mystery',
      'thriller',
      'historical-fiction',
      'poetry',
    ],
  },
  {
    _id: '15',
    name: 'Another one',
    bio: 'Another bio',
    pic: Img15,
    members: ['Shivam', 'Vishal'],
    rooms: [
      'general',
      'science-fiction',
      'romance',
      'mystery',
      'thriller',
      'historical-fiction',
      'collage',
    ],
  },
  {
    _id: '16',
    name: 'DJ Khalid',
    bio: 'sadsadasdasd',
    pic: Img16,
    members: ['Shivam'],
    rooms: [
      'general',
      'accessories',
      'shoes',
      'hairstyles',
      'makeup',
      'skincare',
      'fragrances',
      'cum',
    ],
  },
];

export default DummyGroups;
