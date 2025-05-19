function init(){ 
  let nyc_images = ["images/NYC1.jpg","images/NYC2.jpg","images/NYC3.jpg"];

  //Task 1: Create a gallery using the images in the avengers. Create a modal window that uses the avenger logo to open the gallery. Autoplay the gallery. Hint: If you use render() with no id, it returns the HTML of the gallery which can then be used as the content to the modal object.
  let gallery3 = new Gallery(nyc_images);
  gallery.render("gallery3");
  gallery3.play();
}