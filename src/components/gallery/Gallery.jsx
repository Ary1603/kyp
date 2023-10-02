import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const breakpoints = [384, 256, 128, 96, 64, 48];

// const unsplashLink = (id, width, height) =>
//   `https://source.unsplash.com/${id}/${width}x${height}`;

// const unsplashPhotos = [
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fgold_demo%2Fimg%2Fgold_image2.jpg?alt=media&token=5ed8924f-3825-4138-808e-14b26e35cc1f",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fbronze_demo%2Fimg%2Fimage4.jpg?alt=media&token=7a798d4a-ed01-4a6c-9aba-82fe9f3369d3",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fgold_demo%2Fimg%2Fgold_image2.jpg?alt=media&token=5ed8924f-3825-4138-808e-14b26e35cc1f",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fbronze_demo%2Fimg%2Fimage4.jpg?alt=media&token=7a798d4a-ed01-4a6c-9aba-82fe9f3369d3",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fgold_demo%2Fimg%2Fgold_image2.jpg?alt=media&token=5ed8924f-3825-4138-808e-14b26e35cc1f",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fbronze_demo%2Fimg%2Fimage4.jpg?alt=media&token=7a798d4a-ed01-4a6c-9aba-82fe9f3369d3",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fgold_demo%2Fimg%2Fgold_image2.jpg?alt=media&token=5ed8924f-3825-4138-808e-14b26e35cc1f",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fbronze_demo%2Fimg%2Fimage4.jpg?alt=media&token=7a798d4a-ed01-4a6c-9aba-82fe9f3369d3",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fgold_demo%2Fimg%2Fgold_image2.jpg?alt=media&token=5ed8924f-3825-4138-808e-14b26e35cc1f",
//     height: 200,
//     width: 300,
//   },
//   {
//     src: "https://firebasestorage.googleapis.com/v0/b/invitaciones-bc51e.appspot.com/o/invitaciones%2Fbronze_demo%2Fimg%2Fimage4.jpg?alt=media&token=7a798d4a-ed01-4a6c-9aba-82fe9f3369d3",
//     height: 200,
//     width: 300,
//   },

//   // { id: "8gVv6nxq6gY", width: 1080, height: 800 },
//   // { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
//   // { id: "RkBTPqPEGDo", width: 1080, height: 720 },
//   // { id: "Yizrl9N_eDA", width: 1080, height: 721 },
//   // { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
//   // { id: "Jztmx9yqjBw", width: 1080, height: 607 },
//   // { id: "-heLWtuAN3c", width: 1080, height: 608 },
//   // { id: "xOigCUcFdA8", width: 1080, height: 720 },
//   // { id: "1azAjl8FTnU", width: 1080, height: 1549 },
//   // { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
//   // { id: "twukN12EN7c", width: 1080, height: 694 },
//   // { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
//   // { id: "sEXGgun3ZiE", width: 1080, height: 720 },
//   // { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
//   // { id: "q-motCAvPBM", width: 1080, height: 1620 },
//   // { id: "Xn4L310ztMU", width: 1080, height: 810 },
//   // { id: "iMchCC-3_fE", width: 1080, height: 610 },
//   // { id: "X48pUOPKf7A", width: 1080, height: 160 },
//   // { id: "GbLS6YVXj0U", width: 1080, height: 810 },
//   // { id: "9CRd1J1rEOM", width: 1080, height: 720 },
//   // { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },

//   //unsplashLink(photo.id, width, height)
// ];


function Gallery({class_Id, gallery}) {
  let {gallery_title, gallery_phrase, gallery_images} = gallery
  const [index, setIndex] = useState(-1);

  const photos = gallery_images.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
  
    return {
      src: photo.src,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.src,
          width: breakpoint,
          height,
        };
      }),
    };
  });
  
  console.log(gallery_images)
  return (
    <>
    <h2 className={`gallery-title gallery-title-${class_Id}`}>NUESTROS MEJORES MOMENTOS</h2>
    <p className={`gallery-phrase gallery-phrase-${class_Id}`}>{gallery_phrase}</p>
      <div className={`photo-album-container photo-album-container-${class_Id}`}>
        
        <PhotoAlbum
          photos={photos}
          layout={window.innerWidth < 700 ? 'rows' : 'columns'}
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
      </div>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}

export default Gallery;
