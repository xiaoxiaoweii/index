const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "xiaoxiaoweii"; // 个人网站名字

const BLOG_URL = "http://blog.xxiaowei.com/"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/xiaoxiaoweii"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586534895234&di=592c79393bb9320a8b22c97c0261acb3&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201404%2F01%2F141958ecd21euizj4iiiez.jpg"; // 背景图片url，留空默认为必应每日图片

const SORT_DATA = [
  { sortId: 1, title: "个人项目" }
  // { sortId: 2, title: "示例分类2" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = "黑ICP备19005267号-1"; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "vue-webapp",
    subtitle: "",
    url: "http://demo.xxiaowei.com/",
    icon: ""
  }
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "你好"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
