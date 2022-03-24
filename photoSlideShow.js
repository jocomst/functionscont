// PHOTOSLIDESHOW ACTIVITY

const photoSlideShow = {
  photoList: [],
  currentPhotoIndex: 0,
  nextPhoto() {
    if (this.currentPhotoIndex !== this.photoList.length - 1) {
      this.currentPhotoIndex++;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else console.log("End of slideshow");
  },
  prevPhoto() {
    if (this.currentPhotoIndex !== 0) {
      this.currentPhotoIndex--;
      console.log(this.photoList[this.currentPhotoIndex]);
    } else console.log("End of slideshow");
  },
  getCurrentPhoto() {
    return this.photoList[this.currentPhotoIndex];
  },
};

photoSlideShow.photoList.push("Pic 1", "pic2", "pic3", "pic4");
photoSlideShow.nextPhoto();
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
