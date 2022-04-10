import React from 'react';
import { Loader as SemanticLoader, Dimmer } from 'semantic-ui-react';

function Loader({ active }) {
  return (
    <Dimmer active={active}>
      <SemanticLoader />
    </Dimmer>
  );
}

export default Loader;