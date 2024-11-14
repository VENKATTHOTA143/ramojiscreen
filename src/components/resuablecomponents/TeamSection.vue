<!-- <template>
   <div>
      <h2>{{ titleName }}</h2>
      <div class="team-members">
         <div v-for="(member, index) in teamMembers" :key="index" class="team-member">
            <div class="profile-image">
               <img :src="member.image" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
            <button>View Team</button>
         </div>
      </div>
      <button class="view-all">View all</button>
   </div>
</template>

<script>
export default {
   props: {
      teamMembers: {
         type: Array,
         required: true,
      },
      titleName: {
         type: String,
         required: true,
      },
   },
   mounted() {
      console.log(this.teamMembers); // For debugging
   },
};
</script>

<style scoped>
.team-members {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

.team-member {
   width: 45%;
   margin-bottom: 20px;
   text-align: center;
}

.profile-image img {
   width: 100px;
   height: 100px;
   border-radius: 50%;
   object-fit: cover;
}

button {
   background-color: red;
   color: white;
   padding: 5px 10px;
   border: none;
   cursor: pointer;
}
</style> -->
<template>
  <div class="container team-section py-5 col-lg-12">
    <h2 class="text-center  ">Our Other Team mates</h2>
    <div class="row">
      <div v-for="member in teamMembers" :key="member.name" class="col-lg-6  ">
        <div class="team-member text-center position-relative">
          <div class="profile-image-wrapper position-relative mb-2 col-lg-4">
            <img :src="member.imgSrc" alt="Profile Picture" />
            <button class="btn view-team-btn col-lg-8">View Team</button>
          </div>
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-title">{{ member.title }}</p>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <button class="btn view-all-btn">View all</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      teamMembers: [
        {

          imgSrc: require("@/assets/frontoffice.svg")
        },
        {

          imgSrc: require("@/assets/directorroom.svg")
        },
        {

          imgSrc: require("@/assets/frontoffice.svg")
        },
        {

          imgSrc: require("@/assets/frontoffice.svg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.team-section {

  margin: auto;
}



.profile-image {
  width: 140px;
  height: 140px;
  object-fit: cover;

}

.view-team-btn {

  top: 10%;
  left: 100px;


  background-color: #e63946;
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  position: absolute;
  z-index: -1;
  height: 140px;
  width: 400px;
}

.member-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-top: 10px;
  margin-bottom: 2px;
}

.member-title {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
}

.view-all-btn {
  background-color: #e63946;
  color: white;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

h2 {
  font-size: 1.75rem;
  color: #333;
}

p {
  font-size: 0.875rem;
  color: #666;
}
</style>

<!-- class="rounded-circle border border-dark img-fluid" -->
<!-- <template>
  <div class="col-lg-6">
    <div v-for="member in teamMembers" :key="member.name" class="col-lg-6 d-flex ">
      <div class="col-lg-4">
        <img :src="member.imgSrc" alt="Profile Picture" />
        <img src="../../assets/financedirector.svg">
        <h3 class="member-name">{{ member.name }}</h3>
        <p class="member-title">{{ member.title }}</p>

      </div>
      <div class="col-lg-8">
        <button
          style="width: 500px; height:130px;background-color:red; position:relative;left:-50px; top:29px; z-index:-1; border:none">view</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      teamMembers: [
        {


          imgSrc: require("@/assets/frontoffice.svg")
        },
        {


          imgSrc: require("@/assets/directorroom.svg")
        },
        {
          name: "Kenzy Yasran",
          title: "Director of Finance",
          imgSrc: require("@/assets/financedirector.svg")
        },
        {
          name: "Chan Wang",
          title: "Hotel Manager",
          imgSrc: require("@/assets/hotelmanager.svg")
        }
      ]
    };
  }
};
</script> -->