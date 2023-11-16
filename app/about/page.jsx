import Image from "next/image"
import Team1 from '../images/team1.png'
import Team2 from '../images/team2.png'
import Team3 from '../images/team3.png'
import Team4 from '../images/team4.png'
import Team5 from '../images/team5.png'
import Team6 from '../images/team6.png'
import Journey from '../images/journey.png'

export default function About(){
  return (
    <main className="about">
      <div className="about-us">
        <div className="about-subhead">
          About Us
        </div>
        <div className="about-head">
          We provide Cabins and Getaways
        </div>
        <div className="about-body">
        Our mission is to ensure teams can deliver the best cabins and getaways, no matter their size or budget. We focus on the details of everything we do.
        </div>
      </div>
      <div className="meet">
        <div className="about-head">
         Meet our team
        </div>
        <div className="about-body">
        Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </div>
        <div className="team-butt-grid">
          <button className="read">
            Read our principles
          </button>
          <button className="started">
            We are Hiring!
          </button>
        </div>
        <div className="team-grid">
          <Image
          src={Team1}
          alt="team"
          width={320}
          className="rounded"
          />
          <Image
          src={Team2}
          alt="team"
          width={320}
          className="rounded"
          />
          <Image
          src={Team3}
          alt="team"
          width={320}
          className="rounded"
          />
          <Image
          src={Team4}
          alt="team"
          width={320}
          className="rounded"
          />
          <Image
          src={Team5}
          alt="team"
          width={320}
          className="rounded"
          />
          <Image
          src={Team6}
          alt="team"
          width={320}
          className="rounded"
          />
        </div>
      </div>
      <div className="journey">
        <div className="about-head">
        We’re only just getting started on our journey
        </div>
        <div className="about-body">
        Everything you need to build modern UI and great products.
        </div>
        <Image
          src={Journey}
          alt="journey"
          width={1280}
          className="rounded m-auto mt-10"
        />
      </div>
      <div className="hire">
        <div className="about-head">
        We’re hiring!
        </div>
        <div className="about-body">
        Our team is growing fast and we’re always looking for smart people.
        </div>
        <div className="hire-grid">
          <button className="learn">
            Learn More
          </button>
          <button className="started">
            Get Started
          </button>
        </div>
      </div>
    </main>
  )
}
