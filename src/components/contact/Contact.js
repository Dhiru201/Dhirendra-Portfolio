import React,{useState} from 'react'
import Title from '../layouts/Title';

const Contact = () => {

  const handleSend = (e) => {
    const email = 'mailto:ddkv1989@gmail.com?subject=Intrested in your work';
    window.location.href = email;
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="What’s Next?" des="Interested? Lets Get In Touch!" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">              
              <div className="w-full flex flex-col lgl:flex-row gap-1.5">
                <p className="text-center">If you like my work or my experience, feel free to contact me.</p>
                <p className="text-center">I'm interested in ambitious and large projects.</p>
                <p className="text-center">However, if you have other requests or questions,</p>
                <p className="text-center">go ahead and ask me!</p>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSend}
                  className="w-1/3 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Say Hello!
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact