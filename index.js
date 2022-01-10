import * as THREE from 'three';
import metaversefile from 'metaversefile';
const {useApp, useCleanup, usePhysics} = metaversefile;

export default e => {
  const app = useApp();
  const physics = usePhysics();
  
  const streetSize = 1000;
  const streetHeight = 1000;
  const floorPhysicsId = physics.addBoxGeometry(
    new THREE.Vector3(0, -streetHeight, 0),
    new THREE.Quaternion(),
    new THREE.Vector3(streetSize, 2000, streetSize).multiplyScalar(0.5),
    false
  );
  
  useCleanup(() => {
    physics.removeGeometry(floorPhysicsId);
  });

  return app;
}