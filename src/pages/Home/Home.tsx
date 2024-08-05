import { useQuery } from "@tanstack/react-query"
import { Pagination } from "antd";

import style from './Home.module.css'
import { getHeroes } from "../../api"
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard/CustomCard";
import { IHero } from "../../interfaces/Hero.interfaces";


const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page") || "1", 10);

  const [page, setPage] = useState(initialPage);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['heroes', page],
    queryFn: () => getHeroes(page)
  })

  useEffect(() => {
    navigate(`/?page=${page}`);
  }, [page, navigate]);

  return (
    <div className={style.home}>
      {isError && <h1>Error try reload page</h1>}
      {
        isLoading ? <h1 className={style.loading}>Loading...</h1> : <>
          <div className={style.list}>
            {data?.results.map((hero: IHero) =>
              <CustomCard key={hero.id} {...hero} />
            )}
          </div>
          <Pagination className={style.pagination} simple defaultCurrent={page} total={data?.count} onChange={setPage} showSizeChanger={false} />
        </>
      }
    </div>
  )
}

export default Home