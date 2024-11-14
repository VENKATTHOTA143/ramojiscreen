<template>
   <p>Forms</p>
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

      </table>
   </div>
</template>

<script>
export default {
   name: "TableComponent",

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
