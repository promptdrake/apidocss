import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aisbir Nusantara",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
    { text: 'Getting Started', link: '/start' },
      { text: 'Client Area', link: 'https://client.aisbirnusantara.com' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
         collapsed: false,
        items: [
          { text: 'Introduction', link: '/start' },
          { text: 'Terms', link: '/terms' },
           { text: 'Account Verification', link: '/accountverification' }
        ]
      },
        {
        text: 'SMM Panel',
         collapsed: true,
        items: [
          { text: 'Installation', link: '/smm/installation' },
          { text: 'Display All Price', link: '/smm/allprice' },
           { text: 'Display Category', link: '/smm/category' },
                      { text: 'Filter Category', link: '/smm/filter' },
                       { text: 'Price Calculator', link: '/smm/pricecalculator' },
                      { text: 'Order Using Balance', link: '/smm/orderbalance' },
                               { text: 'Order Using Qris', link: '/smm/orderqris' },
                                         { text: 'Check All Status', link: '/smm/orderstatus' }
        ]
      },
       
       {
        text: 'Switch Qris',
         collapsed: true,
        items: [
          { text: 'Installation', link: '/switchqris/installation' }
        ]
      },
       {
        text: 'Auto Order Api',
         collapsed: true,
        items: [
      
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/aisbirnusantara' }
    ]
  }
})
