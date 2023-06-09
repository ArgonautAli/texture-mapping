import React, { useRef, useState } from "react";
import {
  Engine,
  Scene,
  useBeforeRender,
  useClick,
  useHover,
} from "react-babylonjs";
import { Vector3, Color3 } from "@babylonjs/core";
import { useSelector } from "react-redux";

const DefaultScale = new Vector3(1.5, 1.5, 1.5);
const DefaultCuboidScale = new Vector3(1, 2, 3);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

const SpinningCapsule = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements

  const boxRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <capsule
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </capsule>
  );
};

const SpinningTorus = (props) => {
  const boxRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <torus
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </torus>
  );
};

const SpinningDisc = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements

  const boxRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 24 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <disc
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </disc>
  );
};

const SpinningSphere = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements

  const boxRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <sphere
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </sphere>
  );
};
// here
const SpinningBox = (props) => {
  // access Babylon scene objects with same React hook as regular DOM elements

  const boxRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </box>
  );
};

// cuboid

const SpinningCuboid = (props) => {
  const boxRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      var deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <box
      name={props.name}
      ref={boxRef}
      size={2}
      position={props.position}
      scaling={DefaultCuboidScale}
    >
      <standardMaterial
        name={`${props.name}-mat`}
        // diffuseColor={hovered ? props.hoveredColor : props.color}
        // specularColor={Color3.Black()}
      >
        {console.log("{props.tex}", props)}
        <texture url={props.tex} />
      </standardMaterial>
    </box>
  );
};

export function SceneWithSpinningBoxes({ tex }) {
  const shapeData = useSelector((state) => state.shape.value.shapeVal);
  console.log("shapeData", shapeData);
  return (
    <>
      <div>
        {console.log("texx", tex)}
        <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
          <Scene>
            <arcRotateCamera
              name="camera1"
              target={Vector3.Zero()}
              alpha={Math.PI / 2}
              beta={Math.PI / 4}
              radius={8}
            />
            <hemisphericLight
              name="light1"
              intensity={4}
              direction={Vector3.Up()}
            />
            {shapeData === "Cube" && (
              <SpinningBox
                name="left"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#EEB5EB")}
                hoveredColor={Color3.FromHexString("#C26DBC")}
                tex={tex}
              />
            )}

            {shapeData === "Cuboid" && (
              <SpinningCuboid
                name="left"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#EEB5EB")}
                hoveredColor={Color3.FromHexString("#C26DBC")}
                tex={tex}
              />
            )}
            {shapeData === "Sphere" && (
              <SpinningSphere
                name="right"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#C8F4F9")}
                hoveredColor={Color3.FromHexString("#3CACAE")}
                tex={tex}
              />
            )}
            {shapeData === "Disc" && (
              <SpinningDisc
                name="right"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#C8F4F9")}
                hoveredColor={Color3.FromHexString("#3CACAE")}
                tex={tex}
              />
            )}
            {shapeData === "Torus" && (
              <SpinningTorus
                name="right"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#C8F4F9")}
                hoveredColor={Color3.FromHexString("#3CACAE")}
                tex={tex}
              />
            )}
            {shapeData === "Capsule" && (
              <SpinningCapsule
                name="right"
                position={new Vector3(0, 0, 0)}
                color={Color3.FromHexString("#C8F4F9")}
                hoveredColor={Color3.FromHexString("#3CACAE")}
                tex={tex}
              />
            )}
          </Scene>
        </Engine>
      </div>
    </>
  );
}
