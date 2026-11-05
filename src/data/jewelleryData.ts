import { RingProduct, UnavailableJewelType } from '../types';

export const WHATSAPP_NUMBER = '919443894638';
export const WHATSAPP_DISPLAY = '+91 9443894638';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const BRAND_LOGO_SRC = '/assets/aistudio/WhatsApp_Image_2026-11-05_at_12.05.24_PM_00604a59.jpeg';
export const BRAND_TAGLINE = 'Sparkle Your Everyday';

export const formatInr = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const getRingWhatsAppLink = (ring: RingProduct) => {
  const text = `Hello Surti Jewels, I am interested in purchasing/inquiring about this ring:\n\n• Ring: ${ring.name}\n• Tag Label: ${ring.tagLabel}\n• Purity: ${ring.purity} (${ring.goldType})\n• Net Weight: ${ring.weightGrams} g\n• Listed Price: ${formatInr(ring.priceInr)}\n\nPlease let me know availability and ring size assistance.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(text)}`;
};

export const getGeneralWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};

// Exact 25 Rings from Surti Jewels Official Catalogue PDF
export const RINGS_DATA: RingProduct[] = [
  {
    id: 'ring-01',
    tagLabel: 'JP00030634',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 5.72,
    priceInr: 96982,
    image: '/assets/rings/JP00030634.png',
    description: 'Sculptural floral bloom motif crafted in rich 22KT yellow gold with flared fluted petals and polished shank.',
    featured: true
  },
  {
    id: 'ring-02',
    tagLabel: 'JP00030636',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 4.91,
    priceInr: 83249,
    image: '/assets/rings/JP00030636.png',
    description: 'Modern organic wave silhouette casting in solid 22KT yellow gold with elegant fluid contours.',
    featured: true
  },
  {
    id: 'ring-03',
    tagLabel: 'JP00032393',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 6.93,
    priceInr: 117497,
    image: '/assets/rings/JP00032393.png',
    description: 'Majestic layered cocktail ring with intricate inner jaali filigree openwork framed in double gold arches.',
    featured: true
  },
  {
    id: 'ring-04',
    tagLabel: 'JP00048557',
    name: '18 KT ROSE GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Ladies Ring',
    weightGrams: 3.17,
    priceInr: 47976,
    image: '/assets/rings/JP00048557.png',
    description: 'Romantic 18KT rose gold ring featuring a soft pastel gemstone centerpiece with micro-pave accent halo.',
    featured: false
  },
  {
    id: 'ring-05',
    tagLabel: 'JP00048559',
    name: '18 KT ROSE GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Ladies Ring',
    weightGrams: 3.14,
    priceInr: 50338,
    image: '/assets/rings/JP00048559.png',
    description: 'Graceful solitaire-style 18KT rose gold ring with subtle prong settings and lustrous polished band.',
    featured: false
  },
  {
    id: 'ring-06',
    tagLabel: 'JP00048563',
    name: '18 KT ROSE GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Ladies Ring',
    weightGrams: 2.84,
    priceInr: 43064,
    image: '/assets/rings/JP00048563.png',
    description: 'Classic prong-set solitaire in blush 18KT rose gold, offering pure understated refinement for daily wear.',
    featured: false
  },
  {
    id: 'ring-07',
    tagLabel: 'JP00048564',
    name: '18 KT ROSE GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Ladies Ring',
    weightGrams: 2.80,
    priceInr: 42833,
    image: '/assets/rings/JP00048564.png',
    description: 'Delicate bezel-accented solitaire ring in radiant 18KT rose gold designed for comfortable daily styling.',
    featured: false
  },
  {
    id: 'ring-08',
    tagLabel: 'JP00079481',
    name: '18 KT GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Yellow Gold',
    ringType: 'Ladies Ring',
    weightGrams: 4.15,
    priceInr: 62194,
    image: '/assets/rings/JP00079481.png',
    description: 'Traditional floral medallion ring with openwork petal motifs and central blossom in 18KT yellow gold.',
    featured: true
  },
  {
    id: 'ring-09',
    tagLabel: 'JP00079482',
    name: '18 KT GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Yellow Gold',
    ringType: 'Ladies Ring',
    weightGrams: 3.34,
    priceInr: 47252,
    image: '/assets/rings/JP00079482.png',
    description: 'Sleek asymmetric bypass band featuring leaf swirl elements in warm 18KT yellow gold.',
    featured: false
  },
  {
    id: 'ring-10',
    tagLabel: 'JP00079483',
    name: '18 KT GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Yellow Gold',
    ringType: 'Ladies Ring',
    weightGrams: 4.16,
    priceInr: 62344,
    image: '/assets/rings/JP00079483.png',
    description: 'Intricate round filigree mesh disc ring in 18KT yellow gold with traditional honeycomb lattice work.',
    featured: false
  },
  {
    id: 'ring-11',
    tagLabel: 'JP00079484',
    name: '18 KT GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Yellow Gold',
    ringType: 'Ladies Ring',
    weightGrams: 5.64,
    priceInr: 84524,
    image: '/assets/rings/JP00079484.png',
    description: 'Statement bypass leaf design with floral accents and textured gold veins in solid 18KT yellow gold.',
    featured: true
  },
  {
    id: 'ring-12',
    tagLabel: 'JP00079485',
    name: '18 KT GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Yellow Gold',
    ringType: 'Ladies Ring',
    weightGrams: 4.34,
    priceInr: 65041,
    image: '/assets/rings/JP00079485.png',
    description: 'Domed teardrop openwork ring with diamond-cut filigree embellishments in 18KT yellow gold.',
    featured: false
  },
  {
    id: 'ring-13',
    tagLabel: 'JP00080763',
    name: '18 KT GOLD LADIES DIAMOND RING',
    purity: '18 KT',
    goldType: 'Diamond Gold',
    ringType: 'Diamond Ring',
    weightGrams: 3.70,
    priceInr: 92090,
    image: '/assets/rings/JP00080763.png',
    description: 'Multi-row contemporary diamond pavé band with criss-cross structural channels in 18KT gold.',
    featured: true
  },
  {
    id: 'ring-14',
    tagLabel: 'JP00120545',
    name: '22 KT GOLD LADIES WEDDING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Wedding Ring',
    weightGrams: 2.97,
    priceInr: 51210,
    image: '/assets/rings/JP00120545.png',
    description: 'Timeless comfort-fit wedding band in 22KT yellow gold with smooth domed surface and high polish.',
    featured: false
  },
  {
    id: 'ring-15',
    tagLabel: 'JP00134319',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 2.00,
    priceInr: 34484,
    image: '/assets/rings/JP00134319.png',
    description: 'Minimalist sleek gold band crafted in pure 22KT yellow gold, ideal for stacking or refined daily wear.',
    featured: false
  },
  {
    id: 'ring-16',
    tagLabel: 'JP00137013',
    name: '18 KT ROSE GOLD DIAMOND LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Diamond Ring',
    weightGrams: 4.24,
    priceInr: 77714,
    image: '/assets/rings/JP00137013.png',
    description: 'Exquisite dual-tone diamond cluster ring set in 18KT rose gold with spiral split shank detailing.',
    featured: true
  },
  {
    id: 'ring-17',
    tagLabel: 'JP00148084',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 2.26,
    priceInr: 38967,
    image: '/assets/rings/JP00148084.png',
    description: 'Lightweight polished daily ring with clean bevelled edges crafted in hallmarked 22KT gold.',
    featured: false
  },
  {
    id: 'ring-18',
    tagLabel: 'JP00148085',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 2.30,
    priceInr: 39657,
    image: '/assets/rings/JP00148085.png',
    description: 'Subtle fluted daily band in 22KT yellow gold engineered with ergonomic inner comfort contour.',
    featured: false
  },
  {
    id: 'ring-19',
    tagLabel: 'JP00151527',
    name: '18 KT ROSE GOLD LADIES RING',
    purity: '18 KT',
    goldType: 'Rose Gold',
    ringType: 'Ladies Ring',
    weightGrams: 3.86,
    priceInr: 58136,
    image: '/assets/rings/JP00151527.png',
    description: 'Contemporary split-shank design in 18KT rose gold accented with delicate ruby-toned gemstone accents.',
    featured: false
  },
  {
    id: 'ring-20',
    tagLabel: 'JP00160123',
    name: '22 KT GOLD LADIES CASTING RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Casting Ring',
    weightGrams: 1.28,
    priceInr: 22070,
    image: '/assets/rings/JP00160123.png',
    description: 'Dainty butterfly and floral blossom motif in 22KT yellow gold, perfect as a lightweight milestone gift.',
    featured: true
  },
  {
    id: 'ring-21',
    tagLabel: 'JP00167435',
    name: '22 KT GOLD LADIES NELI RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Neli Ring',
    weightGrams: 4.74,
    priceInr: 81728,
    image: '/assets/rings/JP00167435.png',
    description: 'Traditional royal V-shaped Neli chevron ring in 22KT yellow gold, auspicious for bridal ceremonies.',
    featured: true
  },
  {
    id: 'ring-22',
    tagLabel: 'JP00167436',
    name: '22 KT GOLD LADIES NELI RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Neli Ring',
    weightGrams: 4.67,
    priceInr: 80521,
    image: '/assets/rings/JP00167436.png',
    description: 'Heritage chevron Vada/Neli bridal ring in 22KT yellow gold with traditional milgrain borders.',
    featured: false
  },
  {
    id: 'ring-23',
    tagLabel: 'JP00173183',
    name: '18 KT GOLD DIAMOND LADIES RING',
    purity: '18 KT',
    goldType: 'Diamond Gold',
    ringType: 'Diamond Ring',
    weightGrams: 2.198,
    priceInr: 38174,
    image: '/assets/rings/JP00173183.png',
    description: 'Modern geometric bypass diamond ring in 18KT gold with emerald-cut accent setting.',
    featured: false
  },
  {
    id: 'ring-24',
    tagLabel: 'JP00178813',
    name: '22 KT GOLD LADIES KASAI RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Kasai Ring',
    weightGrams: 2.06,
    priceInr: 35519,
    image: '/assets/rings/JP00178813.png',
    description: 'Ornate pierced floral dome Kasai ring in pure 22KT yellow gold with delicate laser filigree.',
    featured: true
  },
  {
    id: 'ring-25',
    tagLabel: 'JP00178833',
    name: '22 KT GOLD LADIES KASAI RING',
    purity: '22 KT',
    goldType: 'Yellow Gold',
    ringType: 'Kasai Ring',
    weightGrams: 2.05,
    priceInr: 35347,
    image: '/assets/rings/JP00178833.png',
    description: 'Classic Kasai-style textured dome ring in 22KT yellow gold with hand-finished micro granulations.',
    featured: false
  }
];

