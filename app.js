const fs = require('fs')
const { createCanvas, loadImage, registerFont} = require('canvas')

const width = 1000
const height = 1000
function myData(req , req2) { 
    canvas = createCanvas(width, height)
    context = canvas.getContext('2d')
    //adding custom fonts
    registerFont('./fonts/UN-Abhaya-6-110-kern.ttf', { family: 'Sarasavi Unicode' })
    registerFont('./fonts/UN-Bindumathi.ttf', { family: 'UN-Bindumathi' })
   
   
   context.fillStyle = '#CD853F'
   context.fillRect(0, 0, width, height)
   
   // Jimp.read('k.jpg')
   //   .then(image => {
   //     // Do stuff with the image.
   //      context.drawImage()
   
   //   })
   loadImage('./te.png').then(image => {
       //context.drawImage(image, 0, 0, width , height )
   
   context.font = '80pt Sarasavi Unicode'
   context.textAlign = 'center'
   context.textBaseline = 'top'
   // context.fillStyle = '#3574d4'
   
   var text = req
   var text1 = ''
   var text2 = ''
   var lasttext = ''
   var lasttexts = [];
   var a = 0;

   const textWidth = context.measureText(text).width
   if(width < textWidth){
       var i = false
       console.log("fsd")
       var fields  = text.split(" ")
       //console.log(fields)
       console.log("filels :" + fields)


       fields.forEach(element =>{
           console.log("for each: " + element)
       })
       fields.forEach(element => {
       
        console.log("element :" + element)
           if( context.measureText(text1.concat(element)).width < width-20 ){
               text1 = text1.concat(element)
               text1 = text1.concat(" ")
               console.log("fdkkkkkkkk")
               console.log(element)
               i = true
               return;
           } else {
               console.log("line break")
               i = false
               lasttexts.push(text1)
               text1 = element
               text1 = text1.concat(" ")
               console.log("story " + text1 + " story");
               if(element == fields[fields.length - 1]){
                lasttexts.push(element)
               }
           }


        //    console.log(i)
  


          
       }
       
       );
       if(i==true){
        console.log("++")

        lasttexts.push(text1)
       }
   } else
   {
    lasttexts.push(text)
   }
   // context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
   console.log("end")
   console.log(lasttexts)
   
   //  context.fillStyle = '#fff'
   // context.font = 'bold 30pt Menlo'
   // context.fillText('flaviocopes.com', 600, 530)
   console.log(lasttext)
 
   lasttexts.forEach(element => {

    context.fillStyle = '#FFFFFF'
    if(lasttexts.length==1){
        context.fillText(element, 500, (350 + a*120))
    } else{
    context.fillText(element, 500, (300 + a*120))
    }
    a = a+1

   });


                  
   context.font = '40pt UN-Bindumathi'
   context.textAlign = 'center'
   context.textBaseline = 'top'
    
   context.fillStyle = '#000000'

   if(lasttexts.length==1){
    context.fillText(req2, 500, (445 + a*90))   
} else{
    context.fillText(req2, 500, (425 + a*90))   
}

   
       const buffer = canvas.toBuffer('image/png')
       fs.writeFileSync('./'+text+'.png', buffer)
   
   })
   
   
   // //Without image
   // context.font = '50pt Menlo'
   // context.textAlign = 'center'
   // context.textBaseline = 'top'
   // context.fillStyle = '#3574d4'
   
   // const text = 'මම් ස් ස ව්‍යාපාර ක්‍රමය වර්‍ෂ'
   
   // const textWidth = context.measureText(text).width
   // context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
   // context.fillStyle = '#fff'
   // context.fillText(text, 600, 170)
   
   //  context.fillStyle = '#fff'
   // context.font = 'bold 30pt Menlo'
   // context.fillText('flaviocopes.com', 600, 530)
   
   
   // const buffer = canvas.toBuffer('image/png')
   // fs.writeFileSync('./test.png', buffer)
   
   
    
   
 } 

exports.processimage = myData ;
