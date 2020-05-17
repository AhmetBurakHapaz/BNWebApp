import {
    Archive,
    Edit,
    MoreHorizontal,
    Printer,
    Save,
    Trash
  } from 'react-feather';
  import {
    Card,
    DatePicker,
    Dropdown,
    Menu,
    Row,
    Col
  } from 'antd';
  import {
    DiscreteColorLegend,
    FlexibleWidthXYPlot,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalGridLines,
    XAxis,
    YAxis
  } from 'react-vis';
  import NoSSR from 'react-no-ssr';
  import styled from 'styled-components';
  import { theme } from '../styles/GlobalStyles';
  import Donut_chart from './Donut_chart'
  import{ Component } from 'react';
  const { MonthPicker } = DatePicker;
  
  const axes = Array.from(Array(30).keys());
  
  //random data for graphic.
  const generate = () => {
    let arr = [];
    axes.map(x => {
      const y =  0.4;
      arr.push({ x, y });
    });
    return arr;
  };
  
  const series = [
    {
      title: 'Görüntülenme',
      data: generate()
    },
    {
      title: 'Satış',
      data: generate()
    }
  ];
  
  const Legend = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    .rv-discrete-color-legend {
      display: inline-block;
      width: auto !important;
    }
    .rv-discrete-color-legend-item {
      padding-top: 0;
      padding-bottom: 0;
    }
  `;
  
  const menu = (
    <Menu>
      <Menu.Item>
        <Row type="flex" align="middle">
          <Archive size={16} strokeWidth={1} className="mr-3" />{' '}
          <span>Archive</span>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row type="flex" align="middle">
          <Edit size={16} strokeWidth={1} className="mr-3" /> <span>Edit</span>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row type="flex" align="middle">
          <Trash size={16} strokeWidth={1} className="mr-3" /> <span>Delete</span>
        </Row>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Row type="flex" align="middle">
          <Save size={16} strokeWidth={1} className="mr-3" /> <span>Save as</span>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row type="flex" align="middle">
          <Printer size={16} strokeWidth={1} className="mr-3" />{' '}
          <span>Print</span>
        </Row>
      </Menu.Item>
    </Menu>
  );
  
  class SalesAnalysis extends Component{
    render() {
      return (
          <div>
                <Row>
            <Col sm={24} md={24} className="mb-4">
            <Card
            title="Satış Analizi"
            extra={
                <Dropdown overlay={menu}>
                  <MoreHorizontal size={20} strokeWidth={1} fill={theme.textColor} />
                </Dropdown>
            }
            bodyStyle={{ padding: '1rem' }}
            className="mb-4"
            >
            <NoSSR>
                <Legend>
                <DiscreteColorLegend width={180} height={20} items={series} />
                <MonthPicker placeholder="Bir ay seçin" />
                </Legend>
                <FlexibleWidthXYPlot xType="ordinal" height={340} xDistance={100}>
                <VerticalGridLines style={{ strokeWidth: 0.5 }} />
                <HorizontalGridLines style={{ strokeWidth: 0.5 }} />
                <XAxis style={{ strokeWidth: 0.5 }} />
                <YAxis style={{ strokeWidth: 0.5 }} />
                <VerticalBarSeries color="#007bff" data={series[0].data} />
                <VerticalBarSeries
                    color="rgb(211, 232, 255)"
                    data={series[1].data}
                />
                </FlexibleWidthXYPlot>
                </NoSSR>
                </Card>   
                 </Col>
                <Col sm={24} md={12} className="mb-4">
                <Card title = 'İstatistik Çemberi'>
                <Donut_chart/>
                </Card>
                </Col>
                </Row>

          </div>
      );
    }
}
export default SalesAnalysis;