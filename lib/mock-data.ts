export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  description: string
  welcomeOffer: string
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

const defaultTerms = "18+ | New customers only | T&Cs apply | BeGambleAware.org"

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    bonus: "Only £5 to Claim £30",
    url: "https://www.ladbrokes.com/",
    rating: 9.8,
    stars: 5,
    reviews: 8971,
    badges: ["EDITORS PICK"],
    description: "One of the UK's most trusted and established bookmakers",
    welcomeOffer: "£30 Welcome Bonus",
    terms: defaultTerms,
    isTopRating: true,
  },
  {
    id: 2,
    name: "Betfred",
    logo: "/betfred.webp",
    bonus: "Get £50 Free Bets",
    url: "https://www.betfred.com/",
    rating: 9.6,
    stars: 5,
    reviews: 9317,
    badges: ["POPULAR"],
    description: "Huge range of markets and generous welcome offer",
    welcomeOffer: "£50 Free Bets",
    terms: defaultTerms,
    isPopular: true,
  },
  {
    id: 3,
    name: "BoyleSports",
    logo: "/boylesports.webp",
    bonus: "£40 Welcome Offer",
    url: "https://www.boylesports.com",
    rating: 9.4,
    stars: 5,
    reviews: 9204,
    badges: ["GREAT ODDS"],
    description: "Competitive odds with a strong mobile experience",
    welcomeOffer: "New Customers Only",
    terms: defaultTerms,
    isTrending: true,
  },
  {
    id: 4,
    name: "BetVictor",
    logo: "/betvictor.webp",
    bonus: "Get £30 Free Bets",
    url: "https://www.betvictor.com/",
    rating: 9.2,
    stars: 5,
    reviews: 9088,
    badges: ["HIGH VALUE"],
    description: "Premium sportsbook with extensive in-play markets",
    welcomeOffer: "£30 Free Bets",
    terms: defaultTerms,
    isTopLine: true,
  },
  {
    id: 5,
    name: "Midnite",
    logo: "/midnite-l.png",
    bonus: "Get £30 in Free Bets",
    url: "https://www.midnite.com",
    rating: 9.0,
    stars: 5,
    reviews: 8742,
    badges: ["TRENDING"],
    description: "Modern betting platform built for the next generation",
    welcomeOffer: "£30 Free Bets",
    terms: defaultTerms,
    isTrending: true,
  },
  {
    id: 6,
    name: "Spreadex",
    logo: "/spread.png",
    bonus: "Bet £10, Get £60",
    url: "https://www.spreadex.com/",
    rating: 8.8,
    stars: 4,
    reviews: 8619,
    badges: ["BEST VALUE"],
    description: "Spread betting and fixed odds in one platform",
    welcomeOffer: "£60 in Free Bets",
    terms: defaultTerms,
    isPopular: true,
  },
]
