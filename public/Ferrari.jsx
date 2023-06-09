/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ferrari.glb --transform
Author: ᗩᒪE᙭. Kᗩ.🚗 (https://sketchfab.com/Alex.Ka.)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/ferrari-550-barchetta-2000-azzurro-hyperion-202a1164d837454ca2e829a9c0e6935f
Title: Ferrari 550 Barchetta 2000 Azzurro Hyperion
*/

import { useLayoutEffect, useRef } from "react"
import { useGLTF, useScroll } from "@react-three/drei"
import gsap from "gsap"
import { useFrame } from "@react-three/fiber"

export function Model(props) {
  const { nodes, materials } = useGLTF("/ferrari-transformed.glb")
  const { animationRotate } = props

  const carRef = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state, delta) => {
    if (!animationRotate) {
      tl.current.seek(scroll.offset * tl.current.duration())
    } else {
      carRef.current.rotation.y += delta / 3
    }
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 2, ease: "power1.inOut" } })
    if (!animationRotate) {
      tl.current
        .to(carRef.current.rotation, { y: -1 }, 1)
        .to(carRef.current.position, { x: 1 }, 1)
        .to(carRef.current.position, { z: 2 }, 1)

        .to(carRef.current.rotation, { y: -1.5 }, 4)
        .to(carRef.current.position, { x: 2.5 }, 4)
        .to(carRef.current.position, { z: 0 }, 4)

        .to(carRef.current.rotation, { y: -1.5 }, 6)
        .to(carRef.current.position, { x: -1.5 }, 6)
        .to(carRef.current.position, { z: 1 }, 6)

        .to(carRef.current.rotation, { y: 1 }, 9)
        .to(carRef.current.position, { x: -2.5 }, 9)
        .to(carRef.current.position, { z: 1 }, 9)

        .to(carRef.current.rotation, { y: 1.5 }, 12)
        .to(carRef.current.rotation, { x: 0.35 }, 12)
        .to(carRef.current.position, { x: 1 }, 12)

        .to(carRef.current.position, { x: -0.8 }, 16)
        .to(carRef.current.rotation, { z: -0.1 }, 16)

        .to(carRef.current.rotation, { z: 0 }, 20)
        .to(carRef.current.rotation, { y: 0 }, 20)
        .to(carRef.current.rotation, { x: 0.5 }, 20)
        .to(carRef.current.position, { x: 0 }, 20)
    } else {
      tl.current
        .to(carRef.current.rotation, { x: 0.3, y: 1.15, z: 0 }, 0)
        .to(carRef.current.position, { x: 0, y: -0.25, z: 0 }, 0)
    }
  }, [])

  return (
    <group {...props} dispose={null} ref={carRef}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["550bachetta"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PLdiffuser}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PLhood}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.PLskirt}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.PLsplitter}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.blackaluminium}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.blackchrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.blackmatte}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.blackplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.boltschrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.boltsplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.bottom}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.brakedisk}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.brakelghtOFF}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.centrbrakelight}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.chrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.designo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.detailschrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.detailsplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.exhausthole}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_28.geometry}
        material={materials.ferrarisupportlogo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.floor}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.floormat}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.foglight}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.foglightglass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_33.geometry}
        material={materials.frontbumpvent}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.fuelcap}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.grillrearexh}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_36.geometry}
        material={materials.grillside}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials.headlight1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.headlight2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_39.geometry}
        material={materials.headlightglass}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_40.geometry}
        material={materials.headlightplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.hoodemblem}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_43.geometry}
        material={materials.hoodgrill}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.horse}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.interior}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.interiorchrome}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.interiorplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.mirrorint}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.plateFRONT}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_52.geometry}
        material={materials.plateREAR}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_53.geometry}
        material={materials.plateblackplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.platecarname}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_55.geometry}
        material={materials.plateitalylogo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_57.geometry}
        material={materials.radiator}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.rim1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.rimbolts1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.rimlogo}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_63.geometry}
        material={materials.safecage}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials.seatbelt}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_65.geometry}
        material={materials.sidehorseemblem}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.sideturnsignals}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_67.geometry}
        material={materials.sidewindowHORSE}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_68.geometry}
        material={materials.splitergril}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_69.geometry}
        material={materials.steeringwheel}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_70.geometry}
        material={materials.support1}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_71.geometry}
        material={materials.support2}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_72.geometry}
        material={materials.tire}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_73.geometry}
        material={materials.tireprotector}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_75.geometry}
        material={materials.underHOODplastic}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_76.geometry}
        material={materials.wheelblack}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_77.geometry}
        material={materials.windowF}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
      <mesh
        geometry={nodes.Object_78.geometry}
        material={materials.windowFinside}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
    </group>
  )
}

useGLTF.preload("/ferrari-transformed.glb")
