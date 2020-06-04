export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed9639cc8e936e8d02233fe',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uuhq9yu4',
                  apiId: '4996debb-b437-4002-bb3e-b6b50f9d8384'
                },
                {
                  buildHookId: '5ed9639d0b85e73ee367ee20',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-18amdk5i',
                  apiId: '95f45211-2c71-47c9-a3db-e92c2b7df1d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikebarbaro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-18amdk5i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
