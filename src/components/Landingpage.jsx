import React from 'react';
import Navbar from './Navbar'
import Image from './chats-image'


import Store from './Store'

function Landingpage() {
  return (
    <React.Fragment>
      <Navbar/>
      <div>
        <main className="py-0 flex items-center m-36 py-4">
          <section className="content-center flex-1">
            <article>
              <h1 className="text-5xl font-bold ">Chat with yours friends all over the world</h1>
              <p className="text-xl pt-5 pb-4">deEagle is the safe and secure messaging app that you need, including voice and video calls.</p>
            </article>
            
            <div className="flex">
              <a href="https://apps.apple.com"><Store filePath="/images/app-store-badge.png" alt="app store"></Store>
              </a>

              <a href="https://play.google.com">
                <Store filePath="/images/Google-Play-Store-Logo.jpeg" alt="play store"/>
              </a>
            </div>
          </section>  

          <article>
            <Image/>
          </article>
        </main>

        <div className="w-full bg-blue-500 h-96">
          <div className="flex flex-col pl-60 pr-60 m-4 pt-12">
            <div className="align-center text-4xl text-white">
              <h1 className="pl-36">Why should I download DeEagle App?</h1>
            </div>

            <div className="flex h-52">
              <div className="flex-1 bg-gray-50 m-4 rounded-md">
                <div className="m-3 ">
                  <h1 className="text-xl font-bold">Safe and Secure</h1>
                  <p>Build on the best encryption technologies out there.</p>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 m-4 rounded-md">
                <div className="m-3">
                  <h1 className="text-xl font-bold">Fast and reliable calling</h1>
                  <p>One to one conversations with voice and video.</p>
                </div>
              </div>

              <div className="flex-1 bg-gray-50 m-4 rounded-md">
                <div className="m-3 ">
                  <h1 className="text-xl font-bold">Send Files and Videos</h1>
                  <p>Share more than just text. From pictures to files. It’s all possible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 h-96">
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default Landingpage;
