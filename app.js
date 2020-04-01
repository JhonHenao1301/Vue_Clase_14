
new Vue({
  el: '#app',
  
  data () {
    return {

      title: '',
      horas: '',
      courses: [],
    }
  },
  
  computed: {
      totalTime(){
        let total = 0;

        if(this.courses.length > 0){
          for(let i= 0; i < this.courses.length; i++){
            total += +this.courses[i].horas;
          }
          return total;
        }
        return 0;
      }
  },
  
  methods: {
    addCourse(){
      var course = { title: this.title, horas: this.horas }
      this.courses.push(course)
    }
  }
})