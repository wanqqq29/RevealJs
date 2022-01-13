<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:59:55
 * @LastEditTime: 2022-01-13 15:25:44
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
      background-color: #369;
      color: #fff;
      font-size: 30px;
      padding: 40px;
    }

    h1,
    h2 {
      text-align: center;
      margin: 0;
    }

    h1 {
      color: #8cf;
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
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close(); //随打印窗口关闭
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
