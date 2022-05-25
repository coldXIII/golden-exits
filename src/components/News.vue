<template>
  <article class="news-item" v-for="(post, index) in posts" :key="index">
    <div class="image-box">
      <img :src="require(`../assets/img/posts/${post.image}.jpg`)" alt="" />
      <div class="info-box">
        <div class="date">
          <span>{{ post.date }}</span
          ><br />{{ post.month }}
        </div>
        <div class="icons">
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
        <input type="text" placeholder="Your Name" />
        <textarea placeholder="Enter your message" />
      </div>
    </Modal>
    <div class="article">
      <h2>{{ post.title }}.</h2>
      <span>{{ post.subtitle }}</span>
      <p>
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
import { useState } from '@/utils/helpers';
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
.modal-content input {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border:1px solid var(--golden);
  outline:none;
}
.modal-content textarea {
  width: 100%;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 0.5rem;
  border:1px solid var(--golden);
  outline:none;
}
.liked {
  background: var(--golden);
}
.news-item {
  margin: 0 auto;
}
.image-box {
  position: relative;
  min-width: 20rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
  .info-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 850px) {
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

    .date {
      background: var(--black);
      color: #fff;
      padding: 1.7rem;
      color: var(--golden);
      text-align: center;

      @media screen and (max-width: 850px) {
        padding: 0.6rem;
        border-radius: 0.5rem;
      }
      @media screen and (max-width: 620px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
      }
      @media screen and (max-width: 450px) {
        font-size: 0.8rem;
      }

      span {
        font-size: 2rem;

        @media screen and (max-width: 620px) {
          font-size: 0.9rem;
        }
        @media screen and (max-width: 450px) {
          font-size: 0.8rem;
        }
      }
    }
    .icons {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      flex-direction: column;
      @media screen and (max-width: 850px) {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
      }
      button {
        margin: 0.5rem auto;
        padding: 1rem;
        border-radius: 0.5rem;
        cursor: pointer;

        @media screen and (max-width: 850px) {
          margin: 0.5rem;
        }
        @media screen and (max-width: 620px) {
          padding: 0.8rem;
          font-size: 1rem;
        }
        @media screen and (max-width: 450px) {
          padding: 0.5rem;
          font-size: 0.7rem;
        }

        &.like {
          font-size: 1.7rem;
          background: #ab0008;
          color: #fff;
        }
        &.like.liked {
          background: #fff;
          color: #ab0008;
        }
        &.message {
          font-size: 1.5rem;
          background: var(--golden);
          color: #fff;
        }
      }
    }
  }
}

.article {
  margin: 2rem auto;

  h2 {
    font-weight: 300;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media screen and (max-width: 450px) {
      font-size: 1.5rem;
    }
  }
  span {
    color: var(--golden);
    font-style: italic;
  }
  p {
    color: var(--lightgray);
    margin-bottom: 1rem;
  }
  a {
    color: var(--lightgray);
    &:hover {
      color: var(--golden);
    }
    i {
      font-size: 1.5rem;
    }
  }
}
</style>
