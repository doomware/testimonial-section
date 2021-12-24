import { Fragment } from "react";
import "../assets/styles/reviews.scss";

export default function ReviewsCard() {
  return (
    <Fragment>
      <div className="review-container">
        
        {/* ---------------------------------------------------- */}
        <div className="review-1 box">
          <div className="box-header">
            <img
              src="./images/image-daniel.jpg"
              alt="Avatar Daniel"
              className="avatar-review-1 avatar"
            />
            <div className="info-user">
              <p className="reviewer-name">Daniel Clifford</p>
              <p className="verificate-tag">Verified Graduate</p>
            </div>
          </div>

          <h1 className="review-title">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </h1>
          <p className="paragraph">
            “ I was an EMT for many years before I joined the bootcamp. I've
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>

        {/* ---------------------------------------------------- */}

        <div className="review-2 box">
          <div className="box-header">
            <img
              src="./images/image-jonathan.jpg"
              alt="Avatar Jonathan"
              className="avatar-review-2 avatar"
            />
            <div className="info-user">
              <p className="reviewer-name">Jonathan Walters</p>
              <p className="verificate-tag">Verified Graduate</p>
            </div>
          </div>
          <h1 className="review-title">
            The team was very supportive and kept me motivated
          </h1>
          <p className="paragraph">
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. ”
          </p>
        </div>

        {/* ---------------------------------------------------- */}

        <div className="review-3 box">
          <div className="box-header">
            <img
              src="./images/image-jeanette.jpg"
              alt="Avatar Jeanette"
              className="avatar-review3 avatar"
            />
            <div className="info-user">
              <p className="reviewer-name">Jeanette Harmon</p>
              <p className="verificate-tag">Verified Graduate</p>
            </div>
          </div>
          <h1 className="review-title">
            An overall wonderful <br/>and rewarding experience
          </h1>
          <p className="paragraph">
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>

        {/* ---------------------------------------------------- */}

        <div className="review-4 box">
          <div className="box-header">
            <img
              src="./images/image-patrick.jpg"
              alt="Avatar Patrick"
              className="avatar-review-4 avatar"
            />
            <div className="info-user">
              <p className="reviewer-name">Patrick Abrams</p>
              <p className="verificate-tag">Verified Graduate</p>
            </div>
          </div>
          <h1 className="review-title">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </h1>
          <p className="paragraph">
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>

        {/* ---------------------------------------------------- */}

        <div className="review-5 box">
          <div className="box-header">
            <img
              src="./images/image-kira.jpg"
              alt="Avatar Kira"
              className="avatar-review-5 avatar"
            />
            <div className="info-user">
              <p className="reviewer-name">Kira Whittle</p>
              <p className="verificate-tag">Verified Graduate</p>
            </div>
          </div>
          <h1 className="review-title">
            Such a life-changing experience. Highly recommended!
          </h1>
          <p className="paragraph">
            “ Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </Fragment>
  );
}
