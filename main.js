// Знаходимо елемент за класом
let them = document.querySelector('.them');

them.addEventListener("click", mouserr );

let body = document.querySelector('body');

let header = document.querySelector('header');

let title = document.querySelector('.title');

let ab = document.querySelector('.ab');

let ab1 = document.querySelector('.ab1');

let ab2 = document.querySelector('.ab2');

let header2 = document.querySelector('.header')

let header1 = document.querySelector('.header1')

let h3 = document.querySelectorAll('h3')

let footer = document.querySelector('footer')

let klass = document.querySelectorAll('.klass')


let them2 = "white"

   function  mouserr(){
      if (them2 == "white"){
      body.style.backgroundColor = '#000000';
      header.style.backgroundColor = '#ffffff'
      title.style.color = '#ffffff'
      ab.style.color = '#ffffff'
      ab1.style.color = '#ffffff'
      ab2.style.color = '#ffffff'
      them.style.backgroundColor = '#000000'
      them.style.color = '#ffffff'
      header2.style.backgroundColor = '#000000'
      header2.style.color = '#ffffff'
      header1.style.backgroundColor = '#000000'
      header1.style.color = '#ffffff'
      footer.style.backgroundColor = '#ffffff'
      for (let i=0;i<h3.length;i+=1){
         h3[i].style.background = "#ffffff"
         h3[i].style.color  = "#000000"
         console.log("привіт")
      }
      for (let i=0;i<klass.length;i+=1){
          klass[i].style.color  = "#000000"
          console.log("привіт")
      }
      them2 = "black"
}
      else {
         body.style.backgroundColor = '#ffffff';
         header.style.backgroundColor = '#000000'
         title.style.color = '#000000'
         ab.style.color = '#000000'
         ab1.style.color = '#000000'
         ab2.style.color = '#000000'
         them.style.backgroundColor = '#ffffff'
         them.style.color = '#000000'
         header2.style.backgroundColor = '#ffffff'
         header2.style.color = '#000000'
         header1.style.backgroundColor = '#ffffff'
         header1.style.color = '#000000'
         footer.style.backgroundColor = '#000000'
         for (let i=0;i<h3.length;i+=1){
            h3[i].style.background = "#000000"
            h3[i].style.color  = "#ffffff"
            console.log("привіт")
         }
         for (let i=0;i<klass.length;i+=1){
             klass[i].style.color  = "#ffffff"
             console.log("привіт")
         }
      them2 = "white"
      }
}