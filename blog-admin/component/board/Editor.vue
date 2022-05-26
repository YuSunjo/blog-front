<template>
  <div>
    <!-- Use the component in the right place of the template -->
    <tiptap-vuetify v-model="content"
                    v-on="inputListeners"
                    :extensions="extensions"
                    aria-placeholder="내용을 입력해주세요."/>

  </div>
</template>

<script>
// import the component and the necessary extensions

import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from "tiptap-vuetify";

export default {
  // specify TiptapVuetify component in "components"
  components: { TiptapVuetify },
  props: {
    board: {
      type: String,
      required: false
    }
  },
  mounted() {
    this.content = this.board !== undefined ? this.board : null;
  },
  data: () => ({
    // declare extensions you want to use
    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting Editor's content,
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    editor: null,
    emitAfterOnUpdate: false
  }),
  computed: {
    inputListeners() {
      const vm = this;
      return Object.assign({}, this.$listeners, {
        input: (event) => {
          vm.$emit('input', event);
        }
      })
    }
  },
};
</script>
