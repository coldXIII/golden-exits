<template>
  <div class="home-container">
    <section class="arrivals">
      <div class="arrivals--title">
        <h1>New Arrivals</h1>
        <p>View all products</p>
      </div>
      <div class="arrivals--images">
        <div class="image">
          <img src="../assets/img/new-arrival-1.jpg" alt="" />
          <div class="inner--text"><span>Summer</span> collection</div>
        </div>
        <div class="image">
          <img src="../assets/img/new-arrival-2.jpg" alt="" />
          <div class="inner--text"><span>best</span> quality</div>
        </div>
        <div class="image">
          <img src="../assets/img/new-arrival-3.jpg" alt="" />
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
            <img :src="require(`../assets/img/${image}.jpg`)" />
          </div>
        </div>
        <div class="product--main-article">
          <div class="product--main-article-inner">
            <div class="product--main-article-content">
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
            </div>
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
      <Footer />
    </section>
  </div>
</template>

<script>
import Tabs from '../components/Tabs.vue';
import Footer from '../components/Footer.vue';

export default {
  name:'HomeView',
  components: {
    Tabs,
    Footer,
  },
  data() {
    return {
      images: [
        'product-type-1',
        'product-type-2',
        'product-type-3',
        'product-type-4',
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.store {
  height: 100vh;
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
}
.arrivals--title p::before,
.product--title p::before,
.store--title p::before {
  content: '';
  position: absolute;
  top: 40%;
  left: 15%;
  width: 8rem;
  height: 0.1rem;
  background: var(--golden);
}
.arrivals--images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.arrivals--images .image {
  position: relative;
  text-align: center;
  max-width: 25rem;
}
.arrivals--images .image img {
  width: 100%;
}
.arrivals--images .image .inner--text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
  text-transform: uppercase;
}
.arrivals--images .image .inner--text span {
  font-family: 'Dancing Script', cursive;
  font-size: 2.5rem;
}
.arrivals--images .image:nth-child(2) .inner--text span {
  display: block;
  font-size: 2rem;
  border: 1px solid #fff;
  font-family: inherit;
  padding: 0.05rem 1rem;
}

.arrivals--images .image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 215, 0, 0.2);
}
.product {
  background: #eee;
}
.product--main {
  display: flex;
  flex-wrap: nowrap;
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
}
.grid-image img {
  width: 100%;
  transition: all 0.1s ease;
}
.grid-image:hover img {
  filter: blur(3px);
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
}
.product--main-article-content h2 {
  padding: 2rem;
  color: var(--darkgray);
}
.product--main-article-content p {
  padding: 2rem;
  font-size: 0.9rem;
  color: var(--lightgray);
}
.product--main-article-content cite {
  color: var(--golden);
  padding: 2rem;
}

@media screen and (max-width: 1150px) {
  *::before {
    display: none;
  }
  .product--main {
    flex-wrap: wrap;
  }

  .grid-image img {
    width: 90%;
  }
}
@media screen and (max-width: 850px) {
  .arrivals--images {
    gap: 1rem;
  }
  .grid-image img {
    width: 100%;
  }
}
@media screen and (max-width: 650px) {
  .arrivals--images {
    flex-wrap: wrap;
  }
  .arrivals--images .image {
    width: 90%;
  }
}
@media screen and (max-width: 550px) {
  .product--main-article-content,
  .product--main-article-content h2,
  .product--main-article-content p,
  .product--main-article-content cite {
    padding: 1rem;
    text-align: center;
  }
  .store--title h1,
  .product--title h1,
  .arrivals--title h1 {
    font-size: 2rem;
    text-align: center;
    margin-left: 0;
  }
  .store--title p,
  .product--title p,
  .arrivals--title p {
    margin-left: 0;
    text-align: center;
  }
}
@media screen and (max-width: 450px) {
  .store--title h1,
  .product--title h1,
  .arrivals--title h1 {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
