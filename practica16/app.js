  const { createApp } = Vue
  createApp({
    data() {
      return {
        lenguajes : ['C', 'C++','C#','Java','Ruby','Kotlin'],
        materia : 'Desarrollo de aplicaciones web'
      }
    }
  }).mount('#miApp');
