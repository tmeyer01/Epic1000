import React from "react";

import { 
  AboutContainer,
  AboutImageContainer,
  ImageH1,
  DisclaimerDiv,
  DisclaimerP,
  AboutWriteUp,
  AboutP,
} from './AboutElements'

function InfoSection() {
  return (
    <>
      <AboutContainer>
        <AboutImageContainer>
          <ImageH1>About</ImageH1>
        </AboutImageContainer>

        <DisclaimerDiv>
          <DisclaimerP>
            This is not an official Race / Ride / Event in any capacity! It is an informal ride done along the same route made up of public trails and roads by a few of us every year that you are welcome to join entirely at your own risk as if you were riding it on your own.
            
            Those of who are riding this and arra
            RIDE THIS AND ARRANGE THE DEPART DOES NOT ASSUME ANY RESPONSIBILITY
            IN ANY WAY FOR ANY RIDER WHO CHOOSES TO RIDE THE ROUTE AT ANY TIME.
            ENSURING YOUR OWN WELL BEING, MAKING SURE YOU ARE WELL PREPARED AND
            AWARENESS OF THE INHERENT RISKS OF THIS UNDERTAKING (INCLUDING
            INJURY AND DEATH) IS ENTIRELY YOUR OWN RESPONSIBILITY.
          </DisclaimerP>
        </DisclaimerDiv>
        <AboutWriteUp>
          <AboutP>
            The BC Epic 100 is a offroad, unofficial, completely self-supported
            bikepacking group ride in the spirit the underground 'Tour divide'
            style and under the same rules. No registration, no support, no
            insurance, no prizes - those who choose to simply meet up for an
            informal group ride along a plotted route on public trails open to
            all at a suggest a time.. You show up and ride at your own risk. The
            BC Epic is a 1000km (1066 to be exact), 11 600m elevation traverse
            across South Central BC starting in Merritt and ending in Fernie (or
            vice versa if you choose) mostly along the Trans Canada Trail. The
            route is about 80% off road on mostly old decommissioned railgrades
            (Kettle Valley Railroad from Brookmere to Midway, Columbia Western
            from Midway to Castlegar and Great Northern from Salmo to Nelson),
            with a few sections of challenging singletrack and the rest mostly
            rough gravel forest service road and about 100km paved. It is
            spectacular ride crossing through a great diversity of terrian and
            ecosystems with remarkable scenery, trestles hundereds of feet high
            and multiple tunnels (longest almost a kilometre!) along the bed of
            some of the most expensive railway ever laid through the mountains.
            There are plenty of camping, re-supply points and services along the
            route. Take on the challenge and ride the Epic!
          </AboutP>
          <AboutP>
            Please take note - don't let the railgrades decieve you - this is
            tough route! In the ingaugural run only 7 of 15 starters finished.
            The railgrade is often very rough with loose gravel, washouts and
            washboard and often hard work to ride. A crossbike is not suited for
            this surface. Although it had been completed with a trailer it is
            not recommended and the singletrack section between Castelgar and
            Trail is not doable with a trailer (it was bypassed by the rider who
            completed the route with the trailer).
          </AboutP>
          ​
        </AboutWriteUp>
      </AboutContainer>
    </>
  );
}

export default InfoSection;