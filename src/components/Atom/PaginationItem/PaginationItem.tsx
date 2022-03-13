import React, { FC } from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";
import { Iprops } from "./interfaces";
import "./style.scss";
import classNames from "classnames";

const PaginationItem: FC<Iprops> = (props) => {
  const { className, page, total, setPage } = props;
  const dispatch = useDispatch();
  const handelChange = (page: number) => {
    dispatch(setPage(+page));
  };

  return (
    <div className={classNames("PaginatonDef", className ? className : null)}>
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
