const form = document.querySelector('form')
//form kabhi bhi submite hota hai to post ya get me hota hai jab bhi haota hai to uski value
// url ya kisi aur form me server me chali jati hai 
// lekin yaha pe hum server pe send nhi kar rahe h to uski default activity ko rokna hai yaha pe


// if you want to fetch data here(outside to addeventlistener) from input than it show empty value 
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e){
    e.preventDefault()// to prevent default action of from to send on server 
    const height = parseInt(document.querySelector('#height').value) //here fetching data from input and converting it string to integer
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const bmicondn = document.querySelector('#urcondn')
    if(height===''|| height<0|| isNaN(height))
      { results.innerHTML="Please Give a Valid Height";
      }else if(weight===''||weight<0||isNaN(weight)){
       results.innerHTML="please Give a Valid Weight";
      }else{
      const bmi = (weight/((height*height)/10000)).toFixed(2) 
      //show the result
      results.innerHTML= `<span>${bmi}</span>`; 
      if(bmi<18.6){
         bmicondn.innerHTML ="Under Weight"
      } else if(bmi>18.9 && bmi<24.9){
         bmicondn.innerHTML="Normal Weight"
      }else{
        bmicondn.innerHTML="Oversized Weight"
      }
    }
});