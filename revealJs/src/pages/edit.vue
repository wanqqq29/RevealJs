<!--
 * @Author: wanqqq29
 * @Date: 2022-01-04 21:51:48
 * @LastEditTime: 2022-01-14 10:25:56
 * @LastEditors: wanqqq29
 * @Description: blog.wanqqq29.cn
 * @FilePath: \revealJs\src\pages\edit.vue
-->
<template>
<section>
  <div class="row mainbox">
    <div class="col-6 cRight " >
      <div id="edit">
        <textarea :value="input" @input="update"></textarea>
      </div>
    </div>
    <div class="col-6 cLeft">
      <renderer :from_index_input="output" />
    </div>
  </div>
</section>
</template>
<style lang="scss" scoped src="../css/edit.scss"></style>
<script>
import { ref,computed } from "vue";
import renderer from "../components/renderer.vue";
export default {
  components: {
    renderer: renderer,
  },
  setup() {
    // 用户输入数据
    const input = ref(`---
  paginate: true
---

<!--_paginate: false -->
# **Hello!**
## aa
### aaa
#### aaa
##### 5
###### 6

### [融合句法规则和CNN的旅游评论情感分析](https://www.cnki.com.cn/Article/CJFDTotal-SJSJ201911047.htm)
- a
  - **aa**
- 11
- aa

---

# 你好！
- a
  - aa
- 11
- aa

> aaaaaa

---

![w:500px, h:600px](https://gitee.com/wanqqq29/vnote_images/raw/master/markdown文件夹/其他/记事本/记事本(什么都记).md/87994610221192.png)![w:500px, h:400px](https://gitee.com/wanqqq29/vnote_images/raw/master/markdown文件夹/其他/记事本/记事本(什么都记).md/359494610211722.png)`);

    // 经过处理后的数据
    const output = computed(()=>{
      return input.value
    })
    const update = (e) => {
      input.value = e.target.value;
    };
    return {
      input,
      output,
      update,
    };
  },
};
</script>
