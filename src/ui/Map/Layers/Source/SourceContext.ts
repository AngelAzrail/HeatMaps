import React from 'react';
import VectorSource from 'ol/source/Vector';

const SourceContext = React.createContext(new VectorSource());
export default SourceContext;
