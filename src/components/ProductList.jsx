//components\EditProductForm.jsx
import * as React from "react";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
// import Image from "next/image";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } = await getProducts();

  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold py-10 text-2xl">
            การติดตามและประเมินผลยุทธศาสตร์ชาติ 20 ปี
          </h1>
        </div>
        <div className="text-left ml-16">
          <Link href={"/addProduct"}>
            <Button
              variant="contained"
              color="success"
              className="font-bold px-16"
              size="large"
            >
              เพิ่มรายการ
            </Button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>#</th>
              <th>ยุทธศาสตร์</th>
              <th>โครงการ</th>
              <th>หน่วยงานที่นำนโยบายไปปฏิบัติ</th>
              <th>อีเมล</th>
              <th>โทรศัพท์</th>
              <th>งบประมาณ (ล้านบาท)</th>
              <th>ปีงบประมาณ</th>
              <th>ผลประเมิน</th>
              <th>จุดอ่อน</th>
              <th>จุดแข็ง</th>
              <th>แนวทางเสริมจุดแข็ง</th>
              <th>ข้อเสนอแนะ</th>
              <th>
                <div className="flex justify-center items-center font-bold">
                  Edit & Delete
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((element, index) => (
              <tr className="hover" key={element._id}>
                <th>{index + 1}</th>
                <td>{element.name}</td>
                <td>{element.project}</td>
                <td>{element.implementation}</td>
                <td>{element.email}</td>
                <td>{element.mobile}</td>
                <td>{element.budget}</td>
                <td>{element.year}</td>
                <td>{element.evaluation}</td>
                <td>{element.weak}</td>
                <td>{element.strength}</td>
                <td>{element.development}</td>
                <td>{element.suggestion}</td>
                {/* <td></td> */}
                <th>
                  <div className="flex justify-center items-center">
                    <Link href={`/editProduct/${element._id}`}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        className="mr-2"
                        size="large"
                      >
                        <EditIcon />
                      </Button>
                    </Link>
                    <RemoveBtn id={element._id} />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
