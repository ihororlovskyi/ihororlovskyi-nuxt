module.exports = {
  head: {
    titleTemplate: '%s | Ihor Orlovskyi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://ihororlovskyi.com/assets/img/og-images/og-ihororlovskyi.jpg' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/assets/img/favicons/favicon-32.png' },
      { rel: 'apple-touch-icon', href: '/assets/img/favicons/favicon-144.png' }
    ]
  },
  loading: {
    color: '#666',
    height: '4px'
  },
  plugins: [
    { src: '~plugins/google-analytics.js', ssr: false },
    { src: '~/plugins/vue-touch-ripple.js', ssr: false }
  ],
  css: [
    'normalize.css/normalize.css',
    'vue-touch-ripple/component.css'
  ],
  build: {
    vendor: ['axios']
  },
  generate: {
    routes: [
      '/site/bbq-agency',
      '/site/codereamer',
      '/site/coriolan-ui',
      '/site/nebo',
      '/site/newsman',
      '/site/mcriviera',
      '/site/skoryk',
      '/site/vatmanman',
      '/site/rooster-chess',
      '/site/sentimony',
      '/site/promorepublic',
      '/site/promorepublic-blog',
      '/site/masteroforion',
      '/site/worldofwarplanes',
      '/site/worldofwarplanes-blog',
      '/site/tripme',
      '/site/motionups',
      '/site/qubiostudio',
      '/site/artkb',
      '/site/iondigi',
      '/site/irukanji',
      '/site/aquadeep',
      '/site/lookinglook',
      '/site/ihororlovskyi'
    ]
  }
}
