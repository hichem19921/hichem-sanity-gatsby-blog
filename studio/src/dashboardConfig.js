export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8d71d7d58b652ca67eba2c',
                  title: 'Sanity Studio',
                  name: 'hichem-sanity-gatsby-blog-studio',
                  apiId: '4325d50e-1612-45c5-82ba-034624fb90d4'
                },
                {
                  buildHookId: '5f8d71d737b24b35462c7db9',
                  title: 'Blog Website',
                  name: 'hichem-sanity-gatsby-blog',
                  apiId: '2d11c422-a303-4be2-aad8-11ddc67a4f57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hichem19921/hichem-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hichem-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
