"use client"

import AnimationContainer from '@/components/utils/AnimationContainer';
import SectionContainer from '@/components/utils/SectionContainer';
import TitleSectionPageContainer from '@/components/utils/TitleSectionPageContainer';
import { Card, Col, Text } from "@nextui-org/react";

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>
      <TitleSectionPageContainer title="Frames" />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
        <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077529/m%3D900/v2?sig=261fe53ee3867ae176106054fd45f3477902528d4d61e7157795be6fcdf5da2e'      objectFit="cover"
      width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077530/m%3D900/v2?sig=89fc76f61d834c5c1c14964757d9ffc063ab332d21d74eddf0cb468f0e7d7200'   objectFit="cover"    
width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077533/m%3D900/v2?sig=e29b1c5f028c6e72918a3de86418423f1a6c4071b2004141f2b9cb35ffa5946a'    objectFit="cover"
   width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077536/m%3D900/v2?sig=25152acdfb697b274f0f60eefb0143a742801a81fa4c5ee7480efb1e2f3cee09'     objectFit="cover"
      width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077537/m%3D900/v2?sig=7a00ac19d21adf1d4bc910c78a491da032e7f6ed6bbc4f9ec21d2bf85c14ac82'     objectFit="cover"
      width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
        src='https://drscdn.500px.org/photo/1071077540/m%3D900/v2?sig=aca236ecdcf24a7584f5aad1dcc91102de3d6ea733c376abbb84494c6c2c110d'
        objectFit="cover"
      width="100%"
      height={340}
      alt=""
    />
  </Card>
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
    </Card.Header>
    <Card.Image
src='https://drscdn.500px.org/photo/1071077541/m%3D900/v2?sig=fe13d968f449640fa244dcb5834519df695c5e6ffa3807f45c64f9e77b4e5423'     objectFit="cover"
      width="100%"
      height={340}
      alt=""
    />
  </Card>
         

        </AnimationContainer>


      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;