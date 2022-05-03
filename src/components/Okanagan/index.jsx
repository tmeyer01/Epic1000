import React from "react";
import {
  OkanaganContainer,
  ControlContainer,
  SectionTitle,
  SectionDiscription,
  SectionWriteUp,
  SectionP

} from "./OkanaganElements"
import { FaBars, FaTimes } from "react-icons/fa";


function index( {toggleOk, isOkanaganSecOpen} ) {

  console.log("THIS IS IT", toggleOk)
  console.log("IS IT OPEN ", isOkanaganSecOpen)

  return (
    <>
      <OkanaganContainer>
        
        <ControlContainer onClick={toggleOk}>
        {isOkanaganSecOpen ? <FaTimes /> : <FaBars /> }  

        </ControlContainer>

        <SectionDiscription>
        <SectionTitle> Okanagan Section</SectionTitle>
          This section of the route covers the area from Brookmere, south of
          Merritt, to McCulloch Station, east of Kelowna.
        </SectionDiscription>
        <SectionWriteUp>
          {<SectionP>
            The Okanagan is best known for being an area of desert-like
            grasslands, ranches and orchards, surrounded by softened mountain
            peaks and hoodoos. Within the region, the route follows the Kette
            Valley Railway. The KVR is a former CN rail line that ran between
            Hope and Midway, BC. Out of the trails total 500 km length, about
            330 km of it is within the Okanagan's.
          </SectionP>}
          <SectionP>
            The rail trail corridor is owned by the Province of BCs Ministry of
            Forests, Lands and Natural Resource Operations (MFLNRO),
            administered by the Recreation Sites and Trails BC department, which
            oversees trails, recreational sites and campsites on crown lands and
            other provincial land assets. The trail was donated to the province
            by CN with the vision of creating a non-motorized cross-country rail
            trail experience, particularly for bicyclists.
          </SectionP>
          <SectionP>
            Trail conditions along the KVR are constantly changing and hard to
            predict - uncontrolled access to the trail by motorized vehicles in
            recent years has led to a major deterioration of the trail surface,
            and until a plan is implemented to solve this issue, trail users are
            encouraged to plan ahead for a challenging - but overall rewarding -
            journey.
          </SectionP>
          <SectionP>
            We highly recommend bicyclists to use sturdy equipment on the trail.
            Mountain bikes are best, and strongly recommended - a crossbike or
            hybrid will NOT be joy to ride on the BC Epic 1000. Front suspension
            isnt necessary, but it can increase comfort on bumpy washboard
            sections. Tire width should be 2 inches, and wider tires (though
            slower) will be helpful when encountering deep sand, loose gravel
            and numerous babyheads (rocks) embedded in the railbed. As a former
            railway, steep inclines are virtually non-existant but the surface
            makes up for this. Snow can stick to the trail near McCullough (just
            east of the Myra Canyon) into mid May on north-facing slopes.
            Welcome to the BC Epics 'Wild West'!
          </SectionP>
        </SectionWriteUp>
      </OkanaganContainer>
    </>
  );
}

export default index;
