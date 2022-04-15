<template>
  <div class="fashion">
    <div class="fashion--inner">
      <div class="title--block">
        <TextContent
          v-for="{ type, content } in values[0]"
          :key="content"
          :type="type"
          :content="content"
        />
      </div>
      <div class="image--block" v-for="(image, idx) in manShoes" :key="idx">
        <img :src="require(`../assets/img/shoes/${image}.jpg`)" />
      </div>
    </div>
    <div class="fashion--inner">
      <div class="title--block">
        <TextContent
          v-for="{ type, content } in values[1]"
          :key="content"
          :type="type"
          :content="content"
        />
      </div>
      <div class="image--block" v-for="(image, idx) in womanShoes" :key="idx">
        <img :src="require(`../assets/img/shoes/${image}.jpg`)" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useState } from '@/helpers';
import TextContent from '@/components/textContent';
export default {
  name: 'ShoesTab',
  components: { TextContent },

  setup() {
    const { values } = useState(['values']);
    const manShoes = ref(['mshoes1', 'mshoes2', 'mshoes3']);
    const womanShoes = ref(['wshoes1', 'wshoes2', 'wshoes3']);
    return { manShoes, womanShoes, values };
  },
};
</script>
<style scoped lang="scss">
.fashion--inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid #eee;

  @media screen and (max-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .title--block {
    width: 20%;
    text-align: center;
    @media screen and (max-width: 850px) {
      width: 100%;
      padding: 1rem;
    }

    h3 {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 300;

      @media screen and (max-width: 500px) {
        font-size: 1rem;
      }

      span {
        color: var(--golden);
      }
    }
    p {
      font-size: 0.9rem;
      color: var(--darkgray);

      @media screen and (max-width: 500px) {
        font-size: 0.7rem;
      }
    }
    button {
      padding: 0.7rem 2rem;
      background: transparent;
      color: var(--lightgray);
      border: 1px solid var(--lightgray);
      text-transform: uppercase;

      @media screen and (max-width: 500px) {
        padding: 0.5rem 1rem;
      }
    }
  }

  .image--block {
    width: 20%;
    @media screen and (max-width: 850px) {
      width: 100%;
      padding: 1rem;
    }

    img {
      width: 100%;
    }
  }
}
</style>
