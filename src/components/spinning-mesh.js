import React, {useRef} from 'react';
import {Box, MeshWobbleMaterial} from 'drei';

/**
 * A mesh is a class representing triangular polygon mesh based objects
 * 
 */
const SpinningMesh = (props) => {
    // a ref to target the mesh
    const meshRef = useRef();

    return (
      <Box {...props} ref={meshRef} castShadow>
          <MeshWobbleMaterial
          {...props}
          attach="material"
          factor={0.8}
          // speed={6}
          />
      </Box>
    )
}

export default SpinningMesh;