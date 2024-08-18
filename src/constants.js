export const prefix = process.env.NODE_ENV === 'production' ? '/dannaxv' : ''

export 
const parallaxImages = {
  hero: {
    url: `${prefix}/img/photo-1.webp`,
    x: '20%',
    y: '0px',
    sm: '100px',
    md: '-50px',
    lg: '-100px',
    xl: '-200px'
  },
  sponsors: {
    url: `${prefix}/img/photo-2.webp`,
    x: '20%',
    y: '-20px',
    sm: '200px',
    md: '0px',
    lg: '-400px',
    xl: '-550px'
  },
  showcase: {
    url: `${prefix}/img/photo-3.webp`,
    x: '100%',
    y: '30px',
    sm: '200px',
    md: '0px',
    lg: '-300px',
    xl: '-400px'
  },
  requirements: {
    url: `${prefix}/img/photo-4.webp`,
    x: 'center',
    y: '-10px',
    sm: '200px',
    md: '0px',
    lg: '-200px',
    xl: '-300px'
  },
  regalos: {
    url: `${prefix}/img/photo-5.webp`,
    x: '50%',
    y: '-90px',
    sm: '200px',
    md: '-100px',
    lg: '-200px',
    xl: '-400px'
  },
  countdown: {
    url: `${prefix}/img/photo-6.webp`,
    x: '50%',
    y: '-10px',
    sm: '200px',
    md: '0px',
    lg: '-350px',
    xl: '-600px'
  },
  confirmation: {
    url: `${prefix}/img/photo-7.webp`,
    x: '55%',
    y: '-100px',
    sm: '-150px',
    md: '-200px',
    lg: '-300px',
    xl: '-400px'
  }
}
