<template>
   <div class="card cards mt-3 p-3" style="height:193px;">
      <h5 class="card-title p-2 text-start text-black">
         {{ titleName }}
      </h5>
      <div v-show="img" class="card-body m-0">
         <img :src="img">
      </div>
      <p class="card-text texts text-wrap">
         {{ text }}
      </p>
      <div v-show="footer" class="card-footer border-0 justify-content-end p-0 bg-0">
         <p>{{ footer }}</p>
         <p> <img src="../../assets/arrowicon.svg"></p>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      titleName: {
         type: String,
         required: true
      },
      img: {
         type: String,
         default: '',
      },
      text: {
         type: String,
         default: '',
      },
      footer: {
         type: String,
         default: '',
      }
   }
};
</script>

<style scoped>
.texts {
   text-align: left;
   color: #797979;

}

.cards {
   height: 193px;
   color: #000000;
   font-weight: 30px;

}

.card-footer {
   display: flex;
   background-color: white;
}
</style>