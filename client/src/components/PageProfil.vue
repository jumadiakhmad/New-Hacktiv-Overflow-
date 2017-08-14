<template lang="html">
  <div class="page-profil">
    <div class="container">
    </Navbar></Navbar>
      <div class="row">
        <div class="col-md-6  ">
          <NewQuestion></NewQuestion>
        </div>
        <div class="col-md-6">
          <ListQuestion></ListQuestion>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import NewQuestion from '@/components/NewQuestion'
import ListQuestion from '@/components/ListQuestion'
import Navbar from '@/components/Navbar'
export default {
  name: 'PageProfil',
  components: {
    NewQuestion,
    ListQuestion,
    Navbar
  }
}
</script>

<style lang="css">
</style>