// Explicit unavailable jewelry notice as requested: "dont need any other jewels and other types mention not available"
export const UNAVAILABLE_JEWEL_TYPES: UnavailableJewelType[] = [
  {
    id: 'un-necklaces',
    name: 'Necklaces & Chokers',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Our online catalogue currently showcases our 25 signature ladies rings exclusively. Necklaces are available strictly through custom atelier commissions or direct WhatsApp consultation.'
  },
  {
    id: 'un-bangles',
    name: 'Bangles & Kadas',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Bangle suites and bridal kadas are not listed online. Please consult our artisans on WhatsApp for custom wrist sizing and commission.'
  },
  {
    id: 'un-earrings',
    name: 'Earrings & Jhumkas',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Earrings and drops are currently not available online. Contact our showroom on WhatsApp for bespoke orders.'
  },
  {
    id: 'un-lockets',
    name: 'Lockets & Keepsakes',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Personalized lockets and photo casings are available only through custom WhatsApp requests.'
  },
  {
    id: 'un-anklets',
    name: 'Anklets (Payal)',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Traditional gold anklets are not featured in our digital ring catalogue.'
  },
  {
    id: 'un-pendants',
    name: 'Pendants & Chains',
    status: 'Not Available Online',
    message: 'Currently Not Available in Online Catalogue',
    note: 'Standalone pendants are currently offline. Inquire on WhatsApp for custom medallion creation.'
  }
];
