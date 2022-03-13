import React, { FC } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Iprops } from "./interfaces";
import { setPage } from "../../organisms/ItemsList/effects/actionCreators";
import { AppStoreType } from "../../../redux/interfaces";
import "./style.scss";

const PaginationItem: FC<Iprops> = (props) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { page, total } = useSelector((state: AppStoreType) => state.itemsList);
  const handelChange = (page: number) => {
    dispatch(setPage(+page));
  };

  return (
    <div className={className}>
      <Pagination
        current={page}
        onChange={(page) => handelChange(page)}
        total={total}
        pageSizeOptions={[10]}
      />
    </div>
  );
};

export default PaginationItem;
