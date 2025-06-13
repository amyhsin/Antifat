import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Schedule() {
  return (
    <>
      <main id="schedule">
        <section id="schedule-title">
          <div className="title">
            <h1>門診時間</h1>
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
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      張伯丞
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">休診</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">午診 14:00 - 17:30</TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">
                      蕭敦仁
                      <br />
                      郭士豪
                    </TableCell>
                    <TableCell align="center">
                      蕭敦仁
                      <br />
                      賴昶廷
                    </TableCell>
                    <TableCell align="center">
                      賴昶廷
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">休診</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">晚診 18:00 - 21:30</TableCell>
                    <TableCell align="center">
                      嚴助成
                      <br />
                      郭士豪
                      <br />
                      李俊志
                    </TableCell>
                    <TableCell align="center">
                      蕭敦仁
                      <br />
                      賴昶廷
                      <br />
                      何天民
                    </TableCell>
                    <TableCell align="center">
                      郭士豪
                      <br />
                      張元穎
                    </TableCell>
                    <TableCell align="center">
                      賴昶廷
                      <br />
                      何天民
                    </TableCell>
                    <TableCell align="center">
                      賴昶廷
                      <br />
                      黃立
                    </TableCell>
                    <TableCell align="center">休診</TableCell>
                    <TableCell align="center">休診</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="btn">
            <button>預約看診</button>
          </div>
        </section>
        <section id="message">
          <div className="content">
            <div className="title">門診訊息</div>
            <div className="messages">
              <div className="message">
                <div className="title">看診訊息</div>
                <div className="text">
                  蕭敦仁醫師：4/8(二)~4/14(一)
                  <br />
                  週二晚診最晚報到時間20:00
                  <br />
                  週四及週五午診最晚報到時間18:3
                  嚴助成醫師：4/3(四)、4/13(日)~4/17(四)
                  <br />
                  賴昶廷醫師：4/5(六)、4/13(日)~4/17(四)
                  <br />
                  黃立醫師：4/6(日)~4/10(四)
                  <br />
                  週二晚診最晚報到時間20:00
                  <br />
                  週四及週五午診最晚報到時間18:3
                  嚴助成醫師：4/3(四)、4/13(日)~4/17(四)
                  <br />
                  賴昶廷醫師：4/5(六)、4/13(日)~4/17(四)
                  <br />
                  黃立醫師：4/6(日)~4/10(四)
                </div>
              </div>
              <div className="message day-off">
                <div className="title">請假訊息</div>
                <div className="text">
                  蕭敦仁醫師：4/8(二)~4/14(一)
                  <br />
                  嚴助成醫師：4/3(四)、4/13(日)~4/17(四)
                  <br />
                  賴昶廷醫師：4/5(六)、4/13(日)~4/17(四)
                  <br />
                  黃立醫師：4/6(日)~4/10(四)
                </div>
              </div>
              <div className="message">
                <div className="title">代診訊息</div>
                <div className="text">
                  郭士豪醫師： 4/5(六) 午診、4/15(二)午診
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Schedule;
