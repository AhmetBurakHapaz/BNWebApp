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
  import SalesAnalysis from './SalesAnalysis'
  import{ Component } from 'react';
  const { MonthPicker } = DatePicker;
  
  const axes = Array.from(Array(12).keys());
  
  //random data for graphic.
  const generate = () => {
    let arr = [];
    axes.map(x => {
      const y = Math.floor(Math.random() * 10) + 1;
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
  
  class Overview extends Component{
    render() {
      return (
        <div>    
            <SalesAnalysis/>
            <Donut_chart/>
        </div>
      );
    }
  }
  
  export default Overview;