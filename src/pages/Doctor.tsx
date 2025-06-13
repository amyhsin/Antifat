import docImg from "../assets/img/doctors/doc01.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Doctor() {
  return (
    <>
      <main id="doctor">
        <section id="doctor-title">
          <div className="title">
            <div className="category">
              <h1>敦仁診所．腸胃肝膽科</h1>
            </div>
            <div className="name">蕭敦仁 醫師</div>
          </div>
        </section>
        <section id="doctor-detail">
          <div className="avatar">
            <div className="img-container">
              <img src={docImg} alt="" />
            </div>
            <div className="name">蕭敦仁 院長</div>
          </div>
          <div className="info">
            <div className="strength">
              <div className="title">專長</div>
              <div className="items">
                <div className="item">肥胖症</div>
                <div className="item">BC型肝炎</div>
                <div className="item">内科</div>
                <div className="item">慢性病</div>
                <div className="item">腸胃疾病</div>
                <div className="item">自律神經</div>
              </div>
            </div>
            <div className="experience">
              <div className="work-experience">
                <div className="title">經歷</div>
                <div className="desc">
                  省立桃園醫院 內科住院醫師
                  <br />
                  台大醫院消化系内科 研究員
                  <br />
                  省立桃園醫院内科 主治醫師
                  <br />
                  衛生署桃園醫院内科 主治醫師
                  <br />
                  衛生署桃園醫院 肥胖防治中心主任
                </div>
              </div>
              <div className="education">
                <div className="title">學歷</div>
                <div className="desc">
                  台北醫學院醫學系畢
                  <br />
                  台灣大學公共衛生學碩士
                  <br />
                  台灣大學職衛所職業醫學博士
                  <br />
                  <br />
                  教職
                  <br />
                  台北醫學大學公共衛生暨營養學院助理教授
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="time-table">
          <div className="title">114年6月門診表</div>
          <div className="time-table">
            <TableContainer>
              <Table
                sx={{ minWidth: 650 }}
                aria-label="simple table"
                className="table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">時段</TableCell>
                    <TableCell align="center">一</TableCell>
                    <TableCell align="center">二</TableCell>
                    <TableCell align="center">三</TableCell>
                    <TableCell align="center">四</TableCell>
                    <TableCell align="center">五</TableCell>
                    <TableCell align="center">六</TableCell>
                    <TableCell align="center">日</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">早診 8:30 - 12:00</TableCell>
                    <TableCell align="center">●</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">午診 14:00 - 17:30</TableCell>
                    <TableCell align="center">●</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">●</TableCell>
                    <TableCell align="center">●</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">晚診 18:00 - 21:30</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center">●</TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="btn">
            <button>預約看診</button>
          </div>
        </section>
        <section id="knowledge">
          <div className="content">
            <div className="title">知識補充</div>
            <div className="articles">
              <div className="article">
                <div className="topic">腸胃內視鏡</div>
                <div className="title">什麼是胃鏡檢查？</div>
              </div>
              <div className="article">
                <div className="topic">腸胃內視鏡</div>
                <div className="title">無痛胃鏡檢查流程</div>
              </div>
              <div className="article">
                <div className="topic">減重健康</div>
                <div className="title">冬天正是減肥好時節</div>
              </div>
              <div className="article">
                <div className="topic">肝病治療</div>
                <div className="title">您為何需要認識肝病？</div>
              </div>
            </div>
            <div className="btn">
              <button>查看更多</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Doctor;
