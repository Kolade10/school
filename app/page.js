"use client";
import Image from "next/image"
import Link from "next/link";
import Line from './images/line.png'
import Cabin1 from './images/cabin1.png'
import Cabin2 from './images/cabin2.png'
import Cabin3 from './images/cabin3.png'
import Getaway1 from './images/getaway1.png'
import Getaway2 from './images/getaway2.png'
import Getaway3 from './images/getaway3.png'
import Stars from './images/stars.png'
import Man from './images/man.png'

export default function Home() {
  return (
    <main>
      <div className="hero">
        <h1 className="hero-head">
        Leave the office behind and <span className="text-[#F5B963]">unwind</span>
        </h1>
        <p className="hero-body">
        Welcome to our cozy cabin nestled in the heart of the mountains! Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.
        </p>
      </div>
      <div className="inputs">
        <input className="input-box-long" type="text" placeholder="I want to go"/>
        <input className="input-box" type="text" placeholder="Check-In"/>
        <input className="input-box" type="text" placeholder="Check-Out"/>
        <input className="input-box" type="text" placeholder="Travelers"/>
        <button className="find-butt"> FIND A PLACE</button>
      </div>
      <div className="cabins">
        <h1 className="head">
        Discover our idyllic countryside cabins
        <Image
        src={Line}
        alt="line"
        width={145}
        className="mt-2"
        />
        </h1>
        <div className="body-grid">
          <p className="body-text">
          Fully equipped kitchen and bathroom with plenty of walking and cycling routes to explore.
          </p>
          <Link href='/cabin'>
            <p className="body-link">
              View all cabins
            </p>
          </Link>
        </div>
        <div className="card-grid">
          <div className="card">
            <Image
            src={Cabin1}
            alt="cabin"
            width={339}
            />
            <div className="card-body">
            <p className="location">
            Hampshire · England
            </p>
            <h3 className="card-head">
              <p className="head-content">
              Rustic country retreat
              </p>
              <p className="head-content">
              £210pp
              </p>
            </h3>
            <p className="card-body-text">
            Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.
            </p>
            <div className="review-grid">
              <p className="reviews">
                4 stars
              </p>
              <p className="reviews">
                82 reviews
              </p>
            </div>
            </div>
          </div>
          <div className="card">
            <Image
            src={Cabin2}
            alt="cabin"
            width={339}
            />
            <div className="card-body">
            <p className="location">
            Hampshire · England
            </p>
            <h3 className="card-head">
              <p className="head-content">
              Cozy getaway cabin
              </p>
              <p className="head-content">
              £210pp
              </p>
            </h3>
            <p className="card-body-text">
            Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.
            </p>
            <div className="review-grid">
              <p className="reviews">
                5 stars
              </p>
              <p className="reviews">
                82 reviews
              </p>
            </div>
            </div>
          </div>
          <div className="card">
            <Image
            src={Cabin3}
            alt="cabin"
            width={339}
            />
            <div className="card-body">
            <p className="location">
            Hampshire · England
            </p>
            <h3 className="card-head">
              <p className="head-content">
              Rustic country retreat
              </p>
              <p className="head-content">
              £210pp
              </p>
            </h3>
            <p className="card-body-text">
            Step outside and take in the stunning views. Our cabin sits on a quiet and secluded property, providing the perfect setting for a peaceful retreat.
            </p>
            <div className="review-grid">
              <p className="reviews">
                4 stars
              </p>
              <p className="reviews">
                82 reviews
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="getaway-section">
      <div className="getaway">
        <h1 className="head">
          Inspiration for your next getaway 
          <Image
          src={Line}
          alt="line"
          width={145}
          className="mt-2"
          />
          </h1>
          <div className="body-grid">
            <p className="body-text">
            We’ve curated some amazing experiences to help you find your next getaway.
            </p>
            <Link href='/getaway'>
            <p className="body-link">
              View all experiences
            </p>
            </Link>
          </div>
        </div>
        <div className="getaway-card-grid">
            <div className="getaway-card">
              <Image
              src={Getaway1}
              alt="getaway"
              width={339}
              height={284}
              />
              <div className="card-body">
                <p className="location">
                For those who love
                </p>
                <h3 className="card-head">
                  <p className="head-content">
                  To Explore nature
                  </p>
                </h3>
                <p className="card-body-text">
                Discover some of the most beautiful scenery – from the wonders of Snowdonia to the famous beauty of the Scottish Highlands.
                </p>
              
              </div>
            </div>
            <div className="getaway-card">
              <Image
              src={Getaway2}
              alt="getaway"
              width={339}
              height={284}
              />
              <div className="card-body">
                <p className="location">
                For those who want
                </p>
                <h3 className="card-head">
                  <p className="head-content">
                  To Relax, rest & re-set
                  </p>
                </h3>
                <p className="card-body-text">
                Experience mind and body connection through breathing exercises and relaxation with our Yoga inspired get away for you and the family. 
                </p>
              
              </div>
            </div>
            <div className="getaway-card">
              <Image
              src={Getaway3}
              alt="getaway"
              width={339}
              height={284}
              />
              <div className="card-body">
                <p className="location">
                For those who have
                </p>
                <h3 className="card-head">
                  <p className="head-content">
                  Four-legged friends
                  </p>
                </h3>
                <p className="card-body-text">
                When going on holiday nobody wants to put their dog in a kennel. So, lets keep the family together with our pet friendly cabins.
                </p>
              
              </div>
            </div>
        </div>
      </div>
      <div className="experience">
        <div className="float-right">
        <h1 className="experience-head">
        A truly wonderful experience
        </h1>
        <p className="experience-body">
        Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their tech for a few days. I could have stayed another week! <br/> <br/> They really have thought about everything here down to the finest details.
        </p>
        <div className="star-grid">
          <Image
          src={Stars}
          alt="stars"
          width={109.5}
          className="stars"
          />
          <p className="date">
          01 Jan 2023
          </p>
        </div>
        </div>
      </div>
      <div className="unwind">
        <div className="unwind-text">
        <h1 className="unwind-head">
        Get ready to unwind
        <Image
        src={Line}
        alt="line"
        width={120}
        className="mt-2 mb-9"
        />
        </h1>
        <p className="unwind-body-text">
        A cabin getaway can be a wonderful way to relax and reconnect with nature. Many cabin rentals are located in beautiful, secluded areas, surrounded by trees and other natural beauty. <br/> <br/>A cabin getaway can be a wonderful way to escape the hustle and bustle of daily life and reconnect with nature.
          </p>
        </div>
        <Image
        src={Man}
        width={615}
        alt=""
        />
      </div>
      <div className="available-section">
        <div className="available">
        <h1 className="available-head">
        Nourish the mind, body, and spirit.
        </h1>
        <p className="available-body">
        Many people find that the combination of being in a peaceful natural setting and engaging in activities that nourish the mind, body, and spirit leave them feeling rejuvenated and refreshed.
        </p>
        <button className="avail-butt">
          Find Available Cabins
        </button>
        </div>
      </div>
      <div className="escape">
      <h1 className="available-head">
        Escape from endless Zoom calls
        </h1>
        <p className="available-body">
        Discover the wonders of spending time offline and away from the office with our 3 day weekend getaway cabin retreats.
        </p>
        <button className="escape-butt">
          Find Available Cabins
        </button>
      </div>
      </main>
  )
}
