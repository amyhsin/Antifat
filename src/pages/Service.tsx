import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

const articles = Array.from({ length: 53 }, (_, i) => ({
  id: i + 1,
  title: `文章標題 ${i + 1}`,
  content: `這是第 ${i + 1} 篇文章的內容...`,
}));

const PER_PAGE = 8;

function Service() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / PER_PAGE);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedArticles = articles.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );
  return (
    <>
      <main id="service">
        <section id="service-title">
          <div className="title">
            <p>主治項目</p>
            <div className="category">
              <h1>腸胃內視鏡</h1>
            </div>
          </div>
        </section>
        <section id="content">
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
          <Stack spacing={2} className="pagination-container">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </Stack>
        </section>
      </main>
    </>
  );
}

export default Service;
