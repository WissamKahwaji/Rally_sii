import React from "react";
import PageContainer from "../Components/UI/PageContainer";
import { Form } from "react-router-dom";
import Input from "../Components/UI/Input";
import { useSelector } from "react-redux";
import { baseURL } from "../API/baseURL";
// import { useForm } from "react-router-dom";

const EditCataOneCar = () => {
  //   const formData = useForm();

  const colorsData = useSelector((state) => state.colorsSlice);
  const submitButtonStyle = {
    background: colorsData.data.mainColor,
  };
  return (
    <PageContainer>
      <Form
        method="post"
        className={`flex flex-col items-center`}
        encType="multipart/form-data"
      >
        <div className={`grid grid-cols-2 gap-5`}>
          <Input
            input={{
              title: "Enter The Car Name",
              name: "car_name",
              type: "text",
            }}
          />
          <Input
            input={{
              title: "Enter The Car Description",
              name: "car_desc",
              type: "text",
            }}
          />
          <Input
            input={{
              title: "Enter The Car Image",
              name: "car_img",
              type: "file",
            }}
          />
        </div>

        <button
          style={submitButtonStyle}
          className={`mt-4 py-1 px-4 rounded-lg text-lg font-semibold`}
        >
          Submit
        </button>
      </Form>
      {/* <p>sassss</p> */}
    </PageContainer>
  );
};

export default EditCataOneCar;
export const editCataOneCarAction = async ({ request }) => {
  const data = await request.formData();

  const carObject = {
    title: data.get("car_name"),
    desc: data.get("car_desc"),
    img: data.get("car_img"),
    imgs: [],
  };
  console.log(carObject.img);
  const formData = new FormData();
  formData.append("title", carObject.title);
  formData.append("desc", carObject.desc);
  formData.append("img", carObject.img);
  formData.append("imgs", carObject.imgs);
  formData.forEach((ele) => console.log(ele));
  const response = await fetch(
    `${baseURL}/carPage/651d53a1db430e14fb50636d/add-car-to-cat-one`,
    {
      method: "post",
      body: formData,
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  return data;
};
