import { NavLink } from "react-router-dom";
import logo from "../img/logo/logo.svg";
const base = import.meta.env.BASE_URL;

function Header() {
  const doctors = [
    {
      id: 1,
      name: "蕭敦仁",
    },
    {
      id: 2,
      name: "嚴助成",
    },
    {
      id: 3,
      name: "郭士豪",
    },
    {
      id: 4,
      name: "賴昶廷",
    },
    {
      id: 5,
      name: "李俊志",
    },
    {
      id: 6,
      name: "黃　立",
    },
    {
      id: 7,
      name: "張元穎",
    },
    {
      id: 8,
      name: "張伯丞",
    },
    {
      id: 9,
      name: "何天民",
    },
  ];

  // const services = [
  //   {
  //     id: 1,
  //     name: "蕭敦仁",
  //   },
  //   {
  //     id: 2,
  //     name: "嚴助成",
  //   },
  //   {
  //     id: 3,
  //     name: "郭士豪",
  //   },
  //   {
  //     id: 4,
  //     name: "賴昶廷",
  //   },
  //   {
  //     id: 5,
  //     name: "李俊志",
  //   },
  //   {
  //     id: 6,
  //     name: "黃　立",
  //   },
  //   {
  //     id: 7,
  //     name: "張元穎",
  //   },
  //   {
  //     id: 8,
  //     name: "張伯丞",
  //   },
  //   {
  //     id: 9,
  //     name: "何天民",
  //   },
  // ];
  return (
    <>
      <header>
        <NavLink to={`${base}`} className="logo">
          <img src={logo} alt="" />
        </NavLink>
        <nav className="nav">
          <div className="navItem navItem--dropdown">
            <span>
              <NavLink to={`${base}about/intro`}>關於我們</NavLink>
            </span>
            <div className="dropdown">
              <NavLink to={`${base}about/intro`} className="dropdown__item">
                診所簡介
              </NavLink>
              <NavLink to={`${base}about/schedule`} className="dropdown__item">
                門診時間
              </NavLink>
              <NavLink
                to={`${base}about/environment`}
                className="dropdown__item"
              >
                環境介紹
              </NavLink>
              <NavLink to={`${base}about/traffic`} className="dropdown__item">
                交通資訊
              </NavLink>
            </div>
          </div>

          <NavLink
            to={`${base}news`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            最新消息
          </NavLink>

          <div className="navItem navItem--dropdown">
            <span>
              <NavLink to={`${base}doctors`}>醫療團隊</NavLink>
            </span>
            <div className="dropdown">
              <NavLink to={`${base}doctors`} className="dropdown__item">
                全體醫師
              </NavLink>
              {doctors.map((doctor) => (
                <NavLink
                  to={`${base}doctors/${doctor.id}`}
                  className="dropdown__item"
                  key={doctor.id}
                >
                  {doctor.name} 醫師
                </NavLink>
              ))}
            </div>
          </div>

          <div className="navItem navItem--dropdown">
            <span>
              <NavLink to={`${base}service/endoscopy`}>主治項目</NavLink>
            </span>
            <div className="dropdown">
              <NavLink
                to={`${base}service/endoscopy`}
                className="dropdown__item"
              >
                腸胃內視鏡
              </NavLink>
              <NavLink to={`${base}service/weight`} className="dropdown__item">
                減重健康
              </NavLink>
              <NavLink to={`${base}service/liver`} className="dropdown__item">
                肝病治療
              </NavLink>
              <NavLink to={`${base}service/chronic`} className="dropdown__item">
                慢性病照護
              </NavLink>
              <NavLink to={`${base}service/general`} className="dropdown__item">
                一般內科
              </NavLink>
              <NavLink to={`${base}service/checkup`} className="dropdown__item">
                健康檢查
              </NavLink>
            </div>
          </div>

          <NavLink
            to={`${base}more-info`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            更多資訊
          </NavLink>

          <NavLink
            to={`${base}videos`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            影音資訊
          </NavLink>

          <NavLink
            to={`${base}contact`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            聯絡我們
          </NavLink>

          <NavLink
            to={`${base}login`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            登入/註冊
          </NavLink>
        </nav>
        {/* <nav>
          <NavLink
            to={`${base}about`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            關於我們
          </NavLink>
          <NavLink
            to={`${base}news`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            最新消息
          </NavLink>
          <NavLink
            to={`${base}doctors`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            醫療團隊
          </NavLink>
          <NavLink
            to={`${base}service`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            主治項目
          </NavLink>
          <NavLink
            to={`${base}more-info`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            更多資訊
          </NavLink>
          <NavLink
            to={`${base}videos`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            影音資訊
          </NavLink>
          <NavLink
            to={`${base}contact`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            聯絡我們
          </NavLink>
          <NavLink
            to={`${base}login`}
            className={({ isActive }) =>
              isActive ? "navItem active" : "navItem"
            }
          >
            登入/註冊
          </NavLink>
        </nav> */}
      </header>
    </>
  );
}

export default Header;
