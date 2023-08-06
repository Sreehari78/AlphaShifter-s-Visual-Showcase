import React from "react";
import Album from "../components/Album";
import PhotographyUrl from "../../public/assets/images/Photography.png";
import VideographyUrl from "../../public/assets/images/Videography.png";
import GradingUrl from "../../public/assets/images/Grading.png";
import CompositingUrl from "../../public/assets/images/Composing.png";

const album = () => {
  return (
    <div className='mt-1 p-20'>
      <div className='flex justify-center align-middle flex-wrap gap-36'>
        <Album
          xAxixInitialValue='0%'
          yAxixInitialValue='-100%'
          xAxixFinalValue='0%'
          yAxixFinalValue='0%'
          imageUrl={PhotographyUrl}
          contentValue='Photography'
        />
        <Album
          xAxixInitialValue='100%'
          yAxixInitialValue='0%'
          xAxixFinalValue='0%'
          yAxixFinalValue='0%'
          imageUrl={VideographyUrl}
          contentValue='Videography'
        />
        <Album
          xAxixInitialValue='-100%'
          yAxixInitialValue='0%'
          xAxixFinalValue='0%'
          yAxixFinalValue='0%'
          imageUrl={GradingUrl}
          contentValue='Grading'
        />
        <Album
          xAxixInitialValue='0%'
          yAxixInitialValue='100%'
          xAxixFinalValue='0%'
          yAxixFinalValue='0%'
          imageUrl={CompositingUrl}
          contentValue='Compositing'
        />
      </div>
    </div>
  );
};

export default album;
