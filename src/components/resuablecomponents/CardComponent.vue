<template>
   <div class="row card-grid">
      <!-- <p>Selected Tab: {{ $props.selectedTab }}</p> -->
      <div v-if="$props.selectedTab === 'Sitara'" class=" card2-section mt-4 "
         :class="sopId || formId ? 'col-4' : 'col-12'">
         <div class="row" style="gap: 10px;">
            <div v-for="(card, index) in card2" :key="index" class="card-container col-4 mb-4 "
               @click="selectedcard(card)" :class="`card-${index + 1}`">
               <div class="card-title">{{ card.title }}</div>
               <div class="card-icon">
                  <img :src="card.icon" alt="Card2 Icon">
               </div>
            </div>
         </div>
      </div>
      <div v-else v-for="(card, index) in cards" :key="index" class="card-container col-5 m-3"
         :class="`card-${index + 1}`">
         <div class="card-title">{{ card.title }}</div>
         <div class="card-icon">
            <img :src="card.icon" alt="Card Icon">
         </div>
      </div>
      <div class="col-lg-8">
         <TableComp v-if="sopId" />
         <FormTable v-if="formId" />
      </div>
   </div>


</template>
<!-- selectedTab: 0,
selectedCard: null,-->
<script>
import FormTable from './FormTable.vue';
import TableComp from './TableComp.vue';
export default {
   props: {
      cards: {
         type: Array,
         required: true,
      },
      card2: {
         type: Array,
         required: true,
      },
      selectedTab: {
         type: String,
         required: true,
      },
   },
   components: {
      TableComp,
      FormTable

   },
   data() {
      return {
         sopId: false,
         formId: false

      }
   },
   mounted() {
      console.log(this.selectedTab)
   },
   methods: {
      selectedcard(value) {
         console.log("click", value.title)
         if (value.title === "SOP’s") {
            this.sopId = true
         }

         else {
            this.sopId = false
         }
         if (value.title === "Forms") {
            this.formId = true
         }
         else {
            this.formId = false
         }
      },

   }



};
</script>

<style scoped>
.card-grid {
   display: flex;
   flex-wrap: wrap;
}

.card-container {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   width: 252px;
   height: 130px;
   padding: 15px;
   border-radius: 4px;
   color: #fff;
   font-family: Sarabun;
   font-size: 20px;
   font-weight: 700;
   line-height: 26px;
}

.card-title {
   font-size: 20px;
}

.card-icon {
   align-self: flex-end;
   font-size: 1.5em;
   margin-top: auto;
}

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
   background-color: #8196B2;
}

.card-5 {
   background-color: #9E87BC;
}

.card-6 {
   background-color: #64B49A;

}

.card-7 {
   background-color: #527B47;
}

.card-8 {
   background-color: #AF737D;

}

.card-9 {
   background-color: #7B6347;
   ;

}
</style>
