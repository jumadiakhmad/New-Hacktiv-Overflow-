<template lang="html">
  <div class="col-md-6">
      <div class="form-area">

          <br style="clear:both">
              <h3 style="margin-bottom: 25px; text-align: center;">Add Questions</h3>
            <div class="form-group">
              <h4 style="text-align:left">Title</h4>
  						<input type="text" class="form-control" id="name" name="title" placeholder="Title" required
                v-model="AddQuestion.title">
  					</div>
  					<div class="form-group">
              <h4 style="text-align:left">Content</h4>
              <textarea class="form-control" type="textarea" id="message" placeholder="Content" maxlength="140" rows="7"
                v-model="AddQuestion.content">
              </textarea>
                <span class="help-block"><p id="characterLeft" class="help-block ">You have reached the limit</p></span>
            </div>

          <button type="button" id="submit" name="submit" class="btn btn-primary pull-right" @click="addQuestion()">Add Question</button>
          <button type="button" id="submit" name="submit" class="btn btn-primary pull-right" @click="cancel()">Cancel</button>

      </div>
    </div>
</template>

<script>
export default {
  name: 'NewQuestion',
  props: ['author'],
  data () {
    return {
      AddQuestion: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    addQuestion() {
      var self = this
      this.axios.post('http://localhost:3000/questions/', {
        title: self.AddQuestion.title,
        content: self.AddQuestion.content,
        author: localStorage.setItem('author')
      })
      .then((response) => {
        console.log(response.data)
        alert('Success Add Questions')
        self.$router.push({path: './pageprofil'})
      })
      .catch((err) => {
        alert('Failed')
        console.log(err)
      })
    },
    cancel () {
      this.AddQuestion = ''
    }
  }
}
</script>

<style lang="css" scoped>

</style>
