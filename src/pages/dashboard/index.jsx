import { useState, useEffect } from "react";
import { Button, Row, Col, Table } from "reactstrap";
import Modal from "../../component/Modal";
import jsonData from "../../db/products.json";
import FormCreate from "./createData";
import FormEdit from "./editData";

const Dashboard = () => {
  const [data, setData] = useState({ headers: [], rows: [] });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  useEffect(() => {
    setData(jsonData);
  }, []);

  console.log(data);
  return (
    <>
      <h1>CRUD Data</h1>
      <br />
      <Button color="primary" onClick={() => setIsCreateModalOpen(true)}>
        Add Data +
      </Button>
      <br />
      <br />
      <Table>
        <thead>
          <tr>
            {data.headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, idx) => (
            <tr key={idx}>
              <th scope="row">{idx + 1}</th>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.stock}</td>
              <td>{row.category}</td>
              <td>{/* <Button onClick={}>Edit</Button> */}</td>
              <td>{/* <Button onClick={}>Delete</Button> */}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Ambil data Modal */}
      <Modal title={`Add Data`} isOpen={isCreateModalOpen} setOpen={setIsCreateModalOpen} children={<FormCreate data={data.rows} setData={setData} setOpen={setIsCreateModalOpen} />} />
    </>
  );
};

export default Dashboard;
