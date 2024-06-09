import React from 'react';
import Typewriter from 'typewriter-effect';

export const TypewriterComponent = ({ className }) => {
  return (
    <div className={className}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Putu Adelio')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
        options={{
          loop: true // Mengatur efek animasi untuk diulang-ulang
        }}
      />
    </div>
  );
}