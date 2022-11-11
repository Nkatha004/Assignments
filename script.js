var index = 0;

showImage(index)

function side_slide(e){
    showImage(index +=e);
}

function showImage(e){
    var i;
    const img = document.querySelectorAll('img');
    if(e > img.length){
        index = 1;
    }
    if(e < 1){
        index = img.length
    }
    for(i = 0; i < img.length; i++){
        img[i].style.display='none';
    }

    img[index - 1].style.display='block';
}
// var images =[];

// var time = 3000;

// //image list
// images[0] = 'image0.jpg'
// images[1] = 'image1.jpg'
// images[2] = 'image2.jpg'
// images[3] = 'image3.jpg'
// images[4] = 'image4.jpg'

// function changeImage(){
//     document.slide.src = images[i]

//     if(i < images.length - 1){
//         i++;
//     }else{
//         i=0;
//     }

//     setTimeout("changeImage()", time);
// }

// window.onload = changeImage