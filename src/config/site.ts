import { PUBLIC_ARTALK_ENABLED, PUBLIC_ARTALK_SERVER } from "astro:env/server";

const artalkServer = PUBLIC_ARTALK_SERVER?.trim() || "";
const artalkEnabled =
  PUBLIC_ARTALK_ENABLED === undefined
    ? Boolean(artalkServer)
    : PUBLIC_ARTALK_ENABLED;

const site = {
  // --- Site Metadata ---
  meta: {
    title: "tretrenya's blog",
    description: "漫漫人生路",
    author: "tretrenya",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    lang: "zh-CN",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "首页", subtitle: "Home", href: "/" },
    { name: "文章", subtitle: "Blog", href: "/posts" },
    { name: "项目", subtitle: "Projects", href: "/projects" },
    { name: "导航", subtitle: "Links", href: "/friends" },
    { name: "音乐", subtitle: "Music", href: "/music" },
    { name: "关于", subtitle: "About", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    {
      name: "GitHub",
      href: "https://github.com/1572817043",
      icon: "mdi:github",
    },
    { name: "Email", href: "mailto:1572817043@qq.com", icon: "mdi:email" },
    {
      name: "Bilibili",
      href: "https://space.bilibili.com/176130665",
      icon: "mdi:video",
    },
  ],

  friendCard: {
    name: "tretrenya",
    description: "漫漫人生路",
    link: "https://1572817043.github.io",
    avatar:
      "https://telegraph-image-92x.pages.dev/file/b5429fe388a02d40bf94b-0013f8c8d77973d702.jpg",
  },

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 你好，我是 tretrenya",
    description:
      '一个喜欢<span class="font-medium text-foreground underline decoration-primary/30">折腾</span>和<span class="font-medium text-foreground underline decoration-primary/30">分享</span>的人。漫漫人生路，记录一些想法和发现。',
    cards: [
      { icon: "mdi:explore", label: "状态", value: "正在折腾点什么" },
      { icon: "mdi:location", label: "位置", value: "地球" },
      { icon: "mdi:github", label: "GitHub", value: "1572817043" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025 tretrenya",
    builtWith: "使用 Astro 构建",
  },

  // --- Comments ---
  comments: {
    enabled: artalkEnabled,
    provider: "artalk" as const,
    artalk: {
      server: artalkServer,
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 7,
  },

  // --- Tools Page Data ---
  // Each item can use either `icon` (Iconify name) or `logo` (public path or { light, dark } paths)
  tools: [
    {
      name: "development",
      items: [
        {
          name: "VS Code",
          link: "https://code.visualstudio.com",
          icon: "mdi:microsoft-visual-studio-code",
        },
        {
          name: "WebStorm",
          link: "https://www.jetbrains.com/webstorm",
          icon: "mdi:code-braces",
        },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        { name: "Postman", link: "https://www.postman.com", icon: "mdi:api" },
      ],
    },
    {
      name: "design",
      items: [
        {
          name: "Figma",
          link: "https://www.figma.com",
          icon: "mdi:vector-polygon",
        },
        {
          name: "Sketch",
          link: "https://www.sketch.com",
          icon: "mdi:vector-square",
        },
        {
          name: "Adobe XD",
          link: "https://www.adobe.com/products/xd.html",
          icon: "mdi:pencil-ruler",
        },
        {
          name: "Photoshop",
          link: "https://www.adobe.com/products/photoshop.html",
          icon: "mdi:image-edit",
        },
      ],
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        {
          name: "Obsidian",
          link: "https://obsidian.md",
          icon: "mdi:diamond-stone",
        },
        {
          name: "Raycast",
          link: "https://www.raycast.com",
          icon: "mdi:lightning-bolt",
        },
        { name: "Arc Browser", link: "https://arc.net", icon: "mdi:web" },
      ],
    },
  ],

  // --- Music Playlist ---
  // 将 MP3 文件放入 public/music/ 目录
  music: [
    {
      title: "如果的事",
      artist: "范玮琪 / 张韶涵",
      src: "/music/范玮琪,张韶涵_-_如果的事.mp3",
    },
    {
      title: "所念皆星河（伴奏）",
      artist: "房东的猫",
      src: "/music/房东的猫_-_所念皆星河（伴奏）.mp3",
    },
    {
      title: "向左转向右转",
      artist: "梁静茹",
      src: "/music/梁静茹_-_向左转向右转.mp3",
    },
    { title: "遇见", artist: "孙燕姿", src: "/music/孙燕姿_-_遇见.mp3" },
  ] as readonly { title: string; artist: string; src: string }[],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "文章",
    postsDescription: "想法、思考和一些记录",
    projectsTitle: "项目",
    projectsDescription: "为了解决问题或纯粹好玩而做的小工具。",
    friendsTitle: "导航",
    friendsDescription: "收藏的网站和资源。",
    toolsTitle: "工具",
    aboutTitle: "关于",
    aboutDescription: "关于这个网站和作者",
    backToPosts: "返回文章",
    goHome: "回到首页",
    notFoundTitle: "页面未找到",
    notFoundDescription: "你要找的页面可能已被删除或链接已失效。",
    endOfPost: "文章结束",
    tableOfContents: "目录",
    searchPlaceholder: "搜索文章、标签...",
    searchNavigate: "跳转",
    commentSuccess: "评论提交成功",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
