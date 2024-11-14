<template>
   <div class="tabs p-1 m-3">
      <div v-for="(tab, index) in tabs" :key="index" :class="['tab', { active: selectedTab === tab }]"
         @click="selectTab(tab)">
         <img v-if="tab !== ''" src="../../assets/hotel.svg" alt="">
         <img v-else src="../../assets/home-icon.svg" alt="">
         {{ tab }}
      </div>
   </div>
</template>

<script>
export default {
   props: {
      tabs: Array,
      selectedTab: String
   },
   methods: {
      selectTab(tab) {
         this.$emit('update:selectedTab', tab);
      }
   }
};
</script>

<style scoped>
.tabs {
   display: flex;
   gap: 10px;
   margin-top: 0px;
}

.tab {
   padding: 10px 20px;
   cursor: pointer;
   border: 1px solid #ccc;
   border-radius: 8px;
   background-color: white !important;
   color: #333;
   display: flex;
   align-items: center;
   gap: 8px;
   font-weight: bold;
}

.tab.active {
   background-color: #ff002A !important;
   color: #333;
   border-color: #ff002A;
}
</style>
