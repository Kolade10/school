import React from 'react'
import Image from 'next/image'
import Line from '../images/line.png'
import Getaway1 from '../images/getaway1.png'
import Getaway2 from '../images/getaway2.png'
import Getaway3 from '../images/getaway3.png'
export default function Getaway() {
  return (
    <main className='getaway'>
        <h1 className="head mt-20">
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
            </div>

            <div className="getaway-page-card-grid">
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
    </main>
  )
}
