import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF,useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { setRotate, setY, setlastX,setSpeed } from "../redux/slices/space";
import { useSelector, useDispatch } from "react-redux";

export function Galaxy(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/galaxy.glb");
    const { actions } = useAnimations(animations, group);
    return (
      <a.group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="sketchfabtimeframe">
              <group name="Object_2" scale={0}>
                <points
                  name="Object_3"
                  geometry={nodes.Object_3.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_4" scale={0}>
                <points
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_6" scale={0}>
                <points
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_8" scale={0}>
                <points
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_10" scale={0}>
                <points
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_12" scale={0}>
                <points
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_14" scale={0}>
                <points
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_16" scale={0}>
                <points
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_18" scale={0}>
                <points
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_20" scale={0}>
                <points
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_22" scale={0}>
                <points
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_24" scale={0}>
                <points
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_26" scale={0}>
                <points
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_28" scale={0}>
                <points
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_30" scale={0}>
                <points
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_32" scale={0}>
                <points
                  name="Object_33"
                  geometry={nodes.Object_33.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_34" scale={0}>
                <points
                  name="Object_35"
                  geometry={nodes.Object_35.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_36" scale={0}>
                <points
                  name="Object_37"
                  geometry={nodes.Object_37.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_38" scale={0}>
                <points
                  name="Object_39"
                  geometry={nodes.Object_39.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_40" scale={0}>
                <points
                  name="Object_41"
                  geometry={nodes.Object_41.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_42" scale={0}>
                <points
                  name="Object_43"
                  geometry={nodes.Object_43.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_44" scale={0}>
                <points
                  name="Object_45"
                  geometry={nodes.Object_45.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_46" scale={0}>
                <points
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_48" scale={0}>
                <points
                  name="Object_49"
                  geometry={nodes.Object_49.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_50" scale={0}>
                <points
                  name="Object_51"
                  geometry={nodes.Object_51.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_52" scale={0}>
                <points
                  name="Object_53"
                  geometry={nodes.Object_53.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_54" scale={0}>
                <points
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_56" scale={0}>
                <points
                  name="Object_57"
                  geometry={nodes.Object_57.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_58" scale={0}>
                <points
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_60" scale={0}>
                <points
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_62" scale={0}>
                <points
                  name="Object_63"
                  geometry={nodes.Object_63.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_64" scale={0}>
                <points
                  name="Object_65"
                  geometry={nodes.Object_65.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_66" scale={0}>
                <points
                  name="Object_67"
                  geometry={nodes.Object_67.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_68" scale={0}>
                <points
                  name="Object_69"
                  geometry={nodes.Object_69.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_70" scale={0}>
                <points
                  name="Object_71"
                  geometry={nodes.Object_71.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_72" scale={0}>
                <points
                  name="Object_73"
                  geometry={nodes.Object_73.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_74" scale={0}>
                <points
                  name="Object_75"
                  geometry={nodes.Object_75.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_76" scale={0}>
                <points
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_78" scale={0}>
                <points
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_80" scale={0}>
                <points
                  name="Object_81"
                  geometry={nodes.Object_81.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_82" scale={0}>
                <points
                  name="Object_83"
                  geometry={nodes.Object_83.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_84" scale={0}>
                <points
                  name="Object_85"
                  geometry={nodes.Object_85.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_86" scale={0}>
                <points
                  name="Object_87"
                  geometry={nodes.Object_87.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_88" scale={0}>
                <points
                  name="Object_89"
                  geometry={nodes.Object_89.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_90" scale={0}>
                <points
                  name="Object_91"
                  geometry={nodes.Object_91.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_92" scale={0}>
                <points
                  name="Object_93"
                  geometry={nodes.Object_93.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_94" scale={0}>
                <points
                  name="Object_95"
                  geometry={nodes.Object_95.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_96" scale={0}>
                <points
                  name="Object_97"
                  geometry={nodes.Object_97.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_98" scale={0}>
                <points
                  name="Object_99"
                  geometry={nodes.Object_99.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_100" scale={0}>
                <points
                  name="Object_101"
                  geometry={nodes.Object_101.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_102" scale={0}>
                <points
                  name="Object_103"
                  geometry={nodes.Object_103.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_104" scale={0}>
                <points
                  name="Object_105"
                  geometry={nodes.Object_105.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_106" scale={0}>
                <points
                  name="Object_107"
                  geometry={nodes.Object_107.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_108" scale={0}>
                <points
                  name="Object_109"
                  geometry={nodes.Object_109.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_110" scale={0}>
                <points
                  name="Object_111"
                  geometry={nodes.Object_111.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_112" scale={0}>
                <points
                  name="Object_113"
                  geometry={nodes.Object_113.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_114" scale={0}>
                <points
                  name="Object_115"
                  geometry={nodes.Object_115.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_116" scale={0}>
                <points
                  name="Object_117"
                  geometry={nodes.Object_117.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_118" scale={0}>
                <points
                  name="Object_119"
                  geometry={nodes.Object_119.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
              <group name="Object_120">
                <points
                  name="Object_121"
                  geometry={nodes.Object_121.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
            </group>
          </group>
        </group>
      </a.group>
    );
  }