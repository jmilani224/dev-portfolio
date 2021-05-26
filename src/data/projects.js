import practicalReno from '../images/practicalreno.jpg'
import emeraldRoom from '../images/emeraldroom.jpg'
import palettable from '../images/palettable.jpg'
import redRadish from '../images/redradish.jpg'
import covidstats from '../images/covidstats.jpg'
import liverTox from '../images/livertox.jpg'


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
        name: 'simple livertox',
        desc: "a webscraping app made for my wife who works in medicine. it retrieves a specific online resource that's frequently pasted into patient charts and automatically copies the needed text to the clipboard. it saves a lot of time vs doing the process manually.",
        live: 'https://liver-tox.com',
        gitHub: 'https://github.com/jmilani224/liver-tox',
        tools: ['nextjs', 'react', 'react query', 'cheerio', 'chakra ui'],
        imgSrc: liverTox,
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