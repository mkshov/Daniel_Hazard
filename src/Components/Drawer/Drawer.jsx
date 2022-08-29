import * as React from "react";
import "./Drawer.css";

import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "100%" }}>
      <div className="sg-ctn0">
        <div className="return_dialog_bg"></div>
        <div className="sg-ctn1">
          <div className="hidectn-mask"></div>
          <Typography
            variant="h6"
            onClick={toggleDrawer(anchor, false)}
            sx={{
              fontWeight: "bold",
              textAlign: "end",
              padding: "20px 50px",
              cursor: "pointer",
            }}
          >
            Close
          </Typography>
          <div className="sg-ctn">
            <div className="sg-ctn2 j-sg-ctn">
              <div className="sg-title">SIZE GUIDE</div>
              <div className="sg-close iconfont">&#xe655;</div>
              <div className="sg-table-wrap">
                <div
                  style={{
                    maxWidth: "-webkit-fill-available",
                    overflowX: "auto",
                  }}
                >
                  <table
                    className="sg-table j-cm-table"
                    cellSpacing="0"
                    cellPadding="0"
                    style={{ maxWidth: 350 }}
                  >
                    <tbody>
                      <tr className="trhead">
                        <td className="border-right">Euro Size</td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>A</span>
                          </div>
                          CHEST(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>B</span>
                          </div>
                          WAIST(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>C</span>
                          </div>
                          HIP(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>D</span>
                          </div>
                          THIGH(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>E</span>
                          </div>
                          INSEAM(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>F</span>
                          </div>
                          SLEEVE(CM)
                        </td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">44</td>
                        <td className="border-right">86-90</td>
                        <td className="border-right">74-76</td>
                        <td className="border-right">87-91</td>
                        <td className="border-right">51-53</td>
                        <td className="border-right">74-76</td>
                        <td className="border-right">52-54</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">46</td>
                        <td className="border-right">90-94</td>
                        <td className="border-right">76-80</td>
                        <td className="border-right">91-95</td>
                        <td className="border-right">53-55</td>
                        <td className="border-right">76-78</td>
                        <td className="border-right">54-56</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">48</td>
                        <td className="border-right">94-98</td>
                        <td className="border-right">80-84</td>
                        <td className="border-right">95-99</td>
                        <td className="border-right">55-57</td>
                        <td className="border-right">78-80</td>
                        <td className="border-right">56-58</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">50</td>
                        <td className="border-right">98-102</td>
                        <td className="border-right">84-88</td>
                        <td className="border-right">99-103</td>
                        <td className="border-right">57-59</td>
                        <td className="border-right">80-82</td>
                        <td className="border-right">58-60</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">52</td>
                        <td className="border-right">102-106</td>
                        <td className="border-right">88-92</td>
                        <td className="border-right">103-107</td>
                        <td className="border-right">59-61</td>
                        <td className="border-right">82-84</td>
                        <td className="border-right">60-62</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">54 </td>
                        <td className="border-right">106-110</td>
                        <td className="border-right">92-96</td>
                        <td className="border-right">107-111</td>
                        <td className="border-right">61-63</td>
                        <td className="border-right">84-86</td>
                        <td className="border-right">62-64</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">56</td>
                        <td className="border-right">110-114</td>
                        <td className="border-right">96-100</td>
                        <td className="border-right">111-115</td>
                        <td className="border-right">63-65</td>
                        <td className="border-right">86-88</td>
                        <td className="border-right">64-66</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">58</td>
                        <td className="border-right">114-128</td>
                        <td className="border-right">100-104</td>
                        <td className="border-right">115-119</td>
                        <td className="border-right">65-67</td>
                        <td className="border-right">88-90</td>
                        <td className="border-right">66-68</td>
                      </tr>
                      <tr className="cm-inch">
                        <td className="border-right subtitle">60</td>
                        <td className="border-right">118-122</td>
                        <td className="border-right">104-108</td>
                        <td className="border-right">119-123</td>
                        <td className="border-right">67-69</td>
                        <td className="border-right">88-90</td>
                        <td className="border-right">66-68</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p id="goods_dash_tip" className="sg-tip"></p>

                <div className="measure-pic">
                  <div className="measure-pic0">
                    <img
                      src="https://i.ibb.co/9gDkK6Z/Picsart-22-08-22-17-28-31-238.png"
                      alt="size guide"
                    />
                  </div>
                  <div className="measure-pic-guide">
                    <div className="measure-wrap">
                      <h6>
                        <span>A</span>CHEST
                      </h6>
                      <p>
                        While standing with your arms relaxed at your side ,
                        wrap a flexible tape measure around your chest at its
                        largest point The tape measure should go through your
                        armpit and stay parallel with the floor while taking the
                        measurement .
                      </p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>B</span> WAIST
                      </h6>
                      <p>
                        While standing in a relaxed position , measure around
                        your natural waistline , while keeping the tape measure
                        parallel to the floor .
                      </p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>C</span>HIP
                      </h6>
                      <p>
                        While standing in a relaxed position , measure around
                        your fullest part of your hips , while keeping the tape
                        measure parallel to the floor .
                      </p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>D</span>THIGH
                      </h6>
                      <p>
                        While standing in a relaxed position , measure around
                        your thigh just below the crotch , while keeping the
                        tape measure parallel to the floor .
                      </p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>E</span>INSEAM
                      </h6>
                      <p>
                        While standing in a relaxed position , measure the total
                        length the inside of your leg , from crotch to ankle .
                      </p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>F</span>SLEEVE
                      </h6>
                      <p>
                        While standing with your arms relaxed at your side ,
                        place one end of a flexible tape measure at the peak of
                        your shoulder . Measure down the arm , over the point of
                        your elbow , and finish at the wrist bone .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-20">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Typography
            sx={{
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
              display: "inline",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            Size Chart
          </Typography>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
