import RadialChart from '../../demos/vis/radial-chart/simple-radial-chart';
export default function SimpleRadialChart(props) {
  return (
    <RadialChart
      className="m-auto"
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{ top: 100 }}
      getLabel={d => d.name}
      data={[
        { angle: 1, color: '#007bff', name: 'blue', opacity: 0.2 },
        { angle: 2, color: '#52c41a', name: 'green' },
        { angle: 2, color: '#f5222d', name: 'red' },
        { angle: 5, color: '#faad14', name: 'yellow' },
      ]}
      labelsRadiusMultiplier={1.1}
      labelsStyle={{ fontSize: 16, fill: '#222' }}
      showLabels
      style={{ stroke: '#fff', strokeWidth: 1 }}
      width={400}
      height={300}
    />
  );
}
