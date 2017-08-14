<template lang="html">
  <div class="col-md-6">
    <div class="list-question" v-for="question in listQuestion">
      <b-list-group>
        <b-list-group-item active>
          Author By : {{question.author}}
        </b-list-group-item>
        <b-list-group-item >
          Title : {{question.title}}
        </b-list-group-item>
        <b-list-group-item>
          Content : {{question.content}}
        </b-list-group-item>

      </b-list-group>

    </div>
  </div>


</template>

<script>
export default {
  name: 'ListQuestion',
  data () {
    return {
      listQuestion: []
    }
  },
  created () {
    this.getQuestion()
  },
  methods: {
    getQuestion () {
      var self = this
      this.axios.get('http://localhost:3000/questions/')
      .then((response) => {
        console.log(response.data)
        self.listQuestion = response.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
