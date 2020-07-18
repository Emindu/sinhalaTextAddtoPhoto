const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 468
const height = 468
function myData(req) { 
    canvas = createCanvas(width, height)
    context = canvas.getContext('2d')
   
   
   
   context.fillStyle = '#000'
   context.fillRect(0, 0, width, height)
   
   // Jimp.read('k.jpg')
   //   .then(image => {
   //     // Do stuff with the image.
   //      context.drawImage()
   
   //   })
   loadImage('./te.png').then(image => {
       context.drawImage(image, 0, 0, width , height )
   
   context.font = '35pt Menlo'
   context.textAlign = 'center'
   context.textBaseline = 'top'
   // context.fillStyle = '#3574d4'
   
   var text = req
   var text1 = ''
   var text2 = ''
   
   const textWidth = context.measureText(text).width
   if(width< textWidth){
       console.log("fsd")
       var fields  = text.split(" ")
       //console.log(fields)
       fields.forEach(element => {
           //console.log(element)
           if( context.measureText(text1).width < width-100 ){
               text1 = text1.concat(element)
               text1 = text1.concat(" ")
               
           } else {
               console.log(text1)
               context.fillStyle = '#fff'
               context.fillText(text1, 230, 200)
               text2 = text2.concat(element)
               text2 = text2.concat(" ")
               console.log(text2)
   
               
               
           }
          
       }
       );
   } else
   {
    context.fillStyle = '#fff'
    context.fillText(text, 230, 200)
   }
   // context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
   
   
   //  context.fillStyle = '#fff'
   // context.font = 'bold 30pt Menlo'
   // context.fillText('flaviocopes.com', 600, 530)
   context.fillStyle = '#fff'
               context.fillText(text2, 230, 250)
   
       const buffer = canvas.toBuffer('image/png')
       fs.writeFileSync('./test1.png', buffer)
   
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
