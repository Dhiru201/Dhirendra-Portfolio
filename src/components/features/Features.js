import React from 'react'
import Title from '../layouts/Title';
import Card from './Card';
import { cameraLogo } from '../../assets';
import { instaLogo } from '../../assets';
import { fbLogo } from '../../assets';
import { locationLogo } from '../../assets';

const Features = () => {
  return (
    <section 
      id="features"
      className="w-full border-b-[1px] border-b-black">
      <Title title="Features" des="What I do"/>
      <div className="grid grid-cols-3 gap-20">
        <Card 
          title="iOS Application Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          icon={instaLogo}
        />
        <Card 
          title="Web App development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          icon={fbLogo}
        />
        <Card 
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          icon={cameraLogo}
        />
        <Card 
          title="Mobile Responsive Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          icon={locationLogo}
        />
        <Card 
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          icon={instaLogo}
        />
        <Card 
          title="App development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. atque soluta hic consequntur enu repellendus ad."
          // icon={<locationLogo />}
          icon={locationLogo}
        />
      </div>
    </section>
  );
}

export default Features