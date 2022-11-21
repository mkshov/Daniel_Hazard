import * as React from "react";
import "./Drawer.css";

import Drawer from "@mui/material/Drawer";
import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function TemporaryDrawer() {
  const { t } = useTranslation();

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
    <Box sx={{ width: "100%" }}>
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
            {t("close")}
          </Typography>
          <div className="sg-ctn">
            <div className="sg-ctn2 j-sg-ctn">
              <div className="sg-title">{t("sizeGuide")}</div>
              <div className="sg-close iconfont">&#xe655;</div>
              <div className="sg-table-wrap">
                <Box
                  sx={{
                    maxWidth: "-webkit-fill-available",
                    overflowX: "auto",
                  }}
                >
                  <table
                    className="sg-table j-cm-table table1"
                    cellSpacing="0"
                    cellPadding="0"
                  >
                    <tbody>
                      <tr className="trhead">
                        <td className="border-right">{t("euroSize")}</td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>A</span>
                          </div>
                          {t("chest")}(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>B</span>
                          </div>
                          {t("waist")}(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>C</span>
                          </div>
                          {t("hip")}(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>D</span>
                          </div>
                          {t("thigh")}(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>E</span>
                          </div>
                          {t("inseam")}(CM)
                        </td>
                        <td className="border-right">
                          <div className="measure-wrap">
                            <span>F</span>
                          </div>
                          {t("sleeve")}(CM)
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
                </Box>

                <p id="goods_dash_tip" className="sg-tip"></p>

                <div className="measure-pic">
                  <div className="measure-pic0">
                    <img src="/assets/size-human.png" alt="size guide" />
                  </div>
                  <div className="measure-pic-guide">
                    <div className="measure-wrap">
                      <h6>
                        <span>A</span>
                        {t("chest")}
                      </h6>
                      <p>{t("chestChild")}</p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>B</span> {t("waist")}
                      </h6>
                      <p>{t("waistChild")}</p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>C</span>
                        {t("hip")}
                      </h6>
                      <p>{t("hipChild")}</p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>D</span>
                        {t("thigh")}
                      </h6>
                      <p>{t("thighChild")}</p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>E</span>
                        {t("inseam")}
                      </h6>
                      <p>{t("inseamChild")}</p>
                    </div>
                    <div className="measure-wrap">
                      <h6>
                        <span>F</span>
                        {t("sleeve")}
                      </h6>
                      <p>{t("sleeveChild")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="mt-20">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ fontWeight: "bold" }}
            onClick={toggleDrawer(anchor, true)}
            className="main-button"
          >
            {t("sizeChart")}
          </Button>
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
