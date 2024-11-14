<!-- 
<template>
   <div class="birthday-card m-3">
      <h3 class="birthday-header"><img src="../../assets/cake.svg" alt="">Birthdays<img src="../../assets/partypop.svg"
            alt=""></h3>
      <div v-for="(person, index) in birthdays" :key="index" class="birthday-person">
         <div class="name"> <img src="../../assets/userbig.svg" alt="">{{ person.name }}</div>
         <div class="role"><img src="../../assets/userbig.svg" alt="">{{ person.role }}</div>
      </div>
      <h4 class="upcoming-header">Upcoming Birthdays</h4>
      <div v-for="(upcoming, index) in upcomingBirthdays" :key="index" class="upcoming-birthday">
         <div class="name"><img src="../../assets/usersmall.svg" alt="">{{ upcoming.name }}</div>
         <div class="date">{{ upcoming.date }}</div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      birthdays: Array,
      upcomingBirthdays: Array
   }
};
</script>

<style scoped>
.birthday-card {
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 8px;
   background-color: #fff;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   width: 250px;
}

.birthday-header {
   font-size: 1.2em;
   color: #ff4d4d;
   margin-bottom: 10px;
}

.birthday-person,
.upcoming-birthday {
   display: flex;
   justify-content: space-between;
   padding: 8px 0;
}

.name {
   font-weight: bold;
}

.role,
.date {
   color: #666;
}

.upcoming-header {
   margin-top: 15px;
   color: #333;
}
</style> -->
<template>
   <div class="birthday-card m-3">
      <h3 class="birthday-header">
         <img src="../../assets/cake.svg" alt="Cake icon"> Birthdays{{ num }}
         <img src="../../assets/partypop.svg" alt="Party popper icon">
      </h3>
      <hr class="header-underline" />

      <div v-for="(person, index) in birthdays" :key="index" class="birthday-person">
         <div class="name">
            <img src="../../assets/userbig.svg" alt="User icon"> {{ person.name }}
         </div>
         <div class="role">
            {{ person.role }}
         </div>
      </div>

      <h4 class="upcoming-header">Upcoming Birthdays</h4>
      <div v-for="(upcoming, index) in upcomingBirthdays" :key="index" class="upcoming-birthday">
         <div class="name">
            <img src="../../assets/usersmall.svg" alt="User icon"> {{ upcoming.name }}
         </div>
         <div class="date">{{ upcoming.date }}</div>
      </div>
   </div>

</template>

<script>
import { num } from '@/services/service';
console.log(num.value, "birthday");




export default {
   data() {
      return {
         num
      }
   },
   props: {
      birthdays: Array,
      upcomingBirthdays: Array
   },
   watch: {
      num(old, present) {
         console.log(old, present);

         console.log(old, "birthday");

      }

   }


};
</script>

<style scoped>
.birthday-card {
   padding: 20px;
   border: 1px solid #ddd;
   border-radius: 8px;
   background-color: #fff;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   margin: 0;
}

.birthday-header {
   font-size: 1.2em;
   color: #ff4d4d;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   gap: 8px;
}

.header-underline {
   border: 0;
   border-bottom: 2px solid #ff4d4d;
   margin: 0;
   padding: 0;
   width: 100%;

}

.birthday-person,
.upcoming-birthday {
   display: flex;
   justify-content: space-between;
   padding: 8px 0;
}

.name,
.role {
   display: flex;
   align-items: center;
   gap: 6px;
   font-weight: bold;
}

.role,
.date {
   color: #666;
}

.upcoming-header {
   margin-top: 15px;
   color: #333;
}
</style>
