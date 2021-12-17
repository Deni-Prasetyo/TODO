import { useState, useEffect } from "react";
import { Button, Row, Col, Table } from "reactstrap";
import Modal from "../../component/Modal";
import jsonData from "../../db/products.json";
import FormCreate from "./createData";
import FormEdit from "./editData";

const Dashboard = () => {
  const [data, setData] = useState({ headers: [], rows: [] });
  useEffect(() => {
    setData(jsonData);
  }, []);

  console.log(data);
  return (
    <>
      <h1>CRUD Data</h1>
      <br />
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
      </Table>
    </>
  );
};

export default Dashboard;
