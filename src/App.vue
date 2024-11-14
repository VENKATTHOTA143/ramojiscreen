<template>
  <div class="container">
    <HeaderComp />

  </div>
  <router-view></router-view>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  components: {
    HeaderComp,

  },
}

</script>

<style></style>
<!-- 
<template>
  <div class="app">
    <TabsComponent
      :tabs="tabs"
      :selectedTab="selectedTab"
      @update:selectedTab="selectedTab = $event"
    />
    
    <div class="main-content">
      <CardGridComponent :cards="cards" />
      <BirthdayCardComponent :birthdays="birthdays" :upcomingBirthdays="upcomingBirthdays" />
    </div>
  </div>
</template>

<script>
import TabsComponent from "./components/TabsComponent.vue";
import CardGridComponent from "./components/CardGridComponent.vue";
import BirthdayCardComponent from "./components/BirthdayCardComponent.vue";

export default {
  components: {
    TabsComponent,
    CardGridComponent,
    BirthdayCardComponent
  },
  data() {
    return {
      selectedTab: "Sitara",
      tabs: ["Sitara", "Tara", "Green Inn", "Shanthiniketan", "Sahara", "Vasundhara Villa"],
      cards: [
        { title: "Organization Chart", icon: "🏢" },
        { title: "About Us", icon: "ℹ️" },
        { title: "Policies", icon: "📜" },
        { title: "Staff Events", icon: "📅" },
        { title: "Awards", icon: "🏆" },
        { title: "Induction", icon: "🏠" },
        { title: "Forms", icon: "📝" },
        { title: "Cafeteria Menu", icon: "🍲" },
        { title: "SOP's", icon: "📄" }
      ],
      birthdays: [
        { name: "Jasmin Serif", role: "Deputy Manager" },
        { name: "Gunay", role: "Assistant Manager" }
      ],
      upcomingBirthdays: [
        { name: "Ali Asar", date: "27 Oct" },
        { name: "Denise Kerim", date: "28 Oct" },
        { name: "Cemere Handa", date: "29 Oct" }
      ]
    };
  }
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}
.main-content {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  width: 80%;
}
</style> -->
