import React, { Component } from "react";
import Pager from "./Pager";
import StudentList from "./StudentList";

export default class PagerCointer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      limit: 10,
      stus: [],
      total: 0,
    };
    this.fetchStidents(1);
  }

  fetchStidents = async (page) => {
    // console.log(this.state.current, '--');
    const resp = await fetch(
      `http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${page}&size=${this.state.limit}`
    )
      .then((res) => res.json())
      .then((res) => res.data);

    this.setState({ stus: resp.findByPage, total: resp.cont });
  };

  onPageChange = (page) => {
    this.setState({ current: page });
    this.fetchStidents(page);   //fetchStidents会在setState前执行
  };


  render() {
    const { current, limit, total, stus } = this.state;
    return (
      <>
        <StudentList stus={stus} />
        <Pager
          current={current}
          limit={limit}
          total={total}
          panelNumber={5}
          onPageChange={this.onPageChange}
        />
      </>
    );
  }
}
