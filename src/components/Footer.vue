<template>
  <footer class="footer">
    <div class="container">
      <div class="about-us">
        <h1>Golden Exits</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia atque nemo ad modi officiis iure, autem nulla tenetur
          repellendus.
        </p>
      </div>

      <div class="follow">
        <h2>Follow us</h2>
        <div>
          <a href=""> <i class="fab fa-facebook-f"></i></a>
          <a href=""> <i class="fab fa-twitter"></i></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href=""> <i class="fab fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">2021&copy; byCold</div>
</template>
<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped lang="scss">
footer {
  padding: 2rem;
  text-align: center;
  background: var(--dark);
  color: var(--golden);

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 1rem;
      @media(max-width: 990px){
    font-size: 2.5rem;
  }
  }
  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
        margin-bottom: 1rem;

      @media(max-width: 990px){
    font-size: 1.5rem;
  }
  }
  p {
    color: rgba(255, 255, 255, 0.6);
        margin-bottom: 1rem;
  }
  a {
    margin: 1rem;

    i {
      font-size: 1.5rem;
      color: #fff;
    }
  }
  &:hover i {
    color: var(--golden);
  }
}
.copyright {
  background: var(--black);
  color: #fff;
  text-align: center;
  padding: 1rem;
}
</style>
