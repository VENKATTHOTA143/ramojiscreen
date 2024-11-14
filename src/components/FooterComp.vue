<template>
   <footer class="footer">
      <div class="footer-content">
         <div class="container">
            <div class="row">
               <div class="contact-info col-lg-3 col-md-3 ">
                  <p><img src="../assets/logo.svg" alt="" class="footer-logo"></p>
                  <p>
                     Ramoji Film City,Anaj pur(v),Abdullapur Met(M),R.R District,
                     Telangana-501512,India.
                  </p>
                  <p>info@dolphinhotels.com</p>
                  <p>Hotel Phone Number: +91 84 1524 6666</p>
                  <p>Call Center:+91 76598 76598|Timing : 06:30 AM - 10:30 PM</p>
                  <p>Check-in-Timings-12:00 Noon</p>
                  <p>Check-Out-Timing- 10:00 AM </p>

               </div>
               <div class="links col-lg-3 col-md-3 d-inline-block ">
                  <h4>Links</h4>
                  <ul class="p-0">
                     <li>Home</li>
                     <li>About us</li>
                     <li>Meeting & Events</li>
                     <li> Experiences</li>
                     <li>Experiental Dining</li>
                     <li>Contact us</li>
                     <li>Manage Booking</li>
                  </ul>

               </div>
               <div class="notices col-lg-3 col-md-3 ">
                  <h4>Notices</h4>
                  <ul class="p-0">
                     <li>Terms & Conditions</li>
                     <li>Privacy Policy</li>
                     <li>CSR policy</li>
                     <li> FAQs</li>

                  </ul>

               </div>
               <div class="social col-lg-3 col-md-3 ">
                  <h4>Get Connected</h4>
                  <ul class="p-0">
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>Instagram</li>
                  </ul>

               </div>

            </div>
         </div>
      </div>
      <div class="container">
         <div class="footer-bottom">
            <p>Sitemap simplotel - Hotel website Design& Booking Engine</p>
         </div>
      </div>
      <div style="table-layout: fixed;">
         <p>{{ response }}</p>
      </div>

   </footer>
</template>
<script>
// <!--  import { posts } from '@/services/service';
// import { ref, onMounted } from 'vue'; -->

export default {
   name: "FooterComponent",
   // setup() {

   //    const response = ref([]);

   //    onMounted(() => {
   //       posts.call().then(res => {
   //          response.value.push(...res.data);
   //       }).catch(error => {
   //          console.error("Error fetching posts:", error);
   //       });
   //    });

   //    return {
   //       response
   //    };
   // }
}
</script>

<style>
.footer {
   background: #FFC9C6;
   padding: 2rem;

}

.footer-content {
   display: flex;
   flex-wrap: wrap;
   gap: 2rem;
}

.footer-logo {
   width: 150px;
   height: 60px;
}

.contact-info .links .notices .social {
   flex: 1;
}

.footer-bottom {
   text-align: center;
   padding: 1rem, 0;
   border-top: 2px solid #BEBEBE;

}

p {
   padding: 2px;
}

li {
   padding: 15px 15px 15px 0px;
}

ul li {
   list-style-type: none;
}
</style>