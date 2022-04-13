<template>
  <article class="news__item" v-for="(post, index) in posts" :key="index">
    <div class="news__item--image-box">
      <img :src="require(`../assets/img/${post.image}.jpg`)" alt="" />
      <div class="news__item--image-box-left">
        <div class="news__item--image-box-date">
          <span>{{ post.date }}</span
          ><br />{{ post.month }}
        </div>
        <div class="news__item--image-box-icons">
          <button
            class="like"
            @click="isLiked = !isLiked"
            :class="{ liked: isLiked }"
          >
            <i class="fas fa-heart"></i>
          </button>
          <button class="message" @click="toggleModal">
            <i class="far fa-comments"></i>
          </button>
        </div>
      </div>
    </div>
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h2><em>Place for your comment...</em></h2>
        <textarea placeholder="Enter your message" />
      </div>
    </Modal>
    <div class="news__item-text">
      <h2 class="news__item-text--title">{{ post.title }}.</h2>
      <span class="news__item-text--subtitle">{{ post.subtitle }}</span>
      <p class="news__item-text--article">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed temporibus
        aspernatur, unde harum modi at possimus numquam quasi aliquid blanditiis
        nulla eos. Ut architecto consequuntur dolorem accusantium culpa aut,
        assumenda voluptates nisi voluptas minus! In!
      </p>
      <a href="#"
        ><i class="far fa-arrow-alt-circle-right"></i> &nbsp;Read More</a
      >
    </div>
  </article>
</template>

<script>
import Modal from './Modal.vue';
import { useState } from '@/helpers';
import { ref } from 'vue';
export default {
  name: 'AppNews',
  components: {
    Modal,
  },

  setup() {
    const { posts } = useState(['posts']);
    const modalActive = ref(false);
    const isLiked = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal, posts, isLiked };
  },
};
</script>

<style scoped lang="scss">
.modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
}
.modal-content textarea {
  width: 80%;
  margin-top: 3rem;
  padding:  2rem;
}
.liked {
  background: var(--golden);
}
.news__item--image-box {
  position: relative;
  min-width: 20rem;
}
.news__item--image-box img {
  width: 100%;
}
.news__item--image-box-left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
}
.news__item--image-box-icons {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
}
.news__item--image-box-date {
  background: var(--black);
  color: #fff;
  padding: 1.7rem;
  color: var(--golden);
  text-align: center;
}
.news__item--image-box-date span {
  font-size: 2rem;
}
button {
  margin: 1rem auto;
  padding: 0.7rem;
  cursor: pointer;
}
button.like {
  font-size: 1.5rem;
  background: #ab0008;
  color: #fff;
}
button.like.liked {
  background: #fff;
  color: var(--golden);
}
button.message {
  font-size: 1.5rem;
  background: var(--golden);
  color: #fff;
}
.news__item-text {
  margin: 2rem auto;
}
.news__item-text--title {
  font-weight: 300;
  font-size: 2rem;
  text-transform: uppercase;
}
.news__item-text--subtitle {
  color: var(--golden);
  font-style: italic;
}
.news__item-text--article {
  color: var(--lightgray);
}
a {
  color: var(--lightgray);
}
a:hover {
  color: var(--golden);
}
a i {
  font-size: 1.5rem;
}
@media screen and (max-width: 980px) {
  .news__item--image-box-left {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 30%;
    align-items: center;
    flex-direction: row;
  }
  .news__item--image-box-icons {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    gap: 0.2rem;
  }
  .news__item--image-box-date {
    padding: 0.6rem;
  }
  button.like {
    font-size: 1.5rem;
    background: #ab0008;
    color: #fff;
    padding: 0.6rem;
    margin: 0;
  }
  button.message {
    font-size: 1.5rem;
    background: var(--golden);
    color: #fff;
    padding: 0.6rem;
    margin: 0;
  }
}
@media screen and (max-width: 450px) {
  .news__item--image-box {
    width: 100%;
  }
  .news__item--image-box-left {
    display: none;
  }
  .news__item--image-box:hover .news__item--image-box-left {
    display: flex;
  }
  .news__item-text h2 {
    font-size: 1.5rem;
  }
}

</style>
