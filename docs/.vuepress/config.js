module.exports = {
  title: 'Fast UI ',
  description: '一个好用的UI框架',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  themeConfig: {
    sidebar: [
      './',
      {
        title: '开发指南',
        children: ['/install/', '/fast-start/']
      },
      {
        title: '组件',
        children: ['/button/', '/input/','/grid/','/layout/','/tabs/','/toast/','/popover/','/collapse/']
      },
    ]
  }
}