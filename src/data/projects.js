import practicalReno from '../images/practicalreno.jpg'
import emeraldRoom from '../images/emeraldroom.jpg'
import palettable from '../images/palettable.jpg'
import chakraUI from '../images/chakraui.jpg'
import redRadish from '../images/redradish.jpg'

export const projects = [
    {
        name: 'practical renovations',
        desc: 'a local home renovation company website, with contact form, photo galleries, programmatically generated pages & page sections, blog, and connected to prismic cms for easy content entry.',
        live: 'https://practicalreno.com/',
        gitHub: 'https://github.com/jmilani224/practical-renovations',
        tools: ['gatsby', 'react', 'graphql', 'chakra ui', 'prismic cms'],
        imgSrc: practicalReno,
    },
    {
        name: 'emerald room salon',
        desc: 'lakewood, ohio, hair salon website, with embedded booking widget, simple design, and uses netlify cms for easy content entry.',
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
        name: 'chakra ui "kitchen sink" component demo',
        desc: 'addressed an open source issue by building a "kitchen sink" demo for all chakra ui components.',
        live: 'https://chakra-ui-kitchen-sink.netlify.app/',
        gitHub: 'https://github.com/jmilani224/chakra-kitchen-sink',
        tools: ['gatsby', 'react', 'chakra ui'],
        imgSrc: chakraUI,
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