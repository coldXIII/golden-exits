<template>
  <div class="home-container">
    <section class="arrivals">
      <div class="arrivals--title">
        <h1>New Arrivals</h1>
        <p>View all products</p>
      </div>
      <div class="arrivals--images">
        <div class="image">
          <img src="../assets/img/arrivals/new-arrival-1.jpg" alt="" />
          <div class="inner--text"><span>Summer</span> collection</div>
        </div>
        <div class="image">
          <img src="../assets/img/arrivals/new-arrival-2.jpg" alt="" />
          <div class="inner--text"><span>best</span> quality</div>
        </div>
        <div class="image">
          <img src="../assets/img/arrivals/new-arrival-3.jpg" alt="" />
          <div class="inner--text"><span>Autumn</span> collection</div>
        </div>
      </div>
    </section>

    <section class="product">
      <div class="product--title">
        <h1>Product type</h1>
        <p>View all products</p>
      </div>
      <div class="product--main">
        <div class="product--main-images">
          <div class="grid-image" v-for="(image, index) in images" :key="index">
            <img :src="require(`../assets/img/arrivals/${image}.jpg`)" />
          </div>
        </div>
        <div class="product--main-article">
          <div class="product--main-article-inner">
            <article class="product--main-article-content">
              <h2>MAURIS VITAE ERAT CONSEQUAT AUCTOR EU IN ELIT.</h2>
              <p>
                Luxury Gold is free responsive template from templatemo.com
                website. Feel free to download, customize and use this template
                for your websites. Proin gravida nibh vel velit auctor
                aliquet.<br /><br />
                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                consequat ipsum, nec sagittis sem nibh id elit. Sed non mauris
                vitae erat consequat auctor eu in elit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.<br /><br />
                Mauris in erat justo. Vivamus condimentum vel sem sed sagittis.
                Duis non sapien egestas, eleifend felis vel, consequat quam.
              </p>
              <cite>MAURIS IN ERAT JUSTO</cite>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="store">
      <div class="store--title">
        <h1>Our Products</h1>
        <p>View all products</p>
      </div>
      <div class="tabs">
        <Tabs />
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import Tabs from '../components/Tabs.vue';

export default {
  name: 'HomeView',
  components: {
    Tabs,
  },
  setup() {
    const images = ref([
      'product-type-1',
      'product-type-2',
      'product-type-3',
      'product-type-4',
    ]);
    return { images };
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

section{
  margin: 2rem 0;
}
.arrivals--title {
  margin-bottom: 3rem;
}
.arrivals--title h1,
.product--title h1,
.store--title h1 {
  font-size: 3rem;
  margin-left: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 300;
  color: var(--black);

  @media screen and (max-width: 550px) {
    font-size: 2rem;
    text-align: center;
    margin-left: 0;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    text-align: center;
  }
}

.arrivals--title p,
.product--title p,
.store--title p {
  position: relative;
  font-size: 0.8rem;
  color: var(--golden);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-left: 4rem;

  @media screen and (max-width: 550px) {
    margin-left: 0;
    text-align: center;
  }
}

.arrivals--images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 850px) {
    gap: 1rem;
  }
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }

  .image {
    position: relative;
    text-align: center;
    max-width: 25rem;

    @media screen and (max-width: 650px) {
      width: 90%;
    }

    img {
      width: 100%;
    }
    .inner--text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 1.5rem;
      text-transform: uppercase;
      span {
        font-family: 'Dancing Script', cursive;
        font-size: 2.5rem;
      }
    }
    &:nth-child(2) .inner--text span {
      display: block;
      font-size: 2rem;
      border: 1px solid #fff;
      font-family: inherit;
      padding: 0.05rem 1rem;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 215, 0, 0.2);
    }
  }
}

.product {
  background: #eee;
  
}
.product--main {
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 1150px) {
    flex-wrap: wrap;
  }
  .product--main-images {
    flex: 1 1 40rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    padding: 2rem;
  }

  .grid-image {
    max-width: 30rem;
    transition: all 0.3s ease-in-out;

    img {
      width: 100%;
      transition: all 0.1s ease;

      &:hover {
        filter: blur(3px);
      }

      @media screen and (max-width: 1150px) {
        width: 90%;
      }

      @media screen and (max-width: 850px) {
        width: 100%;
      }
    }
  }
}

.product--main-article {
  flex: 1 1 45rem;
  padding: 2rem;
}
.product--main-article-inner {
  padding: 1rem;
  border: 1px solid var(--golden);
}
.product--main-article-content {
  padding: 2rem;
  border: 1px solid var(--golden);
  background: #fff;
    overflow: hidden;

  @media screen and (max-width: 550px) {
    padding: 0.5rem;
    text-align: center;

    height: 40vh;
    overflow: scroll;
  }

  h2 {
    padding: 2rem;
    color: var(--darkgray);
    @media screen and (max-width: 550px) {
      padding: 0.5rem;
      text-align: center;
      font-size: 1rem;
    }
  }
  p {
    padding: 2rem;
    font-size: 0.9rem;
    color: var(--lightgray);

    @media screen and (max-width: 550px) {
      padding: 0.5rem;
      text-align: center;
      font-size: 0.8rem;
    }
  }
  cite {
    color: var(--golden);
    padding: 2rem;

    @media screen and (max-width: 550px) {
      padding: 0.5rem;
      text-align: center;
    }
  }
}
</style>
