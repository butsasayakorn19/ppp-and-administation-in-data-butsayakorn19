//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [implementation, setImplementation] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setBudget] = useState("");
  const [year, setYear] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [weak, setWeak] = useState("");
  const [strength, setStrength] = useState("");
  const [development, setDevelopment] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !project) {
      alert("Name and project are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          project,
          implementation,
          email,
          mobile,
          budget,
          year,
          evaluation,
          weak,
          strength,
          development,
          suggestion,
        }),
      });

      if (res.ok) {
        router.push("/products");
        // router.push("/");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {/* <h1 className="font-bold py-10 text-2xl">Add New Product</h1> */}
        <Button
          variant="contained"
          color="success"
          className="text- xl font-bold px-20 py-3 mt-5"
          size="large"
        >
          เพิ่มรายการใหม่
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 mx-24">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ยุทธศาสตร์ชาติ
            </label>
            {/* <div className="mt-2">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ยุทธศาสตร์ชาติ"
              /> */}
            {/* </div> */}
            <div className="mt-2">
              <select
                className="input input-bordered inpunt-accent w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="ยุทธศาสตร์ชาติ"
              >
                <option disabled selected>
                  ดัชนีแผนแม่บทยุทธศาสตร์ชาติด้านความมั่นคง
                </option>
                <option>ดัชนีสันติภาพโลก</option>
                <option>ดัชนีสันติความสุข</option>
                <option>ดัชนีสิทธิมนุษยชนและหลักนิติธรรม</option>
                <option>ดัชนีเสถียรภาพทางการเมือง</option>
                <option>
                  ดัชนีการมีสิมทธิ์มีเสียงของประชาชนและการรับผิดชอบ
                </option>
                <option>ดัชนีปลอดภัยจากภัยคุกคาม</option>
                <option>ดัชนีสความสงบสุขภาคใต้</option>
                <option>
                  ดัชนีประสิทธิภาพของหน่วยงานด้านการข่าวและประชาคมข่าวกรอง
                </option>
                <option>ดัชนีความแข็งแกร่งทางกำลังทหาร</option>
                <option>ดัชนีรัฐเปราะบาง</option>
                <option>
                  ดัชนีจำนวนเป้าหมายย่อยของเป้าหมายการพัฒนาที่ยั่งยืน
                  ในเป้าหมายที่ 17 บรรลุตามเป้าหมายที่กำหนด
                </option>
                <option>
                  ดัชนีระดับประสิทะิภาพการดำเนินงานของหน่วยงานด้านการจัดการความมั่นคง
                </option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โครงการ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setProject(e.target.value)}
                value={project}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="โครงการ"
                // defaultValue="/images/1.jpg"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              หน่วยงานที่นำนโยบายไปปฎิบัติ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setImplementation(e.target.value)}
                value={implementation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="หน่วยงานที่นำนโยบายไปปฏิบัติ"
                defaultValue="1"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="อีเมล"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โทรศัพท์
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="โทรศัพท์"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              งบประมาณ(ล้านบาท)
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setBudget(e.target.value)}
                value={budget}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="งบประมาณ"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ปีงบประมาณ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setYear(e.target.value)}
                value={year}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="ปีงบประมาณ"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ผลประเมิน
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEvaluation(e.target.value)}
                value={evaluation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
                placeholder="ผลการประเมิน"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดอ่อน
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setWeak(e.target.value)}
                value={weak}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จุดอ่อน"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดแข็ง
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setStrength(e.target.value)}
                value={strength}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="จุดแข็ง"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              จุดอ่อน
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="Product Category"
              />
            </div>
          </div> */}
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              แนวทางเสริมจุดแข็ง
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setDevelopment(e.target.value)}
                value={development}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="แนวทางเสริมจุดแข็ง"
              />
            </div>
          </div>
          {/* <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ข้อที่ควรปรับปรุงจุดอ่อน
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="Product Category"
              />
            </div>
          </div> */}
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ข้อเสนอแนะ
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setSuggestion(e.target.value)}
                value={suggestion}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                placeholder="ข้อเสนอแนะ"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center iteme-center mt-10">
          {/* <button
            type="submit"
            className="btn btn-primary w-full max-w-xs ml-24"
          >
            Add Product
          </button> */}
          <Button
            tyep="submit"
            variant="contained"
            color="success"
            className="font-bold px-28 py-3"
            size="large"
          >
            เพิ่มรายการ
          </Button>
        </div>
      </form>
    </>
  );
}
