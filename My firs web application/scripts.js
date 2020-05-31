console.log("We are online");


let currentPhoto = 0


let photoData1 = {
    photo: 'img/h20180001.jpg',
    title: 'My title',
    description: 'What happend here, why is this a very nice image',
    index: 'p1'
};

let photoData2 = {
    photo: 'img/h20180002.jpg',
    title: 'Ez a cím',
    description: 'Description of the second photo',
    index: 'p2'
    

};

let photoData3 = {
    photo: 'img/h20180003.jpg',
    title: 'Ez a cím',
    description: 'Description of the second photo',
    index: 'p3'
    
};

let photoData4 = {
    photo: 'img/h20180004.jpg',
    title: 'Ez a cím',
    description: 'Description of the second photo'
};

let photoData5 = {
    photo: 'img/h20180005.jpg',
    title: 'Ez a cím',
    description: 'Description of the second photo'
};

let imagesData = [photoData1, photoData2, photoData3, photoData4, photoData5];


function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);

}

// Load main photo
loadPhoto(currentPhoto);


// click handlers
$("#r-arrow").click(() => {
    if (currentPhoto < 4) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }
})

$("#l-arrow").click(() => {
    if (currentPhoto >= 1) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    }
})

$("#p2").click(() => {
    loadPhoto(1);

})


// Make thumbnails thumbnails and give them unique ID-s 
 imagesData.forEach( function ({photo,index}) {
     $('footer').append('<img src='+photo+' id='+index+'>')
     console.log(index)
 })