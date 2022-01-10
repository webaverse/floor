import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useCleanup, usePhysics} = metaversefile;

export default () => {  
  const physics = usePhysics();
  const streetSize = 1000;
  const streetHeight = 1000;
  const floorPhysicsId = physics.addBoxGeometry(
    new THREE.Vector3(0, -streetHeight, 0),
    new THREE.Quaternion(),
    new THREE.Vector3(streetSize * 0.5, streetHeight, streetSize * 0.5),
    false
  );
  
  useCleanup(() => {
    physics.removeGeometry(floorPhysicsId);
  });
}