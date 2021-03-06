module.exports = {
  base: '/vuepress-doc/', // 部署站点的基础路径
  title: '前端装逼大全',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/assets/images'
      }
    }
  },
  description: 'Just playing around',
  displayAllHeaders: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/contents/js/数据类型.md' },
      { text: '其他', link: '/others/codeRules.md' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/english' }
      //   ]
      // },
      { text: 'External', link: 'https://github.com/WhyJaz/vuepress-doc' },
    ],
    sidebar: [
      {
        title: 'JS',
        children: [
          ['/contents/JS/数据类型.md', '数据类型'],
          ['/contents/JS/ES6.md', 'ES6'],
          ['/contents/JS/闭包.md', '闭包'],
          ['/contents/JS/防抖-节流-定时器.md', '防抖、节流、定时器'],
          ['/contents/JS/上下文与new.md', '上下文与new'],
          ['/contents/JS/call-bind-apply.md', 'call、bind、apply'],
          ['/contents/JS/可迭代对象.md', '可迭代对象'],
          ['/contents/JS/console测试题.md', 'console测试题'],
        ]
      },
      {
        title: 'HTML+CSS',
        children: [
          ['/contents/HTML+CSS/垂直水平居中.md', '垂直水平居中'],
          ['/contents/HTML+CSS/常见试题.md', '常见试题'],
          ['/contents/HTML+CSS/双栏布局与三栏布局.md', '双栏布局与三栏布局'],
        ]
      },
      {
        title: 'Browser',
        children: [
          ['/contents/Browser/客户端存储.md', '客户端存储'],
          ['/contents/Browser/网络请求.md', '网络请求'],
        ]
      },
      {
        title: 'Vue',
        children: [
          ['/contents/Vue/常见试题.md', '常见试题'],
        ]
      },
      {
        title: 'React'
      },
      {
        title: 'Webpack',
        children: [
          ['/contents/Webpack/webpack基础.md', 'webpack基础'],
          ['/contents/Webpack/webpack进阶.md', 'webpack进阶'],
        ]
      },
      {
        title: '编程试题',
        children: [
          ['/contents/编程试题/lazyMan.md', 'lazyMan'],
          ['/contents/编程试题/请求并发控制.md', '请求并发控制'],
          ['/contents/编程试题/parseQueryString.md', 'parseQueryString'],
          ['/contents/编程试题/promise.all.md', 'promise.all'],
          
        ]
      },
      {
        title: '数据结构与算法',

      },
    ]
  }
}