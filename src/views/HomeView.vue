<script setup>

</script>

<template>
  <main>


      <div class="h3 inter">Save the date</div>
      <h1 class="dm-serif-text-regular">Lia and Kramer<br>are to be married</h1>
      <div class="h3 inter">Saturday June 21, 2025</div>
      <div class="h3 inter">Brighton, Massachusetts</div>
      <p style="margin-top:48px; font-weight:800;">Stay tuned for more information.</p>




  </main>
</template>

<style scoped>
.inter{
  font-family: "Inter Tight", sans-serif;
  font-optical-sizing: auto;
  /* background-color: rgba(0, 0, 0,.75); */
  font-weight: 800;
}
.courgette-regular {
  /* background-color: rgba(0, 0, 0,.75); */
  font-family: "Courgette", cursive;
  font-weight: 400;
  font-style: normal;
}
.h3{
  font-size:1.6rem;
  text-shadow: 3px 3px 2px white;
}
h1{

  font-size: 3.8rem;
  line-height: 1.2;
  /* background-color: rgba(0, 0, 0,.75); */
  text-align: center;
  
  flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 3px 3px 2px white;
}
  main {
    color:black;


      /* The image used */
  background-image: url("../assets/floral/BannerImage-093.png");

/* Full height */
height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .full-image {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    
  }
</style>