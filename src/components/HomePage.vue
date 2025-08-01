<template>
  <div class="background fill-height">
    <v-container style="padding-top:100px; padding-bottom:200px">

      <v-row class="justify-center">
        <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="6" >
          
          <h1 class="text-h1">Lia and Kramer<br>are to wed</h1>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="7" class="py-2">
              <h2 class="mt-6"> Event Details</h2>
                <h3 class="text-overline font-weight-black mt-4">When</h3>
                <p class="text-body-1">Saturday, August 2, 2025<br> 3pm - 7pm</br></p>
                <!-- <v-divider></v-divider> -->
                <h3 class="text-overline font-weight-black mt-4">Where</h3>
                <p class="text-body-1">Arsenal Yards, Watertown MA </p>
                <!-- <v-divider></v-divider> -->
                <h3 class="text-overline font-weight-black mt-4">What</h3>
               <p class="text-body-1">
                <b>3pm Ceremony</b> at the <a href="https://maps.app.goo.gl/HM6Tz3xHpb6Uc7KG7" target="_blank">Amphitheater</a><br>
                <b>4-7pm Food + Drinks</b> at <a href="https://maps.app.goo.gl/qEge4fL4AQi8vehd7" target="_blank">Mighty Squirrel Brewery</a>
              </p>
              <!-- <v-divider></v-divider> -->
              <h3 class="text-overline font-weight-black mt-4">Attire</h3>
              <p>Casual / Festive</p>     
              <h2 class="text-overline font-weight-black mt-4">Parking</h2>
              <p>You can park for free at Arsenal Yards 
                <a target="_blank" href="https://maps.app.goo.gl/wU1tTYy4nQjTAtEHA">Purple Parking Garage</a> and  
                <a target="_blank" href="https://maps.app.goo.gl/iLD8mJAtTkhD6qyP9">Red Garage</a>.</p>
              <!-- <v-divider></v-divider> -->
            </v-col>
          </v-row>
          <v-row>
          <v-col cols="12">
            <h2> Map</h2>
           

            <p>The amphitheater where the ceremony will take place is a short walk from the parking garage.</p>
            
            <v-img src="/assets/arsenal-diagram-final.png" class="mt-4"></v-img>


          </v-col>
        </v-row>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

</script>
<style scoped>

.background{
  background-image: linear-gradient(to right top, #9fa0dc, #5ac0f6, #00dbe8, #71edba, #d4f48c);
}
.text-overline{
  color: #536DFE !important;
}
a{
  color: #304FFE;
  border-bottom: 0.2px solid #304FFE;
  text-decoration: none;
  font-weight:500;
}
</style>