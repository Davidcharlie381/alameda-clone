import Image from "next/image";
import image from "../../public/assets/image-asset.jpeg";

export const metadata = {
title: "About"
}

const About = () => {
  return (
    <main className="container grid md:grid-cols-2 gap-10 md:gap-16 pt-14 md:pt-20 pb-20">
      <div>
        <Image src={image} className="w-full h-[300px] md:h-[500px]" />
        <h2 className="text-[22px] md:text-[26px] font-medium font-roboto mt-5 md:mt-7">
          Made with love and tears in just two days
        </h2>
      </div>
      <div>
        <p className="text-base font-light leading-[29px] mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          aliquam id diam maecenas ultricies mi eget mauris. At auctor urna nunc
          id. Eu lobortis elementum nibh tellus molestie nunc non blandit. Dui
          sapien eget mi proin sed libero. Dolor sit amet consectetur adipiscing
          elit ut aliquam purus sit. Sed ullamcorper morbi tincidunt ornare
          massa eget. A condimentum vitae sapien pellentesque habitant. Cras
          tincidunt lobortis feugiat vivamus at augue. Habitant morbi tristique
          senectus et. Consectetur purus ut faucibus pulvinar elementum integer
          enim. Iaculis urna id volutpat lacus laoreet non curabitur. Tellus
          integer feugiat scelerisque varius morbi enim nunc faucibus. Velit sed
          ullamcorper morbi tincidunt ornare massa eget. Quis blandit turpis
          cursus in hac. Elementum facilisis leo vel fringilla. Tincidunt arcu
          non sodales neque sodales ut etiam sit. Vitae nunc sed velit dignissim
          sodales ut eu. Et malesuada fames ac turpis egestas integer.
        </p>
        <p className="text-base font-light leading-[29px]">
          Tortor dignissim convallis aenean et tortor at risus viverra. Vivamus
          at augue eget arcu. Rhoncus est pellentesque elit ullamcorper
          dignissim cras. Gravida dictum fusce ut placerat orci nulla
          pellentesque. Pellentesque elit ullamcorper dignissim cras tincidunt
          lobortis feugiat. Id aliquet risus feugiat in ante metus dictum.
          Sagittis vitae et leo duis ut. Diam vulputate ut pharetra sit amet
          aliquam id diam maecenas. Imperdiet nulla malesuada pellentesque elit
          eget. Maecenas pharetra convallis posuere morbi leo urna molestie at.
          Eros donec ac odio tempor orci dapibus ultrices. Et ultrices neque
          ornare aenean. Interdum velit laoreet id donec. Dolor sit amet
          consectetur adipiscing elit pellentesque. Eleifend donec pretium
          vulputate sapien nec sagittis. Facilisi etiam dignissim diam quis enim
          lobortis. Imperdiet dui accumsan sit amet. Non tellus orci ac auctor
          augue mauris augue neque gravida. Maecenas sed enim ut sem viverra
          aliquet. Mauris pharetra et ultrices neque ornare aenean.
        </p>
      </div>
    </main>
  );
};

export default About;
