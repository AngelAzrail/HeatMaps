import { useEffect, useMemo } from 'react';
import { Fill, Stroke, Style, Text } from 'ol/style';
import CircleStyle from 'ol/style/Circle';

const setColor = (weight: number): string => {
  if (weight >= 100) return 'rgb(255,0,0)';
  if (weight >= 75 && weight < 100) return 'rgb(255,34,34)';
  if (weight >= 50 && weight < 75) return 'rgb(255,119,34)';
  if (weight >= 25 && weight < 50) return 'rgb(255,211,34)';
  return 'rgb(214,255,34)';
};

const ClusterOptions = ({ layer }: any): null => {
  const mainStyle = useMemo(
    () =>
      new Style({
        text: new Text({
          font: '12px Manrope,sans-serif',
          fill: new Fill({
            color: '#ffffff',
          }),
          stroke: new Stroke({
            color: '#000000',
            width: 2,
          }),
          textBaseline: 'bottom',
          offsetY: 10,
        }),
      }),
    []
  );

  const style = useMemo(
    () =>
      (features: any): Style => {
        const weight = features.getProperties().features.length;
        const image = new CircleStyle({
          radius: Math.log2(weight) * 4 + 8,
          fill: new Fill({
            color: setColor(weight),
          }),
        });
        mainStyle.getText().setText(weight.toString());
        mainStyle.setImage(image);
        return mainStyle;
      },
    [mainStyle]
  );

  useEffect(() => {
    layer.setStyle(style);
  }, [layer, style]);

  return null;
};
export default ClusterOptions;
