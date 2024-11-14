<template>
   <div class="container">
      <div class="row">
         <div class="col-lg-6">
            <div class="col-lg-4">
               <CardComponent :cards="cards" :selectedTab="selectedTab" />
            </div>
         </div>
      </div>
   </div>
</template>
<script>
import CardComponent from '@/components/resuablecomponents/CardComponent.vue';

export default {
   components: {
      CardComponent
   },
   data() {
      return {
         cards: [
            { title: "Organization Chart", icon: require("@/assets/orgicon.svg"), },
            { title: "About Us", icon: require("@/assets/aboutusicon.svg") },
            { title: "policies", icon: require("@/assets/staffeventsicon.svg") },
            { title: "Staff Events", icon: require("@/assets/orgicon.svg"), },
            { title: "Awards", icon: require("@/assets/aboutusicon.svg") },
            { title: "induction", icon: require("@/assets/staffeventsicon.svg") },
            { title: "forms", icon: require("@/assets/orgicon.svg"), },
            { title: "Cafeteria Menu", icon: require("@/assets/aboutusicon.svg") },
            { title: "Sop's", icon: require("@/assets/staffeventsicon.svg") },
         ],
      }
   }
}
</script>
<style>
.card-1 {
   background-color: #4F7580;
}

.card-2 {
   background-color: #A9A9A9;
}

.card-3 {
   background-color: #8196B2;
}

.card-4 {
   background-color: #4F7580;
}

.card-5 {
   background-color: #A9A9A9;
}

.card-6 {
   background-color: #8196B2;
}

.card-7 {
   background-color: #4F7580;
}

.card-8 {
   background-color: #A9A9A9;
}

.card-9 {
   background-color: #8196B2;
}
</style>