<template>
  <div class="blog-container">
    <div class="blog-container__left">
      <div class="title">
        <h1>Latest News</h1>
        <p>View all Posts</p>
      </div>
      <div class="blog-container-left--news">
        <News />
      </div>
    </div>
    <aside class="blog-container__right">
      <article>
        <ul class="categories">
          <h4>Categories</h4>
          <li>Aenean Sollicitudin</li>
          <li>Lorem Quis Bibendum Auctor</li>
          <li>Bnisi Elit Consequat Ipsum</li>
          <li>Nec SagittisSem Nibh ld elit</li>
          <li>Duis Sed Bdio Ritmet Consequat</li>
        </ul>
      </article>
      <article class="recent-posts">
        <ul>
          <h4>RECENT POSTS</h4>
          <li v-for="(post, index) in 7" :key="index">
            <h5 class="post-title">AENEAN SOLLICITUDIN LOREM</h5>
            <span class="post-date">21 January 2021</span>
            <p class="post-article">
              Integer lorem enim, pretium suscipit lectus vitae, sagittis
              aliquet urna. Vivamus interdum pellentesque urna, at pharetra
              felis tincidunt in.
            </p>
            <cite>Author:Admin</cite>
          </li>
        </ul>
      </article>
      <article class="tags-box">
        <div class="tags-box--inner">
          <h2>Popular Tags</h2>
          <div class="tags">
            <span v-for="(tag, idx) in tags" :key="idx" class="tag">{{
              tag
            }}</span>
          </div>
        </div>
      </article>
    </aside>
  </div>
</template>

<script>
import News from '../components/News.vue';

import { useState } from '@/utils/helpers';
export default {
  name: 'BlogView',
  components: { News },
  setup() {
    const { tags } = useState(['tags']);
    return { tags };
  },
};
</script>

<style scoped lang="scss">
.blog-container {
  padding: 2rem;
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap:1rem;

  @media screen and (max-width: 980px) {
    padding: 2rem;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .blog-container__left {
    margin: auto;

    .title {
      margin-bottom: 3rem;

      h1 {
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: 300;
        color: var(--black);

        @media screen and (max-width: 750px) {
          font-size: 2.5rem;
          text-align: center;
        }
      }
      p {
        position: relative;
        font-size: 0.8rem;
        color: var(--golden);
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        margin-left: 4rem;

        @media screen and (max-width: 750px) {
          text-align: center;
          margin-left: 0;
        }
      }
    }
  }
}

.blog-container__right {
  margin: auto;
  @media screen and (max-width: 750px) {
    text-align: center;
    width: 100%;
  }
  .categories {
    margin-bottom: 2rem;
  }

  .categories h4,
  .recent-posts h4 {
    font-style: italic;
    font-size: 1.5rem;
    color: var(--black);
    border-bottom: 1px solid var(--golden);
    padding: 1rem;
  }

  .categories li {
    padding: 1rem;
    color: var(--lightgray);
    border-bottom: 1px dotted var(--lightgray);
  }
  .recent-posts {
    li {
      border-bottom: 1px solid var(--golden);
      padding: 1rem 0;
      margin: 1rem auto;

      .post-date {
        color: var(--golden);
        font-style: italic;
        margin-bottom: 1rem;
      }
      .post-article {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      cite {
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .tags-box--inner {
    width: 100%;
    padding: 3rem;
    text-align: center;
    h2 {
      margin-bottom: 2rem;
    }

    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .tag {
        background: var(--lightgray);
        padding: 0.4rem 1rem;
        border-radius: 3rem;
        margin: 0.4rem 0.6rem;
      }
    }
  }
}
</style>
