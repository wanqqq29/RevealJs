<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:59:55
 * @LastEditTime: 2022-01-14 10:18:15
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\components\renderer.vue
-->

// TODO // 预览组件导出√ // 主题定制

<template>
  <div style="height: 100vh">
    <div v-html="compiledMarkdown"></div>
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
      class="print-hide"
    >
      <q-fab
        color="amber"
        text-color="black"
        icon="keyboard_arrow_left"
        direction="left"
      >
        <q-fab-action
          color="amber"
          text-color="black"
          @click="export_pdf"
          icon="file_download"
        />
        <q-fab-action
          color="amber"
          text-color="black"
          @click="share_web"
          icon="share"
        />
        <q-fab-action
          color="amber"
          text-color="black"
          @click="change_theme"
          icon="palette"
        />
      </q-fab>
    </q-page-sticky>

    <div>到底了</div>
  </div>
</template>
<style scoped src="../css/github.css"></style>
<style lang="scss" scoped src="../css/renderer.scss"></style>

<script>
import { date } from "quasar";
import { ref, onMounted, watchEffect, reactive } from "vue";
import Marpit from "@marp-team/marpit";
export default {
  name: "renderer",
  props: {
    from_index_input: String,
  },
  setup(props, context) {
    const marpit = new Marpit({
      inlineSVG: true,
      markdown: {
        html: true, // Enable HTML tags
        breaks: true, // Convert line breaks into `<br />`
      },
    });

    const theme = `
    /* @theme example */

    section {
      font-family: "YaHei Consolas Hybrid", "Noto Sans", "Helvetica Neue", "Segoe UI", Helvetica, Tahoma, Arial, Geneva, Georgia, Palatino, "Times New Roman", "冬青黑体", "Microsoft YaHei", "微软雅黑", "Microsoft YaHei UI", "WenQuanYi Micro Hei", "文泉驿雅黑", Dengxian, "等线体", STXihei, "华文细黑", "Liberation Sans", "Droid Sans", NSimSun, "新宋体", SimSun, "宋体", "Apple Color Emoji", "Segoe UI Emoji";
      background:url("https://gitee.com/wanqqq29/vnote_images/raw/master/markdown文件夹/其他/记事本/记事本(什么都记).md/499010809226448.png");
      color: #fff;
      font-size: 30px;
      padding:60px;
      padding-top: 120px;
      padding-bottom:10px;
    }

    
    h1, h2, h3, h4, h5, h6 {
      color: black;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 0;
}
  div.marpit > svg > foreignObject > section::after {
    color: black !important;
  }
p,blockquote,ul,ol,dl,table {
    margin: 0.4em 0;
}


p {
    padding: 0;
    /* margin-bottom: .e; */
}

h1 {
    padding-bottom: .4rem;
    font-size: 2.2rem;
    line-height: 1.3;
     margin: 0;
      Color: white;
      position: absolute;
      top: 15px;
      left: 160px;
}

h2 {
    font-size: 1.75rem;
    line-height: 1.225;
    margin: 35px 0 15px;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #ddd;
}

h3 {
    font-size: 1.4rem;
    line-height: 1.43;
    margin: 20px 0 7px;
}

h4 {
    font-size: 1.2rem;
}

h5 {
    font-size: 1rem;
}

h6 {
    font-size: 1rem;
    color: #777;
}

a {
    color: #42b983;
    font-weight: 600;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    word-break: break-word;
    font-size: 1.4rem;
    line-height: 1.43;
}

a:hover {
    text-decoration: underline;
    color: #ff6600;
}

a:visited {
    color: purple;
}

ul, ol {
    padding: 0;
    padding-left: 24px;
    font-size:1.2rem;
    Color:black;
}

li {
    line-height: 1.2rem;
    font-size:1.2rem;
    margin-bottom:8px;
    Color:black;

}

li ul, li ol {
    margin-left: 16px;
    font-size:1rem;
    line-height: 1rem;

}

p, ul, ol {
    font-size: 16px;
    line-height: 24px;
}

pre {
    display: block;
    overflow-y: hidden;
    overflow-x: auto;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}

code {
    font-family: "YaHei Consolas Hybrid", Consolas, Monaco, "Andale Mono", Monospace, "Courier New";
    color: #e96900;
    padding: 2px 4px;
    border-radius: 2px;
    background-color: #f8f8f8;
    word-break: break-word;
}

pre code {
    display: block;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: #34495E;
    background-color: #E0E0E0;
    line-height: 1.5;
    font-family: "YaHei Consolas Hybrid", Consolas, Monaco, "Andale Mono", Monospace, "Courier New";
    white-space: pre;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
}

aside {
    display: block;
    float: right;
    width: 390px;
}

blockquote {
    border-left: 4px solid #498BA7;
    padding: 10px 15px;
    font-size:1.2rem;
    color: #777;
    background-color: #E2EDF3;
}

blockquote p {
    color: #666;
    font-size:1.2rem;
    line-height:1.2rem;
}

blockquote>:first-child, li>:first-child {
    margin-top: 0;
}

blockquote>:last-child {
    margin-bottom: 0;
}

    `;

    marpit.themeSet.default = marpit.themeSet.add(theme);

    const markdown = reactive({
      data: "",
    });

    // const { html, css } = marpit.render(markdown.data);
    const compiledMarkdown = ref(""); // 可以直接渲染的html，后面拿来用于打印
    const init = () => {
      const { html, css } = marpit.render(markdown.data);
      compiledMarkdown.value = html + "<style>" + css + "</style>";
    };

    let timeStamp = Date.now();
    let formattedString = date.formatDate(timeStamp, "YYYY-MM-DDTHH");

    // pdf导出
    const export_pdf = () => {
      // window.print()
      //打开一个新窗口 把HTML内容塞到新窗口里 在这个新窗口里进行打印等操作
      const WinPrint = window.open(
        //新建窗口
        "",
        "",
        "left=0,top=0,width=800,height=800,toolbar=0,scrollbars=0,status=0"
      ); //参数分别为：左边位置 上边位置 宽 高 工具栏 滚动条 状态栏
      //将内容写入到新窗口中
      WinPrint.document.write(`<!DOCTYPE html>  
<!DOCTYPE html>
<html>
<head><title>${formattedString}</title></head>
<body>
  ${compiledMarkdown.value}
</body></html>`);

      WinPrint.document.close();
      //防止图片加载不出来 做一个缓冲
      setTimeout(() => {
        WinPrint.focus();
        WinPrint.print();
        WinPrint.closed();
      }, 500);
    };

    // 导出web分享
    const share_web = () => {};

    //更换主题
    const change_theme = () => {};
    watchEffect(() => {
      markdown.data = String(props.from_index_input);
      init();
    });
    onMounted(() => {
      init();
    });
    return {
      marpit,
      compiledMarkdown,
      markdown,
      init,
      export_pdf,
      share_web,
      change_theme,
    };
  },
};
</script>
