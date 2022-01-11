<!--
 * @Author: wanqqq29
 * @Date: 2022-01-11 14:46:20
 * @LastEditTime: 2022-01-11 14:57:32
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\marp-core.vue
-->
<template>{{ html }}{{ css }}</template>
<script>
import Marpit from "@marp-team/marpit";
import { Marp } from "@marp-team/marp-core";

export default {
  setup() {
    const marp = new Marp({
        inlineSVG: true,
    });
    const { html, css } = marp.render("# Hello, marp-core!");

    return {
      marp,
      html,
      css,
    };
  },
};
</script>
