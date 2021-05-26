import practicalReno from '../images/practicalreno.jpg'
import emeraldRoom from '../images/emeraldroom.jpg'
import palettable from '../images/palettable.jpg'
import chakraUI from '../images/chakraui.jpg'
import redRadish from '../images/redradish.jpg'
import covidstats from '../images/covidstats.jpg'


export const projects = [
    {
        name: 'practical renovations',
        desc: 'a local home renovation company website, with contact form, photo galleries, programmatically generated pages & page sections, blog, and connected to prismic headless cms for easy content management.',
        live: 'https://practicalreno.com/',
        gitHub: 'https://github.com/jmilani224/practical-renovations',
        tools: ['gatsby', 'react', 'graphql', 'chakra ui', 'prismic cms'],
        imgSrc: practicalReno,
    },
    {
        name: 'emerald room salon',
        desc: 'lakewood, ohio, hair salon website, with embedded booking widget, simple design, and uses netlify cms (a git-based headless cms) for easy content management.',
        live: 'https://emeraldroomsalon.com/',
        gitHub: 'https://github.com/jmilani224/emerald-room',
        tools: ['gatsby', 'react', 'graphql', 'netlify cms'],
        imgSrc: emeraldRoom,
    },
    {
        name: 'palettable.dev',
        desc: 'filterable collection of free creative assets for web developers.',
        live: 'https://palettable.dev/',
        gitHub: 'https://github.com/jmilani224/palettable',
        tools: ['gatsby', 'react'],
        imgSrc: palettable,
    },
    {
        name: 'covid-19 state stats',
        desc: 'easy-to-use data visualiztion showing covid-19 statistics in states across the country. **public api discontunied, will be updating to use static data**',
        live: 'https://covid-state-stats.netlify.app/',
        gitHub: 'https://github.com/jmilani224/covid-data',
        tools: ['react', 'recharts'],
        imgSrc: covidstats,
    },
    {
        name: 'redradish.app',
        desc: 'find nearby farmers markets by entering your zip code.',
        live: 'https://redradish.app/',
        gitHub: 'https://github.com/jmilani224/farmers-market',
        tools: ['html', 'css', 'javascript', 'vegetables!'],
        imgSrc: redRadish,
    },
]