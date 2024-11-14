<template>
   <!-- <p><img src="../../assets/arrowicon.svg">SOP's</p> -->
   <div class="table-container">
      <table class="table table-bordered">
         <thead>
            <tr>
               <th>
                  <div>File Name</div>
                  <div>Download</div>
               </th>

            </tr>
         </thead>
         <tbody>
            <tr v-for="file in files" :key="file.name">
               <td>
                  <div class="table-data">
                     <div>{{ file.name }}</div>
                     <div> <button @click="redirectToSitara" class="btn btn-link">
                           <!-- <img src="../assets/arrow.svg"> -->
                        </button></div>
                  </div>
               </td>

            </tr>
         </tbody>
      </table>
   </div>
</template>

<script>
export default {
   name: "TableComponent",
   data() {
      return {
         files: Array.from({ length: 10 }, (_, i) => ({
            name: `File_1242#${i + 1}`
         })),
      };
   },
   methods: {
      redirectToSitara() {
         this.$router.push("/sitara");
      },
   },
};
</script>

<style scoped>
.table-container {
   margin-top: 20px;
   padding: 20px;
   background-color: #fff;
   border-radius: 5px;
}

th {
   display: flex;
   justify-content: space-between;
}

.table-data {
   display: flex;
   justify-content: space-between;
}
</style>
