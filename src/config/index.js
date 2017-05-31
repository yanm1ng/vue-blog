export const blogConfig = {
  title: "I'm yanm1ng"
}
export const gitmentConfig = {
  owner: 'yanm1ng',
  repo: 'yanm1ng.github.io',
  oauth: {
    client_id: '0f87e490e00ee3fd87ef',
    client_secret: '4a9d2b148e7971c2201ad12131ce8bf8159ccd2e'
  },
  theme: {
    render(state, instance) {
      const container = document.createElement('div')
      container.lang = "en-US"
      container.className = 'gitment-container gitment-root-container'
      container.appendChild(instance.renderHeader(state, instance))
      container.appendChild(instance.renderEditor(state, instance))
      container.appendChild(instance.renderComments(state, instance))
      container.appendChild(instance.renderFooter(state, instance))
      return container;
    }
  }
}