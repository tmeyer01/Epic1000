//import fullRouteThmb from '../../images/topoBackground.jpg'
import fullMap from '../../images/MapThumbs/FullMap.png'
import merritToPenticton from '../../images/MapThumbs/MerritToPenticton.png'
import pentictonToMidway from '../../images/MapThumbs/PentictonToMidway.png'
import midwayToTrail from '../../images/MapThumbs/MidwayToTrail.png'
import trailToKimberly from '../../images/MapThumbs/TrailToimberley.png'
import kimberlyToFernie from '../../images/MapThumbs/KimberlyToFernie.png'

export const RouteItems = [
  {
    id: 'full-route',
    title: 'Full Route',
    img: `${fullMap}`,
    iSlide: "https://ridewithgps.com/embeds?type=route&id=12516285&sampleGraph=true",
  },
  {
    id: 'merrit-2-penticton',
    title: 'Merrit to Penticton',
    path: '/gc',
    img:`${merritToPenticton}`,
    iSlide: 'https://ridewithgps.com/embeds?type=route&id=13052815&sampleGraph=true',
  },
  {
    id: 'penticton-2-midway',
    title: 'Penticton to Midway',
    path: '/gc',
    img: `${pentictonToMidway}`,
    iSlide: 'https://ridewithgps.com/embeds?type=route&id=13055872&sampleGraph=true',
  },
  {
    id: 'midway-2-trail',
    title: 'Midway to Trail',
    path: '/gc',
    img:`${midwayToTrail}`,
    iSlide: 'https://ridewithgps.com/embeds?type=route&id=13057940&sampleGraph=true',
  },
  {
    id: 'Trail-2-kimberley',
    title: 'Trail to Kimberly',
    path: '/gc',
    img:`${trailToKimberly}`,
    iSlide: 'https://ridewithgps.com/embeds?type=route&id=13058593&sampleGraph=true',
  },
  {
    id: 'Kimberley-2-fernie',
    title: 'Kimberly to Fernie',
    path: '/gc',
    img:`${kimberlyToFernie}`,
    iSlide: 'https://ridewithgps.com/embeds?type=route&id=29486836&sampleGraph=true',
  },

]