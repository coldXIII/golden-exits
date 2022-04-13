<template>
  <div class="blog-container">
    <div class="blog-container__left">
      <div class="blog-container-left--title">
        <h1 class="blog-left-title">Latest News</h1>
        <p class="blog-left-subtitle">View all Posts</p>
      </div>
      <div class="blog-container-left--news">
        <News />
      </div>
    </div>
    <div class="blog-container-right">
      <aside>
        <ul class="blog-container-right--categories">
          <h4>Categories</h4>
          <li>Aenean Sollicitudin</li>
          <li>Lorem Quis Bibendum Auctor</li>
          <li>Bnisi Elit Consequat Ipsum</li>
          <li>Nec SagittisSem Nibh ld elit</li>
          <li>Duis Sed Bdio Ritmet Consequat</li>
        </ul>
      </aside>
      <article class="blog-container-right--recent-posts">
        <ul>
          <h4>RECENT POSTS</h4>
          <li v-for="(post,index) in 7" :key="index">
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
      <aside class="tags-box">
        <div class="tags-box--inner">
          <h2>Popular Tags</h2>
          <div class="tags">
            <span v-for="(tag,idx) in tags" :key="idx" class="tag">{{tag}}</span>
                    </div>
        </div>
      </aside>
    </div>
  </div>
  <Footer />
</template>

<script>
import News from '../components/News.vue';
import Footer from '../components/Footer.vue';
import { useState } from '@/helpers';
export default {
  name: 'BlogView',
  components: { News, Footer },
  setup(){
       const { tags } = useState(['tags']);
       return{tags}
  }
};
</script>

<style scoped lang="scss">
.blog-container {
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: 8fr 4fr;
}
.blog-container-left--title {
  margin-bottom: 3rem;
}

.blog-left-title {
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 300;
  color: var(--black);
}

.blog-left-subtitle {
  position: relative;
  font-size: 0.8rem;
  color: var(--golden);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-left: 4rem;
}
.blog-left-subtitle::before {
  content: '';
  position: absolute;
  top: 40%;
  left: 17%;
  width: 8rem;
  height: 0.1rem;
  background: var(--golden);
}
.blog-container-right--categories h4,
.blog-container-right--recent-posts h4 {
  font-style: italic;
  font-size: 1.5rem;
  color: var(--black);
  border-bottom: 1px solid var(--golden);
  padding: 1rem;
}

.blog-container-right--categories li {
    padding: 1rem;
  color: var(--lightgray);
  border-bottom: 1px dotted var(--lightgray);
}
.blog-container-right--recent-posts .post-date {
  color: var(--golden);
  font-style: italic;
}
.blog-container-right--recent-posts .post-article {
  font-size: 0.9rem;
}
.blog-container-right--recent-posts cite {
  font-weight: 700;
  font-size: 0.9rem;
}

.blog-container-right--recent-posts li {
  border-bottom: 1px solid var(--golden);
  padding: 0.5rem 0;
}
.tags-box--inner {
  width: 100%;
  padding: 3rem;
  text-align: center;
}
.tags {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.tags-box .tags .tag {
  background: var(--lightgray);
  padding: 0.4rem 1rem;
  border-radius: 3rem;
  margin: 0.4rem 0.6rem;
}
@media screen and (max-width: 1150px) {
  .blog-left-subtitle::before {
    display: none;
  }
   .blog-container {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr ;
  text-align: center;
}
}
@media screen and (max-width: 750px) {
 .blog-left-title{
   font-size: 2.5rem;
   text-align: center;
 }
 .blog-left-subtitle{
   text-align: center;
   margin-left: 0;
 }


.blog-container-right{
  text-align: center;
  width: 100%;
  margin-left: -2rem;
 
}
}


</style>
