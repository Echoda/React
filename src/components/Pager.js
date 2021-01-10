import React from "react";
import "./Pager.css";
/**
 * 分页组件
 * props：
 * 1.current：当前页数
 * 2.limit: 每页最多显示数据量
 * 3.total: 数据总量
 * 4.panelNumber：底部显示的页码按钮个数
 * 5.onPageChange：改变页码
 */
export default function Pager(props) {
  const {
    current = 1,
    limit = 10,
    total = 100,
    panelNumber = 3,
    onPageChange,
  } = props;
  const pageNumber = getPagerNumber(total, limit);
  if (pageNumber === 0) {
    return null;
  }

  const min = getMin(current, panelNumber, pageNumber);
  const max = min + panelNumber - 1;
  //   console.log(min, max)

  const panels = [];
  for (let i = min; i < max + 1; i++) {
    panels.push(
      <span
        key={i}
        className={i === current ? "page active" : "page"}
        onClick={() => {
          toPage(i, current, onPageChange);
        }}
      >
        {i}
      </span>
    );
  }

  return (
    <>
      <span
        className="page"
        onClick={() => {
          toPage(1, current, onPageChange);
        }}
      >
        首页
      </span>
      <span
        className={current === 1 ? "page disabled" : "page"}
        onClick={() => {
          if (current - 1 < 1) {
            return;
          }
          toPage(current - 1, current, onPageChange);
        }}
      >
        上一页
      </span>
      {panels}
      <span
        className={current === pageNumber ? "page disabled" : "page"}
        onClick={() => {
          if (current + 1 > pageNumber) {
            return;
          }
          toPage(current + 1, current, onPageChange);
        }}
      >
        下一页
      </span>
      <span
        className="page"
        onClick={() => {
          toPage(pageNumber, current, onPageChange);
        }}
      >
        尾页
      </span>
      <span>{current}</span>/<span>{pageNumber}</span>
    </>
  );
}

/**
 * 跳转到某一页
 * @param {*} page 目标页码
 * @param {*}
 */
function toPage(page, current, onPageChange) {
  if (page === current) {
    return;
  }
  onPageChange && onPageChange(page);
}

/**
 * 计算页码按钮起始值
 * @param {*} current 当前页码
 * @param {*} panelNumber 页码按钮数量
 * @param {*} pageNumber 页码总数
 */
function getMin(current, panelNumber, pageNumber) {
  let min = current - Math.floor(panelNumber / 2);
  if (current < Math.ceil(panelNumber / 2)) {
    min = 1;
  }
  if (current > pageNumber - Math.floor(panelNumber / 2)) {
    min = pageNumber - panelNumber + 1;
  }
  return min;
}

/**
 * 计算总页数
 * @param {*} total 数据总数
 * @param {*} limit 每页展示数
 */
function getPagerNumber(total, limit) {
  return Math.ceil(total / limit);
}
